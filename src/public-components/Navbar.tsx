import logo from '../images/Webshop_transparent.png';
import '../styles/NavbarStyles.css';
import { Button } from 'react-aria-components';

function Navbar() {

  return (
    <>
      <div className='Body'>
        <img src={logo} alt="Webshop" className='Image'/>
        <h1 className='Navbar-text'>Welcome to the Webshop!</h1>
        <Button className='Button'>Login</Button>
      </div>
    </>
  );
}

export default Navbar;
