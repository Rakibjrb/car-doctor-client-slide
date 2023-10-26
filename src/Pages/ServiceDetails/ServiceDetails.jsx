import { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { NavLink, Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./servicedetails.css";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { _id, img, title, description, facility, price } = data;

  useEffect(() => {
    fetch(`http://localhost:5174/services/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [id]);

  return (
    <div>
      <PageHeader title="Service Details" path="Home/Service Details" />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-3 lg:mx-0">
        <div className="md:col-span-2 lg:col-span-3 pb-5">
          <div className="w-full relative">
            <img className="w-full h-[440px] rounded-xl" src={img} alt="" />
            <div className="rounded-xl absolute top-0 left-0 bg-gradient-to-b from-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.49)] w-full h-full"></div>
          </div>
          <h2 className="mt-3 mb-5 font-bold text-4xl">{title}</h2>
          <p>{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 mb-5">
            {facility?.map((facilityData, index) => (
              <div
                key={index}
                className="bg-[#F3F3F3] p-5 border-t-4 border-orange-500 rounded-t-xl"
              >
                <h3 className="text-xl font-bold mb-2">{facilityData.name}</h3>
                <p>{facilityData.details}</p>
              </div>
            ))}
          </div>
          <p>{description}</p>
          <h2 className="mt-10 mb-5 font-bold text-3xl md:text-4xl">
            3 Simple Steps to Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="border py-10">
              <div className="flex justify-center">
                <h3 className="p-5 rounded-full bg-orange-600 border-8 border-red-300 w-10 h-10 flex items-center justify-center text-xl font-bold text-white text-center">
                  01
                </h3>
              </div>
              <h4 className="uppercase font-bold text-xl my-3 text-center">
                Step one
              </h4>
              <div className="flex justify-center">
                <p className="text-center w-3/5">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
            <div className="border py-10">
              <div className="flex justify-center">
                <h3 className="p-5 rounded-full bg-orange-600 border-8 border-red-300 w-10 h-10 flex items-center justify-center text-xl font-bold text-white text-center">
                  01
                </h3>
              </div>
              <h4 className="uppercase font-bold text-xl my-3 text-center">
                Step two
              </h4>
              <div className="flex justify-center">
                <p className="text-center w-3/5">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
            <div className="border py-10">
              <div className="flex justify-center">
                <h3 className="p-5 rounded-full bg-orange-600 border-8 border-red-300 w-10 h-10 flex items-center justify-center text-xl font-bold text-white text-center">
                  01
                </h3>
              </div>
              <h4 className="uppercase font-bold text-xl my-3 text-center">
                Step three
              </h4>
              <div className="flex justify-center">
                <p className="text-center w-3/5">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-5 bg-[#F3F3F3] rounded-xl">
            <h3 className="text-xl font-bold mb-3">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.data.map((service) => (
                <NavLink
                  className="p-4 bg-white rounded-lg flex items-center justify-between hover:bg-orange-600 hover:text-white transition-all"
                  key={service._id}
                  to={`/service/details/${service._id}`}
                >
                  {service.title} <AiOutlineArrowRight />
                </NavLink>
              ))}
            </ul>
          </div>

          <h3 className="text-3xl font-bold mt-4">Price: ${price}</h3>
          <Link
            to={`/checkout/${_id}`}
            className="btn bg-orange-600 text-white mt-4 btn-block hover:text-black"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
