import { Input, Label, SearchField } from 'react-aria-components';
import logo from '../images/Webshop_transparent.png';
import '../styles/NavbarStyles.css';
import LoginForm from './LoginForm';

function Navbar() {

  return (
    <>
      <div className='navbar-body'>
        <img src={logo} alt="Webshop" className='navbar-image'/>
          <SearchField className="navbar-searchbar">
            <Label className="navbar-searchbar-label">Search</Label>
            <Input className="navbar-searchbar-input" placeholder='Search product' />
          </SearchField>
        <LoginForm/>
      </div>
    </>
  );
}

export default Navbar;
