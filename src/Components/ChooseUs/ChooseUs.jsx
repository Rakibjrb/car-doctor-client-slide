import check from "../../assets/icons/check.svg";
import deliveryt from "../../assets/icons/deliveryt.svg";
import wrench from "../../assets/icons/Wrench.svg";
import group from "../../assets/icons/group.svg";
import location from "../../assets/icons/location.svg";
import person from "../../assets/icons/person.svg";

const ChooseUs = () => {
  return (
    <div className="mb-24 px-4 xl:px-0">
      <div className="mb-12">
        <h3 className="text-center text-xl font-bold text-orange-600">
          Core Features
        </h3>
        <h2 className="text-4xl text-center font-bold my-5">Why Choose Us</h2>
        <p className="text-center px-4 md:px-0 md:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10">
        <div className="flex justify-center border p-8 hover:bg-orange-400 hover:cursor-pointer transition-colors">
          <div>
            <div className="flex justify-center mb-4">
              <img src={check} alt="" />
            </div>
            <p>Expert Team</p>
          </div>
        </div>
        <div className="flex justify-center border p-8 hover:bg-orange-400 hover:cursor-pointer transition-colors">
          <div>
            <div className="flex justify-center mb-4">
              <img src={deliveryt} alt="" />
            </div>
            <p>Expert Team</p>
          </div>
        </div>
        <div className="flex justify-center border p-8 hover:bg-orange-400 hover:cursor-pointer transition-colors">
          <div>
            <div className="flex justify-center mb-4">
              <img src={wrench} alt="" />
            </div>
            <p>Expert Team</p>
          </div>
        </div>
        <div className="flex justify-center border p-8 hover:bg-orange-400 hover:cursor-pointer transition-colors">
          <div>
            <div className="flex justify-center mb-4">
              <img src={group} alt="" />
            </div>
            <p>Expert Team</p>
          </div>
        </div>
        <div className="flex justify-center border p-8 hover:bg-orange-400 hover:cursor-pointer transition-colors">
          <div>
            <div className="flex justify-center mb-4">
              <img src={location} alt="" />
            </div>
            <p>Expert Team</p>
          </div>
        </div>
        <div className="flex justify-center border p-8 hover:bg-orange-400 hover:cursor-pointer transition-colors">
          <div>
            <div className="flex justify-center mb-4">
              <img src={person} alt="" />
            </div>
            <p>Expert Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
