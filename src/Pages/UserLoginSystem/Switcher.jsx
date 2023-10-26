import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useLocation } from "react-router-dom";

const Switcher = () => {
  const [formToggle, setFormtoggle] = useState(false);
  const location = useLocation();

  const handleFormToggle = () => setFormtoggle(!formToggle);

  return (
    <>
      {!formToggle ? (
        <Login location={location} handleFormToggle={handleFormToggle} />
      ) : (
        <Signup location={location} handleFormToggle={handleFormToggle} />
      )}
    </>
  );
};

export default Switcher;
