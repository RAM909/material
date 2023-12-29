import React from "react";

import { promocodeupdate } from "../../services/api";

function formatUTCtoIST(utcTimestamp) {
  const istTime = new Date(utcTimestamp.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  return istTime.toLocaleString();
}

function Promocodeposts({ posts }) {
  const confirm = async (i) => {
    await promocodeupdate(i._id, i.data);
    window.location.reload();
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
              <span>{i.codename}</span>
            </td>
            <td>
              <span>{i.message}</span>
            </td>
            <td>
              <span>{i.discount}</span>
            </td>
            <td>
              <span>{i.type}</span>
            </td>
            <td>
             <span>{formatUTCtoIST(new Date(i.started))}</span>
            </td>
            <td>
              <span>{formatUTCtoIST(new Date(i.ended))}</span>
            </td>
            <td>
              <span>{i.mini}</span>
            </td>
            <td>
              <span>{i.noofusers}</span>
            </td>

            <td>
              <span>
                {i.currentstatus ? <span>True</span> : <span>False</span>}
              </span>
            </td>

            <td>
              <button
                className="btn btn-dark btn-lg"
                onClick={(e) => {
                  confirm(i);
                }}
              >
                <i className={!(i.currentstatus)? "fa-solid fa-toggle-on":"fa-solid fa-toggle-off"}></i>
              </button>
            </td>
          </tr>
        ))}
    </>
  );
}

export default Promocodeposts;
