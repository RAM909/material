import React from "react";
import { Quotationdeleted } from "../../services/api";

function QuotationPosts({ posts }) {
  const remove = async (i) => {
    let dat = await Quotationdeleted(i._id);
    if (!dat.status) {
      alert(dat);
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
              <span>{i.name}</span>
            </td>
            <td>
              <span>{i.email}</span>
            </td>
            <td>
              <span>{i.phoneno}</span>
            </td>
            <td>
              <span>{i.description}</span>
            </td>
            <td>
              <img src={i.img} height="80px" width="80px" alt="..." />
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
        ))}
    </>
  );
}

export default QuotationPosts;
