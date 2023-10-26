import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Switcher = () => {
  const [formToggle, setFormtoggle] = useState(false);

  const handleFormToggle = () => setFormtoggle(!formToggle);

  return (
    <>
      {!formToggle ? (
        <Login handleFormToggle={handleFormToggle} />
      ) : (
        <Signup handleFormToggle={handleFormToggle} />
      )}
    </>
  );
};

export default Switcher;
