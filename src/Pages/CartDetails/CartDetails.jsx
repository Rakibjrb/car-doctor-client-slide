import { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Orders from "./Orders";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CartDetails = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/cart/orders/?userEmail=${user.email}`;

  const ordersAfterDelete = (deletedId) => {
    const filteredOrders = orders.filter((order) => order._id !== deletedId);
    setOrders(filteredOrders);
  };

  useEffect(() => {
    axiosSecure
      .get(url, { withCredentials: true })
      .then((res) => setOrders(res.data.data));
  }, [url, axiosSecure]);

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
