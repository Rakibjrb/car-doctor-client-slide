import Member from "./Member";
import img1 from "../../assets/images/team/1.jpg";
import img2 from "../../assets/images/team/2.jpg";
import img3 from "../../assets/images/team/3.jpg";

const Team = () => {
  return (
    <div className="mb-24">
      <div className="mb-12">
        <h3 className="text-center text-xl font-bold text-orange-600">Team</h3>
        <h2 className="text-4xl text-center font-bold my-5">Meet Our Team</h2>
        <p className="text-center px-4 md:px-0 md:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Member img={img1} work="Car Engine Plug" experience="Engine expert" />
        <Member img={img2} work="Car Engine Plug" experience="Engine expert" />
        <Member img={img3} work="Car Engine Plug" experience="Engine expert" />
      </div>
    </div>
  );
};

export default Team;
