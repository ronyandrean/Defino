import Navbar from "../Home/Navbar";
import Main from "../Home/Main";
import Collection from "../Home/Collection";
import Craftmanship from "../Home/Craftmanship";
import Fade from "../../animated/Fade";
import Footer from "../Home/Footer";
import Community from "../Home/Community";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Fade>
          <Navbar />
        </Fade>

        <Main />

        <Collection />

        <Fade>
          <Craftmanship />
        </Fade>

        <Fade>
          <Community />
        </Fade>

        <Footer />
      </div>
    </>
  );
};

export default Home;
