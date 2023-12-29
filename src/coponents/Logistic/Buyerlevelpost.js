import React from "react";
import { buydeleted } from "../../services/api";
import { Link } from "react-router-dom";

function Buyerlevelpost({ posts }) {
 
  const remove = async (i) => {
  
    let dat = await buydeleted({"id":i._id['$oid']});
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
        posts?.map((k, index) => (
          
          <tr key={index}>
            <th>{k.pin}</th>
            
            <th>{k.level}</th>
            <th>
            <Link to={`/update/buyerlevel/${k._id.$oid}`}>
                <button className="btn btn-dark btn-lg">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </Link>{" "}
              <button
                className="btn btn-danger mx-2 px-2"
                onClick={(e) => {
                  remove(k);
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

export default Buyerlevelpost;
