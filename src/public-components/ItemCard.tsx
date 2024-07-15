import { Button, ToggleButton } from 'react-aria-components';
import '../styles/ItemCard.css';
import ButtonGroup from './ButtonGroup';

interface Item {
  itemId: string;
  itemName: string;
  itemCost: number;
  itemQuantity: number;
  itemEnum: string;
  soldOut: boolean;
  url: string;
}

function ItemCard(props: Item) {
  return (
    <div className="itemCard">
      <img className="card-image" src={props.url} alt="" />
      <h2 className="card-title">{props.itemEnum}</h2>
      <p className="card-text">{props.itemName}</p>
      <ButtonGroup>
        <ToggleButton className="card-toggle-button">XS</ToggleButton>
        <ToggleButton className="card-toggle-button">S</ToggleButton>
        <ToggleButton className="card-toggle-button">M</ToggleButton>
        <ToggleButton className="card-toggle-button">L</ToggleButton>
        <ToggleButton className="card-toggle-button">XL</ToggleButton>
      </ButtonGroup>
      <p className="card-text">{props.itemCost}$</p>
      {props.soldOut ? (
        <p className="card-text-soldOut">Out of stock!</p>
      ) : (
        <Button>Add to cart</Button>
      )}
    </div>
  );
}

export default ItemCard;
