import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Member = ({ img, work, experience }) => {
  return (
    <div className="card card-compact rounded-none p-6 border-2">
      <figure>
        <img className="h-56 w-full rounded-lg" src={img} alt={work} />
      </figure>
      <div className="mt-5 text-center">
        <h2 className="text-xl font-bold">{work}</h2>
        <h3>{experience}</h3>
        <div className="flex justify-center gap-2 mt-2">
          <div className="p-2 rounded-full bg-blue-900 flex items-center justify-center">
            <FaFacebookF className="text-xl text-white" />
          </div>
          <div className="p-2 rounded-full bg-blue-400 flex items-center justify-center">
            <FaTwitter className="text-xl text-white" />
          </div>
          <div className="p-2 rounded-full bg-blue-600 flex items-center justify-center">
            <FaLinkedinIn className="text-xl text-white" />
          </div>
          <div className="p-2 rounded-full bg-pink-800 flex items-center justify-center">
            <FaInstagram className="text-xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
Member.propTypes = {
  img: PropTypes.string,
  work: PropTypes.string,
  experience: PropTypes.string,
};
