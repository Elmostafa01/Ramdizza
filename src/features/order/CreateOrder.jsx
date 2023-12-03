import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
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
    <div className="bg-stone-50 p-20 border rounded-xl gap-5 flex flex-col justify-center items-center'">
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST" className="flex flex-col items-start justify-center gap-5">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div className="block">
          <label>Phone number</label>
          <div className="float-right inline-block w-full">
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div className="block">
          <label>Address</label>
          <div className="float-right inline-block w-full">
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <button disabled={isSubmitting}
           className="bg-glovo uppercase font-poppins font-semibold px-4 py-3 text-stone-950
           inline-block tracking-wide rounded hover:bg-yellow-300 transition-colors duration-300
           focus:outli-none focus:ring focus:ring-yellow-200 focus:bg-yellow-200 focus:ring-offset-2
           disabled:cursor-not-allowed">
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </button>
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
