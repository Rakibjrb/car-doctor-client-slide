import img1 from "../../assets/images/products/1.png";
import img2 from "../../assets/images/products/2.png";
import img3 from "../../assets/images/products/3.png";
import img4 from "../../assets/images/products/4.png";
import img5 from "../../assets/images/products/5.png";
import img6 from "../../assets/images/products/6.png";
import Product from "./Product";

const PropularProducts = () => {
  return (
    <div className="mb-24">
      <div className="mb-12">
        <h3 className="text-center text-xl font-bold text-orange-600">
          Popular Products
        </h3>
        <h2 className="text-4xl text-center font-bold my-5">
          Browse Our Products
        </h2>
        <p className="text-center px-4 md:px-0 md:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Product img={img6} title="Car Engine Plug" price="20.00" rating={1} />
        <Product img={img3} title="Car Air Filter" price="20.00" rating={2} />
        <Product img={img1} title="Cools Red Break" price="20.00" rating={3} />
        <Product
          img={img2}
          title="Cools Red Suspension"
          price="20.00"
          rating={4}
        />
        <Product img={img5} title="Cools Black Tier" price="20.00" rating={5} />
        <Product
          img={img4}
          title="High capacity bettery"
          price="20.00"
          rating={6}
        />
      </div>
      <div className="flex justify-center mt-8">
        <button className="btn btn-outline btn-error">More Products</button>
      </div>
    </div>
  );
};

export default PropularProducts;
