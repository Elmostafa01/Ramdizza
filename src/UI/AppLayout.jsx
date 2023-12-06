import { useEffect } from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  //console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      <div className="transition"></div>
      <div className="transition-two"></div>
      {isLoading && <Loader />}
      <Header />
      <div className=''>
        <main className='mx-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
