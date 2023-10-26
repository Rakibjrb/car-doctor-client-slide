import PropTypes from "prop-types";

const Product = ({ img, title, price, rating }) => {
  return (
    <div className="card card-compact rounded-none p-6 border-2">
      <figure>
        <img
          className="h-56 w-full p-5 bg-slate-300 rounded-lg"
          src={img}
          alt={title}
        />
      </figure>
      <div className="mt-5 text-center">
        <div className="rating">
          <input
            type="radio"
            name={`rating-${rating}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${rating}`}
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name={`rating-${rating}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${rating}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${rating}`}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h2 className="text-xl font-bold mb-1 mt-3">{title}</h2>
        <h3 className="text-orange-500 font-bold">Price : {price}$</h3>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
};
