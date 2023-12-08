import { TiArrowLeftThick } from "react-icons/ti";
import LinkButton from '../../UI/LinkButton';
import Button from '../../UI/Button';
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className='relative bg-stone-50 h-[500px] w-full max-w-xl border rounded-xl flex gap-5 flex-col justify-center items-center'>
        <LinkButton
          to="/menu"
          mb="mb-6"
          position="absolute"
          top="top-5"
          left="left-5"
          text="text-sky-300"
        >
          <TiArrowLeftThick />
          <span>Back to menu</span>
        </LinkButton>
        <div className='w-full max-w-md p-5'>
          <h2 className='mb-6 text-center font-poppins text-[1.5rem]'>
            Your cart, %NAME%
          </h2>
          <ul className="divide-y divide-stone-200 border-b">
            {cart.map(item => <CartItem item={item} key={item.key} />)}
          </ul>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <Button 
          to="/order/new" 
          color="bg-glovo" 
          radius="rounded-full" 
          hover="hover:bg-yellow-300"
          px="px-5"
          py="py-3"
          weight="font-[600]"
          >
            Order pizzas
          </Button>
          <Button 
          color="border-2" 
          radius="rounded-full" 
          text="text-slate-900 font-bold" 
          hover="hover:bg-zinc-800 hover:text-zinc-100"
          weight="font-600"
          px="px-7"
          py="p-3"
          >
            Clear cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
