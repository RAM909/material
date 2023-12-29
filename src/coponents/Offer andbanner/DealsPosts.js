import React from "react";
import { Dealdelete } from "../../services/api";

function Dealsposts({ posts }) {
  const remove = async (i) => {
    let dat = await Dealdelete(i.productname1);
    if (dat.status) {
      alert("DELETED", dat.data);
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
          return (
            <tr key={i._id}>
              <td>
                <span>{index + 1}</span>
              </td>
              <td>
                <span>{i.productname1}</span>
              </td>
              <td>
                <span>{i.discount}</span>
              </td>

              <th scope="col">
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

export default Dealsposts;
