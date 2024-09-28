import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Trip from '../components/Trip';
import Hero from '../components/Hero';
import GoogleTranslate from '../components/googleTranslate';
import Homeimage from '../assets/12.jpg';
import '../index.css';
function Home() {
  const handleHeroButton = () => {
    const element = document.getElementById('travel-planner');
    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <GoogleTranslate />
      <Navbar />

      <Hero
        clicked={handleHeroButton}
        cName="hero"
        Homeimage={Homeimage}
        title="Your Journey Your Story"
        text="Choose Your Favourite Journey"
        buttonText="Travel Plan"
        // url="/travelplan"
        btnClass="show"
      />

      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
