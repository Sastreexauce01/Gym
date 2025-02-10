import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";
import Equiments from "./components/Equipments/Equiments";
import Banner from "./components/Banner/Banner";



import Img1 from "./assets/2.png";
import TabComp from "./components/Tab/TabCompt";
// import Img2 from "./assets/3.png";

const BannerData = {
  image: Img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",
};
// const Banner2Data = {
//   image: Img2,
//   title: "The Importants To Take Care Of Yourself",
//   subtitle:
//     "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
//   link: "#",
// };

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repaat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttacment: "fixed",
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>

      <Equiments />
      <Banner {...BannerData} />
      {/* <Banner  {...Banner2Data}/> */}
      <TabComp/>
    </div>
  );
};

export default App;
