import pizza from '../images/svgs/pizza.svg'
import pizzaThree from '../images/pizza-3.png'
import wave from '../images/svgs/wave.svg'


function Home() {
  return (
    <div className="home flex flex-col items-center justify-center w-full h-screen">
      <div className='relative  hero mb-32 px-8 flex flex-row-reverse items-center justify-center max-w-7xl '>
        <div className="right-hero items-center flex flex-col w-full h-min p-6">
          <div className='title'>
            <h1 className="font-bold text-center text-clamp break-words">
              Order silently taste loudly with Ramdizza
            </h1>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 w-64'>
            <p className='text-emerald-600 [text-shadow:_0_1px_14px_rgb(0_0_0_/_20%) text-xl text-center'>Welcome! Please start by telling us your name </p>
            <div className='hero-input sm:w-96 relative block  h-12'>
              <input
              className='w-full h-full rounded-lg pl-16 focus:outline-none
              focus:ring focus:border-emerald-400  overflow-hidden'
              type="text"
              placeholder='what are u waiting for ?'
              />
              <div className='z-50 absolute bg-emerald-600 p-3 left-0 top-0 rounded-l-lg pointer-events-none'>
                <img src={pizza} className=' h-6'/>
              </div>
            </div>
          </div>      
        </div>
        <div className='left-hero h-100 w-100 pointer-events-none'>
          <img className='inline-block h-full w-full max-w-lg object-cover' src={pizzaThree} alt="pizza" />
        </div>
      </div>
        <div className="svg">
          <img className='svg-wave z-10' src={wave} />
        </div>
    </div>
  );
}

export default Home;
