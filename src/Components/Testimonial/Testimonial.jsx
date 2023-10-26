import SlideMobile from "./SlideMobile";
import Slide from "./Slide";

const Testimonial = () => {
  return (
    <div className="mb-24">
      <div className="mb-12">
        <h3 className="text-center text-xl font-bold text-orange-600">
          Testimonial
        </h3>
        <h2 className="text-4xl text-center font-bold my-5">
          What Customer Says
        </h2>
        <p className="text-center px-4 md:px-0 md:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="hidden lg:block">
        <div className="carousel w-full min-h-[360px] md:min-h-[250px]">
          <Slide id={11} />
        </div>
      </div>
      <div className="lg:hidden">
        <div className="carousel w-full min-h-[360px] md:min-h-[250px]">
          <SlideMobile />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
