import React,{ useState } from 'react';
import { Transporterdelete } from '../../services/api';

function TransportersPosts({posts}) {
  const [transport, setTransport] = useState({});
    const remove=async(i) =>{

        let dat=await Transporterdelete({"name":i.name})
        if(dat.status){
            alert("DELETED")
            window.location.reload()
        }else{
            alert("Something went wrong")
            window.location.reload()
        }
    }

    const detailsChangeHanlder =  (i) => {
      setTransport({
        rate: i.rate.replace(/<[^>]+>/g, '')
      });
    }
  return (
    <>
   {
        posts && posts.map(
          (i,index) => (
            <tr key={i._id}>

              <td><span>{index+1}</span></td>
              <td><span>{i.name}</span></td>
              <td><span>{i.mobileno}</span></td>
              <td><span>{i.emailid}</span></td>
              <td><span>{i.gst}</span></td>
              <td><span>{i.address}</span></td>
              <td>

              <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={()=>detailsChangeHanlder(i)}
                  >
                    Details
                  </button>
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
                          

                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <label className='modal-body__content'> {transport.rate}</label>
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
                
                
                
                
                
                {/* <span>{i.rate.replace(/<[^>]+>/g, '')}</span> */}
                
                </td>
              <td> <button className='btn btn-danger m-2' onClick={(e) => {
                                remove(i)
                            }}>Remove</button></td>
              


            </tr>
          )
        )
      }

      
    </>
  );
}

export default TransportersPosts;
