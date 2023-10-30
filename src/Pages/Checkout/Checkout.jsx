import { useLoaderData } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Checkout = () => {
  const data = useLoaderData();
  const { price, title } = data.data;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleCheckout = (e) => {
    e.preventDefault();
    const info = {
      userName: e.target.name.value,
      userEmail: e.target.email.value,
      userImage: e.target.image.value,
      date: e.target.date.value,
      phone: e.target.phone.value,
      total_price: e.target.total_price.value,
      description: e.target.description.value,
      serviceName: title,
      status: "Pending",
    };

    axiosSecure
      .post("http://localhost:5174/checkouts", info, { withCredentials: true })
      .then((res) => {
        console.log(res);
        toast.success("Your order has been placed .....");
        e.target.reset();
      })
      .catch((err) => {
        toast.error("something went wrong ....");
        console.log(err);
      });
  };

  return (
    <div>
      <PageHeader title="Checkout" path="Home/Checkout" />
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl">
          <form onSubmit={handleCheckout} className="card-body">
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered"
                name="name"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="input input-bordered"
                  name="email"
                  defaultValue={user?.email}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image link</span>
                </label>
                <input
                  type="text"
                  placeholder="Image Link"
                  className="input input-bordered"
                  name="image"
                  disabled
                  defaultValue={user?.photoURL}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered"
                  name="date"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="input input-bordered"
                  name="phone"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Total Price"
                  className="input input-bordered"
                  name="total_price"
                  disabled
                  defaultValue={price}
                  required
                />
              </div>
              <div className="form-control col-span-1 md:col-span-3">
                <label className="label">
                  <span className="label-text">Write message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="write message here ..."
                  className="input input-bordered py-3 h-[150px]"
                  name="description"
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-orange-600 hover:text-black text-white"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
