import { TiArrowLeftThick } from "react-icons/ti";
import LinkButton from '../../UI/LinkButton';
import Button from '../../UI/Button';

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
      <div className='bg-stone-50 p-10 h-[400px] w-full max-w-md border rounded-xl flex flex-col gap-8 justify-center items-center'>
        <LinkButton
          to="/menu"
          mb="mb-6"
        >
          <TiArrowLeftThick />
          <span>Back to menu</span>
        </LinkButton>
        <div className='mb-4'>
          <h2 className='font-poppins text-[1.5rem]'>Your cart, %NAME%</h2>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <Button 
          to="/order/new" 
          color="bg-glovo" 
          radius="rounded-full" 
          hover="hover:bg-yellow-300"
          px="px-9"
          py="py-3"
          weight="font-[600]"
          >
            Order pizzas
          </Button>
          <Button 
          color="bg-zinc-600" 
          radius="rounded-full" 
          text="text-slate-200" 
          hover="hover:bg-zinc-800"
          weight="font-600"
          px="px-12"
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
