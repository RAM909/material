import React from "react";
import { deletedfilter } from "../../services/api";

function Filterposts({ posts }) {
  const remove = async (i) => {
    let dat = await deletedfilter(i._id);

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
        posts?.map((i, index) => (
          <tr key={i._id}>
            <th scope="col">{i.name}</th>
            <th scope="col">{i.att}</th>
            <th scope="col">
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  remove(i);
                }}
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
    </>
  );
}

export default Filterposts;
