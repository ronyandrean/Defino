import "./App.css";
import Navbar from "./components/pages/Home/Navbar";
import Main from "./components/pages/Home/Main";
import Collection from "./components/pages/Home/Collection";
import Craftmanship from "./components/pages/Home/Craftmanship";
import Fade from "./components/animated/Fade";
import Footer from "./components/pages/Home/Footer";
import Community from "./components/pages/Home/Community";

function App() {
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
}

export default App;
