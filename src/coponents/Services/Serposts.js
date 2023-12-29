import React, { useState } from "react";
import { servicesdeleted } from "../../services/api";

function Serposts({ posts }) {
  const [description, setDescription] = useState("");
  const remove = async (i) => {
    let dat = await servicesdeleted(i._id);
    if (dat.status) {
      alert("SERVICES DELETED", dat.data);
      window.location.reload();
    } else {
      alert("Something went wrong");
      window.location.reload();
    }
  };

  const detailsChangeHanlder = (i) => {
    setDescription(i.replace(/<[^>]+>/g, ""));
  };
  return (
    <>
      {posts &&
        posts.map((i, index) => (
          <tr key={i._id}>
            <th> {index + 1}</th>
            <th> {i.service}</th>

            <th>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => detailsChangeHanlder(i.descr)}
              >
                Details
              </button>

              {/* {i.descr.replace(/<[^>]+>/g, "")} */}

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                    Description
                      <button
                        type="button"
                        className="btn rounded btn-md my-1 btn-outline-secondary btn-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        {" "}
                        <i
                          className="fa fa-times"
                          style={{ color: "white" }}
                        ></i>
                      </button>
                    </div>
                    <div className="modal-body">
                      <label className="modal-body__content">
                        {" "}
                        {description}
                      </label>
                      <br />
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </th>

            <th>
              {" "}
              <img
                target="blank"
                alt="....."
                src={i.img}
                height="70px"
                width="80px"
              ></img>
            </th>

            <th>{i.email} </th>
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

export default Serposts;
