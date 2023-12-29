import React from "react";
import { warehousedeleted, warehouseupdated } from "../../services/api";
function Wareposts({ posts }) {
  const confirm = async (i) => {
    let dat = await warehouseupdated(i._id);
    if (dat.status) {
      alert("WAREHOUSES CONFIRMED");
      window.location.reload();
    } else {
      window.location.reload();
      alert("Something went wrong");
    }
  };
  const remove = async (i) => {
    let dat = await warehousedeleted(i._id);
    if (dat.status) {
      alert("WAREHOUSE  DELETED", dat.data);
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
            <th>{index + 1}.</th>
            <th>{i.name}</th>
            <th>{i.district}</th>
            <th>{i.state}</th>
            <th>{i.address}</th>
            <th>{i.pincode}</th>
            <th>{i.vendorname}</th>
            <th>{i.vendoremail}</th>
            <th>{i.vendorphoneno}</th>
            <th>
              {i.approved ? (
                <>
                  <p className="text-success m-2">Confirm</p>
                </>
              ) : (
                <>
                  <p className="text-info m-2">Pending</p>
                </>
              )}
            </th>
            <th>
              {i.approved ? (
                <>
                  <button
                    className="btn btn-danger m-2"
                    onClick={(e) => {
                      remove(i);
                    }}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-success m-2"
                    onClick={(e) => {
                      confirm(i);
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={(e) => {
                      remove(i);
                    }}
                  >
                    Remove
                  </button>
                </>
              )}
            </th>
          </tr>
        ))}
    </>
  );
}

export default Wareposts;
