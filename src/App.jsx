import { Outlet } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav />
      <Outlet></Outlet>
      <Toaster position="top center" />
    </div>
  );
}

export default App;
