import React from "react";
import { orderput } from "../../services/api";
import useState from "react-usestateref";
import moment from "moment";
function OrdersPosts({ posts }) {
  const [sta, setsta] = useState("PENDING");
  const [orderDetails, setOrderDetails] = useState({});

  const handleSubmit = async (orders, productid) => {
    let data = await orderput(orders.order.user, productid, orders.order._id, {
      status: sta,
    });
    if (data.status === 200) {
      alert("SUCCESSFULL");
      window.location.reload();
    }
  };

  const detailsChangeHanlder = (p, i) => {
    setOrderDetails({
      productname: p.productname1,
      category: p.categoryid,
      scategory: p.subcategory,
      sscategory: p.subsubcategory,
      skuid: p.skuid5,
      dprice:i.order.products[0].finalPrice,
      paymentid: i.order.paymentId,
      emailid: i.user[0].email,
      address: i.user[0].shippingaddress1,
      mobileno: i.user[0].phoneno,
      gst: i.user[0].gst,
      pan: i.user[0].pan,
      billingaddress: i.order.BillingAddress,
      shippingaddress: i.order.Shippingaddress,
    });
  };

  return (
    <>
      {posts &&
        posts?.map((i, index) => {
          return i.products.map((p, productindex) => (
            <tr key={index}>
              <th> {index + 1}</th>
              <th scope="col">
                <span key={p._id}>{p.productname1}</span>
              </th>
              <th scope="col">
                {(() => {
                  let userName;
                  const user = i.order.user;
                  i.user.map((usernames) => {
                    if (user === usernames._id) {
                      userName = usernames.username;
                      return;
                    }
                  });

                  return userName;
                })()}
              </th>
              <th>
                {(() => {
                  let quantity = i.order.products.map((q) => {
                    return q.quantity;
                  });
                  return quantity;
                })()}
              </th>
              <th>
                {(() => {
                  let amount = i.order.products.map((q) => {
                    return q.quantity * q.finalPrice;
                  });
                  return amount;
                })()}
              </th>

              <th>
                <button className="btn btn-success">
                  {(() => {
                    let newstatus;
                    const status = i.order.products.map((prod) => {
                      if (prod.vairanceid) {
                        if (prod.vairanceid === p._id) {
                          newstatus = prod.status;
                          return;
                        }
                      }
                      if (prod.productid === p._id) {
                        newstatus = prod.status;
                        return;
                      }
                    });
                    return newstatus;
                  })()}
                </button>
              </th>

              <th colSpan="5">
                <select
                  onChange={(i) => {
                    setsta(i.target.value);
                  }}
                  className={`form-control  shadow-none mx-1`}
                  name="statu"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="RETURN">RETURN</option>
                  <option value="IN TRANSIT">IN TRANSIT</option>
                  <option value="REFUND">REFUND</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </th>

              <th>
                <input
                  type="submit"
                  onClick={() => handleSubmit(i, p._id)}
                  className="btn mt-2 rounded-3 w-20  btn-sm btn-outline-secondary btn-dark"
                  value="Submit"
                />
              </th>

              <th scope="col" key={productindex}>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => detailsChangeHanlder(p, i)}
                >
                  Details
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5>{orderDetails.productname}</h5>

                        <button
                          type="button"
                          className="btn rounded btn-md btn-outline-secondary btn-dark pull-right"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          {" "}
                          <i
                            className="fa fa-times"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                      </div>
                      <div className="modal-body">
                        <label>Category: {orderDetails.category}</label>
                        <br />
                        <label>Sub Category: {orderDetails.scategory}</label>
                        <br />
                        <label>
                          Sub Sub Category : {orderDetails.sscategory}
                        </label>
                        <br />
                        <label> SKUID :{orderDetails.skuid}</label>
                        <br />
                        <label> Mobile No :{orderDetails.mobileno} </label>
                        <br />
                        <label>Email :{orderDetails.emailid}</label>
                        <br />
                        <label> GST No :{orderDetails.gst} </label>
                        <br />
                        <label> Pan No :{orderDetails.pan} </label>
                        <br />
                        <label>
                          Billing Address: {orderDetails.billingaddress}
                        </label>
                        <br />
                        <label>
                          Shipping Address: {orderDetails.shippingaddress}
                        </label>
                        <br />
                        <label> Payment Id : {orderDetails.paymentid}</label>
                        <br />
                        <label>Final Price : {orderDetails.dprice}</label>
                        <br />
                      </div>

                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th scope="col">
                {moment(`${i.order.createdAt}`).format(" Do MMMM YYYY")}
              </th>
              <th scope="col">
                {moment(`${i.order.createdAt}`).format("LTS")}
              </th>
            </tr>
          ));
        })}
    </>
  );
}

export default OrdersPosts;
