import Logo from '../images/Logo';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src={Logo} />
      </Link>
    </header>
  )
}

export default Header
