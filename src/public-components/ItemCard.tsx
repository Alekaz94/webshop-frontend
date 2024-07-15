import { Button, ToggleButton } from 'react-aria-components';
import '../styles/ItemCard.css';
import picture from '../images/Webshop.png';
import ButtonGroup from './ButtonGroup';

function ItemCard() {
  return (
    <div className="itemCard">
      <img className="card-image" src={picture} alt="" />
      <h2 className="card-title">Webshop</h2>
      <p className="card-text">100% cotton pants</p>
      <ButtonGroup>
        <ToggleButton className="card-toggle-button">XS</ToggleButton>
        <ToggleButton className="card-toggle-button">S</ToggleButton>
        <ToggleButton className="card-toggle-button">M</ToggleButton>
        <ToggleButton className="card-toggle-button">L</ToggleButton>
        <ToggleButton className="card-toggle-button">XL</ToggleButton>
      </ButtonGroup>
      <Button>Add to cart</Button>
    </div>
  );
}

export default ItemCard;
