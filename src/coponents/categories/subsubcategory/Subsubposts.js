import React from "react";
import { Link } from "react-router-dom";
import { deletedsubsubcate } from "../../../services/api";
function Subsubposts({ posts }) {
  const remove = async (i) => {
    let dat = await deletedsubsubcate(i._id);
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
        posts.map((i, ind) => (
          <tr key={ind}>
            <td>
              <span>{i.categoryname}</span>
            </td>
            <td>
              <span>{i.subcategoryname}</span>
            </td>
            <td>
              <span>{i.subsubcategory}</span>
            </td>
            <td>
              <img
                src={i.subsubcategoryimg}
                alt="....."
                height="80px"
                width="80px"
              />
            </td>

            {i.subsubcategory === "NA" ? (
              <>
                <p className="text-white">Create the Sub Sub Category</p>
              </>
            ) : (
              <>
                {" "}
                <td>
                  <Link to={`/update/subsub/${i._id}`}>
                    <button className="btn btn-dark btn-lg">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </Link>
                  <button
                    className="btn btn-lg btn-danger mx-2 rounded"
                    onClick={(e) => {
                      remove(i);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
    </>
  );
}

export default Subsubposts;
