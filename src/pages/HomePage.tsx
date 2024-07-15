import Footer from '../public-components/Footer';
import ItemCard from '../public-components/ItemCard';
import Navbar from '../public-components/Navbar';
import '../styles/HomePageStyles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from "../images/Webshop_transparent.png"

interface Item {
  itemId: string;
  itemName: string;
  itemCost: number;
  itemQuantity: number;
  itemEnum: string;
  soldOut: boolean;
  url: string;
}

function HomePage() {
  const [items, setItems] = useState<Item[]>([]);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:8080/api/v1/item');
    setItems(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="homepage-body">
      <Navbar />
      <div className="homepage-content">
        {items.map((item) => ( 
          <ItemCard
            itemId={item.itemId}
            itemName={item.itemName}
            itemCost={item.itemCost}
            itemQuantity={item.itemQuantity}
            itemEnum={item.itemEnum}
            soldOut={item.soldOut}
            url={logo}
          />   
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
