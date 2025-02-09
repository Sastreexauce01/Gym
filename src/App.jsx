import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";

const BgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repaat",
  backgroundSize: "cover",
  backgroundPosition:"center",
  backgroundAttacment:"fixed"
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={BgStyle}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
