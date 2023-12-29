import React from "react";
import { professionalapproved, professionaldeleted } from "../../services/api";

function Profeposyts({ posts }) {
  const confirm = async (i) => {
    let dat = await professionalapproved(i._id, { approved: true });
    if (dat.status) {
      alert(" CONFIRMED");
      window.location.reload();
    } else {
      window.location.reload();
      alert("Something went wrong");
    }
  };
  const remove = async (i) => {
    let dat = await professionaldeleted(i._id);
    if (dat.status) {
      alert("PROFESSIONAL DELETED", dat.data);
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
            <th> {index + 1}</th>
            <th> {i.name}</th>

            <th> {i.cat}</th>
            <th> {i.city}</th>
            <th> {i.phone}</th>
            <th> {i.expr}</th>
            <th>
              <img
                target="_blank"
                alt="..."
                height="80px"
                width="80px"
                src={i.img}
              ></img>
            </th>
            <th>
              <img
                target="_blank"
                alt="..."
                height="80px"
                width="80px"
                src={i.img2}
              ></img>
            </th>
            <th>
              <img
                target="_blank"
                alt="..."
                height="80px"
                width="80px"
                src={i.img3}
              ></img>
            </th>
            <th>
              <img
                target="_blank"
                alt="..."
                height="80px"
                width="80px"
                src={i.img4}
              ></img>
            </th>

            <th>{i.email} </th>
            <th>
              {i.status ? (
                <button className="btn  btn-success ">Approved</button>
              ) : (
                <button
                  className="btn btn-warning "
                  onClick={(e) => {
                    confirm(i);
                  }}
                >
                  Confirm
                </button>
              )}
            </th>
            <th>
              <button
                className="btn btn-danger mx-2 px-2"
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

export default Profeposyts;
