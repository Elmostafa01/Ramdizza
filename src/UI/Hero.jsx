import pizza from '../images/svgs/pizza.svg'
import pizzaThree from '../images/pizza-3.png'
import CreateUser from '../features/user/CreateUser'

const Hero = () => {
  return (
<>
<div className="right-hero items-center flex flex-col w-full h-min p-6">
    <div className='title'>
        <h1 className="font-extrabold text-center text-clamp break-words font-nunito">
        Order silently taste loudly with Ramdizza
        </h1>
    </div>
    <CreateUser />
</div>      
<div className='left-hero h-100 w-100 pointer-events-none'>
    <img className='inline-block h-full w-full max-w-lg object-cover' src={pizzaThree} alt="pizza" />
</div>
</>
  )
}

export default Hero
