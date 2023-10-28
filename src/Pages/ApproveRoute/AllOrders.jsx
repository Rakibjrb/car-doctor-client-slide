import axios from "axios";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const AllOrders = ({ order, ordersAfterDelete, orderAfterApprove }) => {
  const {
    _id,
    userName,
    userEmail,
    userImage,
    serviceName,
    total_price,
    date,
    phone,
    status,
  } = order;

  const handleOrderDelete = (id) => {
    axios
      .delete(`http://localhost:5174/cart/orders/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.data.deletedCount > 0) {
          toast.success("data deleted ....");
          ordersAfterDelete(id);
        } else {
          toast.error("something went wrong ...");
        }
      })
      .catch((err) => {
        toast.error("something went wrong ...");
        console.log(err);
      });
  };

  return (
    <tr>
      <th>
        <button
          onClick={() => handleOrderDelete(_id)}
          className={`btn btn-circle btn-outline btn-xs`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={userImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{userName}</div>
            <div className="text-sm opacity-50">{userEmail}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>{phone}</div>
        </div>
      </td>
      <td>
        <span className="font-bold">{serviceName}</span>
        <br />
        <span className="badge mt-1">${total_price}</span>
      </td>
      <td>{date}</td>
      <th>
        <button
          onClick={() => orderAfterApprove(_id)}
          className={`btn  btn-sm text-white ${
            status === "Pending" ? "btn-error" : "btn-success"
          }`}
        >
          {status}
        </button>
      </th>
    </tr>
  );
};

export default AllOrders;
AllOrders.propTypes = {
  order: PropTypes.object,
  ordersAfterDelete: PropTypes.func,
  orderAfterApprove: PropTypes.func,
};
