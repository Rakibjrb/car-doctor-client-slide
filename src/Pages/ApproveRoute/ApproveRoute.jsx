import { useEffect, useState } from "react";
import AllOrders from "./AllOrders";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ApproveRoute = () => {
  const [orders, setOrders] = useState([]);
  const axiosSecure = useAxiosSecure();

  const ordersAfterDelete = (deletedId) => {
    const filteredOrders = orders.filter((order) => order._id !== deletedId);
    setOrders(filteredOrders);
  };

  const orderAfterApprove = (id) => {
    const url = `/admin/order/approve`;
    axiosSecure
      .patch(url, { id, status: "Approved" }, { withCredentials: true })
      .then((res) => {
        if (res.data.data.modifiedCount > 0) {
          const notApproved = orders.filter((order) => order._id !== id);
          const approved = orders.find((order) => order._id === id);
          approved.status = "Approved";
          setOrders([approved, ...notApproved]);
          toast.success("Request Approved ....");
        } else {
          toast.error("something went wrong .....");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong ....");
      });
  };

  useEffect(() => {
    const url = `/cart/orders/admin/rakibul572157`;
    axiosSecure
      .get(url, { withCredentials: true })
      .then((res) => setOrders(res.data.data));
  }, [axiosSecure]);

  return (
    <div className="pb-10">
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
                <AllOrders
                  key={order._id}
                  order={order}
                  ordersAfterDelete={ordersAfterDelete}
                  orderAfterApprove={orderAfterApprove}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveRoute;
