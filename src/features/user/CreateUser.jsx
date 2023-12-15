import { useState } from 'react';
import Button from '../../UI/Button';
import pizza from '../../images/svgs/pizza.svg'
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  
    if (!username) return;
    if (username.trim().length >= 3 && !/^\d+$/.test(username)) {
      dispatch(updateName(username));
      navigate('menu');
    }
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
            focus:ring focus:ring-yellow-500 overflow-hidden'
            type="text"
            placeholder="Enter your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className='z-50 absolute bg-emerald-600 p-3 left-0 top-0 rounded-l-lg pointer-events-none'>
            <img src={pizza} className='h-6' alt='pizza-icon'/>
          </div>
      </div>
    </div>

      {username !== '' && (
        <div className='mt-6 flex justify-center overflow-hidden'>
          <Button 
          color="bg-zinc-900 focus-ring focus:ring-zinc-100" 
          text="text-slate-100 text-sm font-extrabold" 
          hover="hover:bg-emerald-700"
          focusBg="hover:bg-zinc-700"
          px="px-6"
          py="py-4"
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
