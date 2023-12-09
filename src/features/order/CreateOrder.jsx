import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../UI/Button";
import {createOrder} from '../../services/apiRestaurant'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
  const phoneMsg = "Please give us your phone Number we might need it to contact you" 

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;


  return (
    <div className="w-screen h-screen flex place-items-center justify-center">
      <div className="p-14 bg-stone-50 w-full max-w-2xl border rounded-xl gap-5 flex flex-col">
        <h2 className="font-poppins font-semibold drop-shadow-sm text-yellow-400 text-2xl text-center mb-8">Start ordering 🍕</h2>
        <Form method="POST" className="flex flex-col items-start justify-center gap-5">
          <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 font-poppins">First Name</label>
            <input 
              type="text" 
              name="customer" 
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
              {formErrors?.phone && <p className="text-xs font-medium mt-2 bg-red-100 text-red-700 p-2 rounded-md">{formErrors.phone}</p>}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 font-poppins">Address</label>
            <div className="grow">
              <input 
                type="text" 
                name="address" 
                required 
                className="input w-full"
              />
            </div>
          </div>
          <div className="mx-auto my-2 flex items-center gap-5">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              className="h-4 w-4 accent-yellow-400 mr-2
              focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
              // value={withPriority}
              // onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
          </div>
          <div className="mx-auto">
            <input 
              type="hidden" 
              name="cart" 
              value={JSON.stringify(cart)}
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
              {isSubmitting ? 'Placing order...' : 'Order now'}
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
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = phoneMsg;
  if (Object.keys(errors).length > 0) return errors;
  
  //const newOrder = await createOrder(order);
  
 // return redirect(`/order/${newOrder.id}`);
 return null;
}

export default CreateOrder;
