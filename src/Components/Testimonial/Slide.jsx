import PropTypes from "prop-types";
import person from "../../assets/icons/person.svg";
import quote from "../../assets/icons/quote.svg";

const Slide = ({ id }) => {
  return (
    <div className="carousel-item relative w-full">
      <div className="absolute top-0 left-0 w-full h-full flex gap-5 px-20">
        <div className="border p-7">
          <div className="flex justify-between xl:w-1/2 lg:w-full">
            <img src={person} alt="" />
            <div>
              <h4 className="font-bold">Awlad Hossain</h4>
              <p>Business Man</p>
            </div>
            <img src={quote} alt="" />
          </div>
          <p className="mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even
            slightlybelievable.
          </p>
          <div className="rating mt-3">
            <input
              type="radio"
              name={`rating-${id}`}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name={`rating-${id}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name={`rating-${id}`}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name={`rating-${id}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name={`rating-${id}`}
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="border p-7">
          <div className="flex justify-between xl:w-1/2 lg:w-full">
            <img src={person} alt="" />
            <div>
              <h4 className="font-bold">Belal Hossain</h4>
              <p>Business Man</p>
            </div>
            <img src={quote} alt="" />
          </div>
          <p className="mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even
            slightlybelievable.
          </p>
          <div className="rating mt-3">
            <input
              type="radio"
              name={`rating-${id + 1}`}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name={`rating-${id + 1}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name={`rating-${id + 1}`}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name={`rating-${id + 1}`}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name={`rating-${id + 1}`}
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a className="btn btn-circle">❮</a>
        <a className="btn btn-circle bg-orange-500 text-white">❯</a>
      </div>
    </div>
  );
};

export default Slide;
Slide.propTypes = {
  id: PropTypes.number,
};
