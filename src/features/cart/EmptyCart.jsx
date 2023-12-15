import LinkButton from '../../UI/LinkButton';
import { TiArrowLeftThick } from "react-icons/ti";


function EmptyCart() {
  return (
    <div className='cart__layout relative bg-stone-50 h-[300px] w-full max-w-2xl px-10 border rounded-xl flex gap-4 flex-col justify-center items-center'>
        <div className='w-full max-w-md p-10 mt-12'>
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
          <p className='font-semibold text-left'>
            Your cart is empty Now.<br/> Start adding some pizzas 🍕
          </p>
        </div>
    </div>
  );
}

export default EmptyCart;
