import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Nav = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  const { user, userLogOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("User Logout success ....");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong .....");
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <img src={logo} className="h-16" alt="nav logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-error font-bold">Appointment</a>
      </div>

      {user?.email ? (
        <div className="dropdown dropdown-end ml-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                {user?.displayName}
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Profile Settings</a>
            </li>
            <li>
              <Link to={`/orders/details?userEmail=${user.email}`}>
                My Orders
              </Link>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <Link className="btn btn-outline ml-3" to="/user/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Nav;
