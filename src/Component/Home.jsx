import './Home.css'; // Ensure styles are imported
import hero_img from '../../public/assets/heroimg.jpg'

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
            <h1>Welcome to <span>Landkit</span>. <br />Develop anything.</h1>
            <p>Build a beautiful, modern website with flexible Bootstrap components built from scratch.</p>
            <div className="hero-buttons">
                <a href="#" className="btn btn-primary">View all pages</a>
                <a href="#" className="btn btn-outline-secondary">Documentation</a>
            </div>
        </div>
        <div>
            <img src={hero_img} alt="Team working on laptops" className="img-fluid hero-image" />
        </div>
    </section>
    </div>
  );
};

export default Home;
