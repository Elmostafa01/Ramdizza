import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
import { TiArrowLeftThick } from "react-icons/ti";
import notfound from '../images/svgs/404.svg'


function NotFound() {
  const error = useRouteError();
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center p-4'>
      <div className="h-[14rem] w-[25rem] pointer-events-none">
        <img src={notfound}  className='inline-block h-full w-full max-w-lg object-cover'/>
      </div>
      <p className="mt-8 text-md font-sans font-semibold text-zinc-900 text-center">{error.data || error.message}</p>
      <div className='flex justify-center mt-5'>
        <LinkButton to='-1'>
          <TiArrowLeftThick />
          Go back
        </LinkButton>
      </div>
    </div>
  );
}

export default NotFound;
