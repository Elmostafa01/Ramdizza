import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  //console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      {isLoading && <Loader />}
      <Header />
      <div>
        <main className='mx-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
