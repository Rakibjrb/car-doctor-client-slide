import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const ExtraLogin = () => {
  const { user } = useAuth();

  const handleGoogleLogin = () => {
    toast.success("user in console");
    console.log(user);
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mb-6">
        <p className="text-center text-xl">Sign up with</p>
      </div>
      <div className="flex justify-center gap-7">
        <button onClick={handleGoogleLogin} className="btn btn-circle">
          <FaFacebookF className="text-blue-700 text-xl" />
        </button>
        <button onClick={handleGoogleLogin} className="btn btn-circle">
          <FaLinkedinIn className="text-xl text-blue-500" />
        </button>
        <button onClick={handleGoogleLogin} className="btn btn-circle">
          <FcGoogle className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ExtraLogin;
