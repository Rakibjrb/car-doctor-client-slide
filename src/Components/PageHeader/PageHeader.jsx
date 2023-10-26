import PropTypes from "prop-types";
import checkoutImage from "../../assets/images/checkout/checkout.png";

const PageHeader = ({ title, path }) => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center h-80 px-5 md:px-20 flex items-center mt-5 rounded-xl relative"
      style={{ backgroundImage: `url(${checkoutImage})` }}
    >
      <h1 className="text-5xl text-white font-bold z-10">{title}</h1>
      <div className="bg-gradient-to-b from-[rgba(0,0,0,0.33)] to-[rgba(0,0,0,0.57)] w-full h-full absolute top-0 left-0 rounded-xl"></div>
      <h4 className="w-3/4 md:w-auto absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-center font-bold bg-center bg-cover bg-no-repeat bg-orange-600 px-10 py-3 rounded-t-xl">
        {path}
      </h4>
    </div>
  );
};

export default PageHeader;
PageHeader.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};
