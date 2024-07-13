import logo from '../images/Webshop_transparent.png';
import '../styles/NavbarStyles.css';
import SignUpForm from './SignUpForm';

function Navbar() {

  return (
    <>
      <div className='navbar-body'>
        <img src={logo} alt="Webshop" className='navbar-image'/>
        <h1 className='navbar-text'>Welcome to the Webshop!</h1>
        <SignUpForm />
      </div>
    </>
  );
}

export default Navbar;
