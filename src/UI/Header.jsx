import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import logo from '../images/logo-g.png'
import nologo from '../images/nologo.png'
import CartOverview from '../features/cart/CartOverview'


const Header = () => {
  return (
    <header className='header bg-[#ffc244] fixed top-0 left-0 right-0 flex items-center
     justify-around px-4 py h-24 w-full z-50'>
      <div className="mb-4 flex items-center justify-center">
        <Link to='/' className='w-36'>
          <img src={logo} alt="Ramdizz" className='logo h-full w-full' />
          <img src={nologo} alt="Ramdizz" className='nologo h-full w-full hidden' />
        </Link>
      </div>
      <SearchOrder />
      <div className='cart'>
        <CartOverview />
      </div>
    </header>
  )
}

export default Header
