import CountUp from "../../animated/CountUp";
const Craftmanship = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex-grow flex flex-col justify-between text-center items-center bg-white py-15">
        <h2 className="text-5xl text-black font-luxury font-light tracking-wide fade-in-up">
          The Art of Craftsmanship
        </h2>
        <span className="mt-3 w-100 h-0.5 bg-gradient-to-r bg-green-light"></span>
        <h1 className="py-4 text-2xl text-gray-600 mb-2 mt-10 font-luxury pl-53 pr-53 fade-in-up">
          Every DEFINO piece represents the pinnacle of luxury craftsmanship,
          meticulously handcrafted by master artisans who have honed their
          skills over generations. We source only the most exquisite,
          ethically-obtained materials - from buttery-soft Italian leathers to
          gleaming, hand-polished hardware.
        </h1>

        <div className="flex-grow flex flex-row gap-60 text-black items-center text-center flex-start mr-25 mb-30">
          <div className="flex-col">
            <CountUp
              from={0}
              to={12}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-9xl font-luxury"
            />
            <br></br>
            <span className="text-3xl font-display font-semibold fade-in-up">
              YEARS OF EXCELLENCE
            </span>
            <br></br>
            <span className="font-display italic text-green-light fade-in-up">
              Generations of artisanal expertise in luxury leathercraft
            </span>
          </div>
          <div className="flex-col">
            <CountUp
              from={0}
              to={10_000}
              separator="."
              direction="up"
              duration={0.3}
              className="count-up-text text-9xl font-luxury"
            />
            <br></br>
            <span className="text-3xl font-display font-semibold fade-in-up">
              SATISFIED CLIENTS
            </span>
            <br></br>
            <span className="font-display italic text-green-light fade-in-up">
              Worldwide luxury connoisseurs
            </span>
          </div>
          <div className="flex-col">
            <CountUp
              from={0}
              to={200}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-9xl font-luxury"
            />
            <br></br>
            <span className="text-3xl font-display font-semibold fade-in-up">
              UNIQUE DESIGNS
            </span>
            <br></br>
            <span className="font-display italic text-green-light fade-in-up">
              Distinctive luxury expressions
            </span>
          </div>
        </div>

        <h2 className="text-3xl text-green-light font-luxury italic tracking-wide fade-in-up ">
          "Crafting tomorrow's heirlooms today"
        </h2>
        <span className="mt-3 w-130 h-0.5 bg-gradient-to-r bg-black-light fade-in-up"></span>
      </section>
    </>
  );
};

export default Craftmanship;
