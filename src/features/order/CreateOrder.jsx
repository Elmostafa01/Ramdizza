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
    <div className="p-14 bg-stone-50  border rounded-xl gap-5  flex flex-col">
      <h2 className="font-poppins font-semibold text-yellow-600  text-xl">Ready to order 🍕?</h2>
      <Form method="POST" className="flex flex-col items-start justify-center gap-5">
        <div className="w-full">
          <label className="font-poppins font-s">First Name</label>
          <input type="text" name="customer" required className="input"/>
        </div>

        <div className="w-full">
          <label className="font-poppins font-s">Phone number</label>
            <input type="tel" name="phone" required className="input"/>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div className="w-full">
          <label className="font-poppins font-s">Address</label>
          <input type="text" name="address" required className="input"/>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-4 w-4 accent-yellow-400 mr-2 
            focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mx-auto">
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <Button 
          disabled={isSubmitting} 
          color="bg-glovo" 
          text="text-stone-950" 
          hover="hover:bg-yellow-300"
          radius="rounded"
          focusBg="focus:bg-yellow-200"
          >
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </Button>
        </div>
      </Form>
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
