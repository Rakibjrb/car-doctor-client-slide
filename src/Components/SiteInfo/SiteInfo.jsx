import calenderIcon from "../../assets/icons/calender.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import locationIcon from "../../assets/icons/location.svg";

const SiteInfo = () => {
  return (
    <div className="flex justify-center items-center py-16 mx-4 md:h-[300px] bg-black rounded-lg mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex gap-3">
          <img src={calenderIcon} alt="" />
          <div>
            <p className="text-white">We are open monday-friday</p>
            <h4 className="text-xl text-white">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex gap-3">
          <img src={phoneIcon} alt="" />
          <div>
            <p className="text-white">Have a question?</p>
            <h4 className="text-xl text-white">+2546 251 2658</h4>
          </div>
        </div>
        <div className="flex gap-3">
          <img src={locationIcon} alt="" />
          <div>
            <p className="text-white">Need a repair? our address</p>
            <h4 className="text-xl text-white">Liza Street, New York</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteInfo;
