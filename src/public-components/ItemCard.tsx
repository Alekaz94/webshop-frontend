import { Button } from 'react-aria-components';
import '../styles/ItemCard.css';
import picture from '../images/Webshop.png';

function ItemCard() {
  return (
    <div className="itemCard">
      <img className="card-image" src={picture} alt="" />
      <h2 className="card-title">Webshop</h2>
      <p className="card-text">100% cotton pants</p>
      <Button>Add to cart</Button>
    </div>
  );
}

export default ItemCard;
