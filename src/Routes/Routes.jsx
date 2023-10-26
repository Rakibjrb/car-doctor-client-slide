import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Main/Home/Home";
import Error from "../Components/Error";
import Switcher from "../Pages/UserLoginSystem/Switcher";
import Services from "../Components/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import CartDetails from "../Pages/CartDetails/CartDetails";
import PrivateRoute from "./PrivateRoute";
import ApproveRoute from "../Pages/ApproveRoute/ApproveRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/login",
        element: <Switcher />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5174/services"),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5174/services/${params.id}`),
      },
      {
        path: "/orders/details",
        element: (
          <PrivateRoute>
            <CartDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/order/pending/rakibul572157",
        element: (
          <PrivateRoute>
            <ApproveRoute />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default routes;
