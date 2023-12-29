import React from "react";
import { closeenquiry, deleteenquiry } from "../../services/api";

function Fabspots({ posts }) {
  const remove = async (i) => {
    let dat = await closeenquiry(i._id);
    if (dat.status) {
      alert("Closed ", dat.data);
      window.location.reload();
    } else {
      alert("Something went wrong");
      window.location.reload();
    }
  };
  const remove1 = async (i) => {
    let dat = await deleteenquiry(i._id);
    if (dat.status) {
      alert("DELETED ", dat.data);
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
              <span>{i.name}</span>
            </td>
            <td>
              <span>{i.number}</span>
            </td>
            <td>
              <span>{i.email}</span>
            </td>
            <th>
              {" "}
              {i.isOpen ? (
                <button
                  className="btn btn-success m-2"
                  onClick={(e) => {
                    remove(i);
                  }}
                >
                  Open
                </button>
              ) : (
                <button className="btn btn-success m-2">Close</button>
              )}
              <button
                className="btn btn-danger m-2"
                onClick={(e) => {
                  remove1(i);
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

export default Fabspots;
