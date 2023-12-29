import React from "react";
import { vendorupdated, vendordeleted } from "../../services/api";
function Requestvendorposts({ posts }) {
  const confirm = async (i) => {
    let dat = await vendorupdated(i._id, { approved: true });
    if (dat.status) {
      alert("VENDOR REQUEST CONFIRMED");
      window.location.reload();
    } else {
      window.location.reload();
      alert("Something went wrong");
    }
  };
  const remove = async (i) => {
    let dat = await vendordeleted(i._id);
    if (dat.status) {
      alert("VENDOR REQUEST DELETED", dat.data);
      window.location.reload();
    } else {
      alert("Something went wrong");
      window.location.reload();
    }
  };

  return (
    <>
      {posts &&
        posts.map((i, index) => {
          if (i.approved) {
            return 0;
          }
          return (
            <tr key={i._id}>
              <td>
                <span>{index + 1}</span>
              </td>
              <td>
                <span>{i.name}</span>
              </td>
              <td>
                <span>{i.email}</span>
              </td>
              <td>
                <span>{i.mobileno}</span>
              </td>
              <td>
                <span>{i.pincode}</span>
              </td>
              <td>
                <span>{i.gst}</span>
              </td>
              <td>
                <span>{i.address}</span>
              </td>
              <th scope="col">
                <button
                  className="btn btn-success m-2"
                  onClick={(e) => {
                    confirm(i);
                  }}
                >
                  Confirm
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={(e) => {
                    remove(i);
                  }}
                >
                  Remove
                </button>
              </th>
            </tr>
          );
        })}
    </>
  );
}

export default Requestvendorposts;
