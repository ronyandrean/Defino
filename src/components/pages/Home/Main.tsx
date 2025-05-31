import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import SplitText from "../../animated/SplitText";
import SlideUp from "../../animated/SlideUp";
import Fade from "../../animated/Fade";
import "./Main.css";

const Main = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <section className="w-full min-h-screen flex-grow flex flex-row items-center justify-between text-left bg-white">
        <div className="flex flex-col px-15">
          <SplitText
            text="DEFINE YOUR"
            className="text-8xl text-black mb-4 font-luxury"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            // rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="ELEGANCE."
            className="text-8xl text-green-dark mb-4 font-luxury"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            // rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <Fade>
            <p className="text-xl text-gray-600 mb-8 tracking-wide">
              Discover our exclusive collection of handcrafted luxury handbags,<br></br>
              where timeless elegance meets contemporary design.
            </p>
          </Fade>

          <Fade>
            <div className="flex w-full max-w-sm items-center space-x-2 font-bold font-sans">
              <Button type="button" className="button-main-shop">
                Shop Collection
              </Button>
              <Button type="button" className="button-main-catalog">
                View Catalog
              </Button>
            </div>
          </Fade>
        </div>

        <SlideUp
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="relative flex justify-end px-40 py-30">
            <img
              src="./img/black.png"
              alt="Bag"
              className="relative z-10 w-full max-w-2xl"
            />
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-120 h-30 bg-black/50 blur-xl rounded-full z-7" />
          </div>
        </SlideUp>
      </section>
    </>
  );
};

export default Main;
