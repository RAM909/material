import React from "react";
import { Recomdelete } from "../../services/api";

function RecomPosts({ posts }) {
  const remove = async (i) => {
    let dat = await Recomdelete(i._id);
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

export default RecomPosts;
