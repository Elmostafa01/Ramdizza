import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  //console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      {isLoading && <Loader />}
      <Header />
      <div>
        <main className='max-w-3xl'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
