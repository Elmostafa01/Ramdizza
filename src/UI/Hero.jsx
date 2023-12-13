import pizzaThree from '../images/pizza-3.png'
import CreateUser from '../features/user/CreateUser'
import { useSelector } from 'react-redux'
import Button from './Button'
import { FaSmile } from "react-icons/fa";


const Hero = () => {
  const username = useSelector((state) => state.user.username);

  return (
<>
<div className="zoom right-hero items-center flex flex-col w-full h-min p-6">
    <div className='title'>
        <h1 className="font-extrabold text-center text-clamp break-words font-nunito">
        Order silently taste loudly with Ramdizza
        </h1>
    </div>
    {username === '' ? 
    <CreateUser /> : 
    <Button 
    to="/menu"
    color="flex items-center gap-2 bg-zinc-900 focus-ring focus:ring-zinc-100 font-extrabold" 
    text="text-slate-100 text-sm" 
    hover="hover:bg-emerald-700"
    focusBg="hover:bg-zinc-700"
    radius="rounded-full"
    px="px-6"
    py="py-4"
    >
      <FaSmile size="1rem"/>
      <span>Continue Ordering</span>
    </Button>}
</div>      
<div className='zoom'>
  <div className='left-hero h-100 w-100 pointer-events-none'>
      <img className='inline-block h-full w-full max-w-lg object-cover' src={pizzaThree} alt="pizza" />
  </div>
</div>
</>
  )
}

export default Hero
