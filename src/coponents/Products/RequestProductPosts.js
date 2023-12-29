import React from "react";
import { ProductRequest21 } from "../../services/api";

function RequestProductPosts({ posts }) {

 
  const remove = async (i) => {
    let dat = await ProductRequest21(i._id);
    if (dat.status) {
      alert(dat.data);
      window.location.reload();
    } else {
      alert("Something went wrong");
      window.location.reload();
    }
  };

  return (
    <>
      {posts &&
        posts.map((i) => (
          <tr key={i._id}>
            <td>
              <span>{i.vendor_docs.map((l) => (
                <span key={l._id}>{l.name}</span>
              ))}</span>
            </td>
            <td>
              <span>
                {i.warehouse_docs.map((j) => (
                  <span key={j._id}>{j.name}</span>
                ))}
              </span>
            </td>
            <td>{i.price}</td>
            <td>
              <span>
                {i.product_docs.map((j) => (
                  <span key={j._id}>{j.productname1}</span>
                ))}
              </span>
            </td>
            <td>
              {i.status ? (
                <>
                  <button className="btn btn-success mt-2">Approved</button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={(e) => {
                      remove(i);
                    }}
                  >
                    PENDING
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
    </>
  );
}

export default RequestProductPosts;
