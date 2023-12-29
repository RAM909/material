import React from "react";
import { cssdealsdelete } from "../../services/api";

function CSSDealsposts({ posts }) {
  const remove = async (i) => {
    let dat = await cssdealsdelete(i._id);

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
        posts.map((i, index) => (
          <tr key={i._id}>
            <td>
              <span>{index + 1}</span>
            </td>
            <td>
              <span>{i.category}</span>
            </td>
            <td>
              <span>{i.subcategory}</span>
            </td>
            <td>
              <span>{i.subsubcategory}</span>
            </td>
            <td>
              <span>{i.percentage}</span>
            </td>
            <td>
              <button
                className="btn btn-lg btn-danger mx-2 rounded"
                onClick={(e) => {
                  remove(i);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </>
  );
}

export default CSSDealsposts;
