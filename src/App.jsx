import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";
import Equiments from "./components/Equipments/Equiments";
import Banner from "./components/Banner/Banner";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repaat",
  backgroundSize: "cover",
  backgroundPosition:"center",
  backgroundAttacment:"fixed"
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equiments/>
      <Banner/>
    </div>
  );
};

export default App;
