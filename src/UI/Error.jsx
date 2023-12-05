import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
import { TiArrowLeftThick } from "react-icons/ti";


function NotFound() {
  const error = useRouteError();
  return (
    <div className='error w-80 truncate  absolute top-[50%] left-[50%] bg-stone-50 p-10 border rounded-xl flex flex-col gap-2 justify-center items-center'>
      <h1 className='font-bold text-yellow-400'>Oops, an error occurred 😢</h1>
      <p className=''>{error.data || error.message}</p>
      <LinkButton to='-1'>
        <TiArrowLeftThick />
        Go back
      </LinkButton>
    </div>
  );
}

export default NotFound;
