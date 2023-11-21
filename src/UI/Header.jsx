import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import logo from '../images/logo-g.png'
import CartOverview from '../features/cart/CartOverview'


const Header = () => {
  return (
    <header className='header fixed top-0 left-0 right-0 flex items-center h-24 w-full '>
      <div className="mb-4 flex items-center justify-center">
        <Link to='/' className='w-36'>
          <img src={logo} alt="Ramdizz" className='h-full w-full' />
        </Link>
      </div>
      <SearchOrder />
      <div>
        <CartOverview />
      </div>
    </header>
  )
}

export default Header
