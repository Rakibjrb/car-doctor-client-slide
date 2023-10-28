import { useContext, useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Orders from "./Orders";

const CartDetails = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const url = `http://localhost:5174/cart/orders/?userEmail=${user.email}`;

  const ordersAfterDelete = (deletedId) => {
    const filteredOrders = orders.filter((order) => order._id !== deletedId);
    setOrders(filteredOrders);
  };

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setOrders(res.data.data));
  }, [url]);

  return (
    <div className="pb-10">
      <PageHeader title="Cart Details" path="Home/My Orders" />
      <div className="mt-10 overflow-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="text-xl font-bold">Delete</th>
                <th className="text-xl font-bold">Name</th>
                <th className="text-xl font-bold">Phone</th>
                <th className="text-xl font-bold">Service Title & Price</th>
                <th className="text-xl font-bold">Order Date</th>
                <th className="text-xl font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <Orders
                  key={order._id}
                  order={order}
                  ordersAfterDelete={ordersAfterDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
