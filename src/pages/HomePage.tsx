import Footer from '../public-components/Footer';
import ItemCard from '../public-components/ItemCard';
import Navbar from '../public-components/Navbar';
import '../styles/HomePageStyles.css';

function HomePage() {
  return (
    <div className="homepage-body">
      <Navbar />
      <div className="homepage-content">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
