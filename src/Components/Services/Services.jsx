import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5174/services")
      .then((response) => setServices(response.data.data));
  }, []);

  return (
    <div className="mb-24">
      <div className="mb-12">
        <h3 className="text-center text-xl font-bold text-orange-600">
          Services
        </h3>
        <h2 className="text-4xl text-center font-bold my-5">
          Our service area
        </h2>
        <p className="text-center px-4 md:px-0 md:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const { _id, img, title, price } = service;
          return (
            <div
              key={_id}
              className="card card-compact rounded-none p-6 border-2"
            >
              <figure>
                <img className="h-56 w-full rounded-lg" src={img} alt="Shoes" />
              </figure>
              <div className="mt-5">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                  <h3 className="text-orange-500 font-bold">
                    Price : {price}$
                  </h3>
                  <Link to={`/service/details/${_id}`}>
                    <p>
                      <AiOutlineArrowRight className="text-orange-500" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <button className="btn btn-outline btn-error">More services</button>
      </div>
    </div>
  );
};

export default Services;
