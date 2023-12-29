import React from "react";
import { Link } from "react-router-dom";

function Addvariantsposts({ posts }) {
  return (
    <>
      {posts &&
        posts.map((i) => (
          <tr key={i._id}>
            <td>
              <span>{i.productname1}</span>
            </td>
            <td>
              <img src={i.imgs1} alt="..." height="80px" weight="80px" />
            </td>
            <td>
              <span>{i.price2A}</span>
            </td>
            <td>
              <span>{i.discountprice2B}</span>
            </td>
            <td>
              <span>{i.vari1}</span>
            </td>
            <td>
              <span>{i.vari2}</span>
            </td>
            <td>
              <span>{i.vari3}</span>
            </td>
            <td>
              <span>{i.vari4}</span>
            </td>
            <td>
              <span>{i.stock6}</span>
            </td>

            <th scope="col">
              <Link to={`/update/addvariant/${i._id}`}>
                <button className="btn btn-dark btn-lg">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </Link>
            </th>
          </tr>
        ))}
    </>
  );
}

export default Addvariantsposts;
