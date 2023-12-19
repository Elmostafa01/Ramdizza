import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createOrder} from '../../services/apiRestaurant'
import { fetchAddress, getUsername } from "../user/userSlice";
import { clearCart, getCart, getTotalPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../../UI/Button";
import EmptyCart from "../cart/EmptyCart";
import store from '../../store';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
  const phoneMsg = "Please give us your phone Number we might need it to contact you" 


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: adressStatus,
    position,
    adress,
    error: errorAdress,
  } = useSelector((state) => state.user);
  const isLoadingAdress = adressStatus === 'loading'

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPrice);

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart />;

  return (
    <div className="w-screen h-screen flex place-items-center justify-center px-2">
      <div className="p-14 bg-stone-50 w-full max-w-2xl border rounded-xl gap-5 flex flex-col">
        <h2 className="font-poppins font-semibold drop-shadow-sm text-yellow-400 text-2xl text-center mb-8">Order Quickly ! 🍕</h2>
        <Form method="POST" className="flex flex-col items-start justify-center gap-5">
          <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 font-poppins">First Name</label>
            <input 
              type="text" 
              name="customer" 
              defaultValue={username}
              required 
              className="input grow"
            />
          </div>
          <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 font-poppins">Phone number</label>
            <div className="grow">
              <input 
                type="tel" 
                name="phone" 
                required 
                className="input w-full"
              />
              {formErrors?.phone && (
                <p className="text-xs font-medium mt-2 bg-red-100 text-red-700 p-2 rounded-md">
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center relative">
            <label className="sm:basis-40 font-poppins">Address</label>
            <div className="grow">
              <input 
                className="input w-full"
                type="text" 
                name="address" 
                defaultValue={adress}
                required 
              />

              {adressStatus === 'error' && (
                  <p className="text-xs font-medium mt-2 bg-red-100 text-red-700 p-2 rounded-md">
                    {errorAdress}
                  </p>
              )}

              {!position.latitude && !position.longtitude && (
              <span 
                className="bg-emerald-400 hover:bg-emerald-600 
                text-slate-50 flex items-center justify-center absolute position-btn">
                <Button
                  disabled={isLoadingAdress}
                  color="flex items-center gap-1"
                  text="font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  <FaLocationDot />
                  Position
                </Button>
              </span>)}
            </div>
          </div>
          <div className="mx-auto my-2 flex items-center gap-5">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              className="h-4 w-4 accent-yellow-400 mr-2
              focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
          </div>
          <div className="mx-auto">
            <input 
              type="hidden" 
              name="cart" 
              value={JSON.stringify(cart)}
            />
            <input 
              type="hidden" 
              name="position" 
              value={
                position.longtitude && position.latitude ? 
                `${position.latitude},${position.longtitude}`
                : ''} 
            />
            <Button
            disabled={isSubmitting}
            color="bg-glovo focus-ring transition-all focus:ring-yellow-300 active:scale-105"
            text=" font-poppins text-stone-950 text-[.8rem]"
            hover="hover:bg-yellow-300"
            radius="rounded-full"
            focusBg="focus:bg-yellow-200"
            px="px-8"
            py="py-3"
            weight="font-extrabold"
            >
              {isSubmitting ? 'Placing order...' : `Order now from ${formatCurrency(totalPrice)}`}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({request}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };


  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = phoneMsg;
  if (Object.keys(errors).length > 0) return errors;
  
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
