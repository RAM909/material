import React from "react";
import { Link } from "react-router-dom";

import { deletedsubcate } from "../../../services/api";
function Subcatepost({ posts }) {
  const remove = async (i) => {
    let dat = await deletedsubcate(i._id);
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
      {posts?.map((i, ind) => (
        <tr key={ind}>
          <td>
            <span>{i.categoryname}</span>
          </td>
          <td>
            <span>{i.subcategory}</span>
          </td>
          <td>
            <img
              src={i.subcategoryimg}
              alt="....."
              height="80px"
              width="80px"
            />
          </td>

          {i.subcategory === "NA" ? (
            <>
              <td>
                <p className="text-white">Create Sub category</p>
              </td>
            </>
          ) : (
            <td>
              <Link to={`/update/sub/${i._id}`}>
                <button className="btn btn-dark btn-lg">
                  <i className="fa-solid fa-pen-to-square"></i>{" "}
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
          )}
        </tr>
        // <p style={{color:"white"}}>{i.title}</p>
      ))}
    </>
  );
}
export default Subcatepost;
