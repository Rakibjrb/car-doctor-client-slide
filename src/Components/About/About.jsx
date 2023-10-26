import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="my-24 lg:pb-20">
      <div className="lg:flex gap-14">
        <div className="px-8 lg:px-0 flex-1 relative">
          <img
            className="w-[90%] md:w-4/5 h-[370px] md:h-[463px]"
            src={person}
            alt=""
          />
          <img
            className="w-1/2 h-80 absolute right-8 -bottom-16 border-[10px] border-white"
            src={parts}
            alt=""
          />
        </div>
        <div className="flex-1 mt-16 px-5 lg:mt-0 lg:px-0">
          <h3 className="text-orange-500 text-xl mb-3">About us</h3>
          <h2 className="text-3xl md:text-5xl lg:w-[68%] font-bold">
            We are qualified & of experience in this field
          </h2>
          <p className="mt-8 mb-5 lg:w-3/4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="md:w-3/4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
