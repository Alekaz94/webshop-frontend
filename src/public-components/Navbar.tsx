import { Input, Label, SearchField } from 'react-aria-components';
import logo from '../images/Webshop_transparent.png';
import '../styles/NavbarStyles.css';
import LoginForm from './LoginForm';

function Navbar() {

  return (
    <>
      <div className='navbar-body'>
        <img src={logo} alt="Webshop" className='navbar-image'/>
        <div>
          <SearchField className="navbar-searchbar">
            <Label className="navbar-searchbar-label">Search</Label>
            <Input className="navbar-searchbar-input" placeholder='Search product' />
          </SearchField>
        </div>
        <LoginForm/>
      </div>
    </>
  );
}

export default Navbar;
