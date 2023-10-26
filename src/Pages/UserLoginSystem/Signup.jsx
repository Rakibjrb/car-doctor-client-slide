import PropTypes from "prop-types";
import ExtraLogin from "./ExtraLogin";
import toast from "react-hot-toast";
import loginsvg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleFormToggle, location }) => {
  const navigate = useNavigate();

  const { signUpWithEmailAndPassword, updateUserNameAndPhoto } =
    useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.error("Password must have at least 6 digit");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have at least 1 Capital letter");
      return;
      //eslint-disable-next-line
    } else if (!/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)) {
      toast.error("Password must have 1 special character");
      return;
    }

    signUpWithEmailAndPassword(email, password)
      .then(() => {
        toast.success("User account creation successfull ....");
        updateUserNameAndPhoto(name)
          .then(() => navigate(location?.state ? location?.state : "/"))
          .catch((err) => {
            toast.error("something went wrong !!!");
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error("something went wrong ....");
        console.log(err);
      });
  };
  return (
    <div className="px-5 sm:px-0 py-10 lg:flex lg:items-center lg:gap-6 xl:gap-14">
      <div className="md:flex md:justify-center lg:ml-3">
        <img src={loginsvg} alt="" />
      </div>
      <div className="flex-1 md:mx-3">
        <div className="card flex-shrink-0 w-full border rounded-none pt-5 md:p-5">
          <h2 className="text-center text-3xl font-robotoslab font-bold">
            Sign Up
          </h2>
          <form onSubmit={handleSignUp} className="card-body pb-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button
                type="submit"
                className="btn btn-error text-white font-poppins"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="card-body pt-0">
            <p className="flex justify-between">
              Already have an account?{" "}
              <button onClick={() => handleFormToggle()}>Please Login</button>
            </p>
            <ExtraLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
Signup.propTypes = {
  handleFormToggle: PropTypes.func,
  location: PropTypes.object,
};
