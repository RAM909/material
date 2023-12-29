import React from "react";
import { changerole } from "../../services/api";
function NormalPost({ posts }) {
  const remove = async (i) => {
    let dat = await changerole(i._id, { role: "Corporate" });
    if (dat.status) {
      alert("ROLE CHANGED TO CORPORATE", dat.data);
      window.location.reload();
    } else {
      alert("Something went wrong");
      window.location.reload();
    }
  };

  return (
    <>
      {posts &&
        posts.map((i, index) => (
          <tr key={i._id}>
            <td>
              <span>{index + 1}</span>
            </td>
            <td>
              <span>{i.username}</span>
            </td>
            <td>
              <span>{i.phoneno}</span>
            </td>
            <td>
              <span>{i.email}</span>
            </td>
            <td>
              <span>{i.gst}</span>
            </td>
            <td>
              <span>{i.pan}</span>
            </td>
            <td>
              <span>{i.billingaddress1}</span>
            </td>
           
           
            <td>
              <span>{i.shippingaddress1}</span>
            </td>
           
            <td>
              <span>
                <button
                  className="btn btn-success rounded "
                  onClick={(e) => {
                    remove(i);
                  }}
                >
                  Move to Corporate
                </button>
              </span>
            </td>
          </tr>
        ))}
    </>
  );
}

export default NormalPost;
