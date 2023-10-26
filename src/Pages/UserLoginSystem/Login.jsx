import PropTypes from "prop-types";
import ExtraLogin from "./ExtraLogin";
import loginsvg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = ({ handleFormToggle }) => {
  const { userLoginWithEmailAndPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLoginWithEmailAndPassword(email, password)
      .then(() => {
        toast.success("User login success .......");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Login failed !!!");
        setTimeout(() => {
          toast.success("Please try again leter ....");
        }, 300);
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
            Sign In
          </h2>
          <form onSubmit={handleLogin} className="card-body pb-3">
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
                Sign In
              </button>
            </div>
          </form>
          <div className="card-body pt-0">
            <p className="flex justify-between">
              Already have an account?{" "}
              <button onClick={() => handleFormToggle()}>Please Singup</button>
            </p>
            <ExtraLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
Login.propTypes = {
  handleFormToggle: PropTypes.func,
};
