import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className='layout flex flex-col items-center justify-center'>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default AppLayout
