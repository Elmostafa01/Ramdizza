import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

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
    <div className='bg-stone-50 p-10 border rounded-xl flex flex-col gap-2 justify-center items-center'>
      <Link 
        to="/menu" 
        className='text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-200 px-3 py-2 rounded-full 
        font-poppins font-semibold flex items-center justify-center gap-1'>
        <IoMdArrowRoundBack />
        <span>Back to menu</span>
      </Link>
      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
