import React from "react";
import { Link } from "react-router-dom";
import { deletedcate } from "../../../services/api";
function catepost({ posts }) {
  const remove = async (i) => {
    let dat = await deletedcate(i._id);

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
        posts.map((i) => (
          <tr key={i._id}>
            <td>
              <span>{i.title}</span>
            </td>
            <td>
              <img src={i.img} alt=".." height="80px" width="80px" />
            </td>
            <td>
              <Link to={`/update/cat/${i._id}`}>
                <button className="btn btn-dark btn-lg">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </Link>{" "}
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

export default catepost;
