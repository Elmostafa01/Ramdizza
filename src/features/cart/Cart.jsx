import { TiArrowLeftThick } from "react-icons/ti";
import LinkButton from '../../UI/LinkButton';
import Button from '../../UI/Button';
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidCart } from "react-icons/bi";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";
import EmptyCart from "./EmptyCart";


function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart />

  return (
    <div className="h-screen w-screen flex items-center justify-center px-2">
      <div className='cart__layout relative bg-stone-50 h-[600px] w-full max-w-2xl border rounded-xl flex gap-4 flex-col justify-center items-center'>
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
        <div className='w-full max-w-xl p-5 mt-12'>
          <h2 className='flex justify-center items-center text-zinc-950 mb-6 text-center font-poppins text-[1.3rem]'> 
            <span className="mb-1 mr-2"><BiSolidCart size="1.2em"/></span>
            <span className="uppercase font-bold px-2 rounded-3xl">your Cart</span>
            <span className="uppercase font-bold py-1 px-4 rounded-3xl">{username}</span>
          </h2>
          <div className="your__cart px-4 w-full h-[17rem] max-w-xl overflow-scroll">
            <ul className="divide-y divide-stone-200 border-b">
              {cart.map(item => <CartItem item={item} key={item.pizzaId} />)}
            </ul>
          </div>
        </div>
        <div className='mb flex justify-center items-center gap-4'>
          <Button 
          to="/order/new" 
          color="bg-glovo active:scale-105" 
          radius="rounded-full" 
          hover="hover:bg-yellow-300"
          px="px-5"
          py="py-3"
          weight="text-sm font-[600]"
          >
            Order pizzas
          </Button>
          <Button 
          onClick={() => dispatch(clearCart())}
          color="border-2 focus-ring focus:ring-zinc-100 active:scale-105" 
          radius="rounded-full" 
          text="text-slate-900 font-bold" 
          hover="hover:bg-zinc-800 hover:text-zinc-100"
          weight="text-sm font-600"
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
