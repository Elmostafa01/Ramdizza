import { useState } from 'react';
import Button from '../../UI/Button';
import pizza from '../../images/svgs/pizza.svg'


function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-center justify-center gap-4 w-64'>
        <p className='font-semibold text-emerald-600 [text-shadow:_0_1px_14px_rgb(0_0_0_/_20%) text-xl text-center'>
          Welcome! Please start by telling us your name
        </p>
        <div className='hero-input sm:w-96 relative block h-12'>
          <input
            className='w-full h-full rounded-lg pl-16 focus:outline-none
            focus:ring focus:border-emerald-400  overflow-hidden'
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className='z-50 absolute bg-emerald-600 p-3 left-0 top-0 rounded-l-lg pointer-events-none'>
            <img src={pizza} className='h-6'/>
          </div>
      </div>
    </div>

      {username !== '' && (
        <div className='mt-6 flex justify-center overflow-hidden'>
          <Button 
          color="bg-zinc-900" 
          text="text-slate-100" 
          hover="hover:bg-zinc-700"
          focusBg="hover:bg-zinc-700"
          radius="rounded-full"
          animation="animation"
          >
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
