import React from "react";
import { Link } from "react-router-dom";
import { Productdelete } from "../../services/api";
function ManagePosts({ posts }) {
  const remove = async (i,j) => {
    let dat = await Productdelete(i._id,j._id);
    if (dat.status) {
      alert(" DELETED", dat.data);
      window.location.reload();
    } else {
      alert("Something went wrong");
      window.location.reload();
    }
  };

  return (
    <>
      {posts &&
        posts.map((i) =>
          i.variations.map((j) => (
          
            <tr key={j._id}>
              <td>
                <span>{j.productname1}</span>
              </td>
              <td>
                <img src={j.imgs1} alt="..." height="80px" weight="80px" />
              </td>
              <td>
                <span>{j.price2A}</span>
              </td>
              <td>
                <span>{j.discountprice2B}</span>
              </td>
              <td>
                <span>{j.stock6}</span>
              </td>

              <th scope="col">
                <Link to={`/update/pro/${i._id}/${j._id}`} >
                  <button className="btn btn-dark btn-lg">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </Link>
                <button
                  className="btn btn-danger btn-lg mx-2"
                  onClick={(e) => {
                    remove(i,j);
                  }}
                >
                  Remove
                </button>
              </th>
            </tr>
          ))
        )}
    </>
  );
}

export default ManagePosts;
