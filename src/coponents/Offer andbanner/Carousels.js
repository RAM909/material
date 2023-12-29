import React, { useEffect, useState } from "react";
import CarouselForm from "./CarouselForm";
import Footer from "../footer/Footer";
// import TextField from '../categories/TextField';
import { getcarousels } from "../../services/api";
function Carousels() {
  const [posts, setposts] = useState([]);
  // eslint-disable-next-line
  useEffect(() => {
    async function data() {
      let dat = await getcarousels();
      setposts(dat);
    }
    data();
  }, []);
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center"></div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-28">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Carousel</h4>
                    <div></div>
                    {/* formik form */}
                    <CarouselForm />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Carousel Images</h4>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Images 1</th>
                            <th scope="col">Images 2</th>
                            <th scope="col">Images 3</th>
                            <th scope="col">Images 4</th>
                            <th scope="col">Images 5</th>
                            <th scope="col">Images 6</th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts &&
                            posts.map((i) => (
                              <tr key={i._id}>
                                <td>
                                  <img
                                    alt="...."
                                    src={i.img1}
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="...."
                                    src={i.img2}
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="...."
                                    src={i.img3}
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="...."
                                    src={i.img4}
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="...."
                                    src={i.img5}
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="...."
                                    src={i.img6}
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Carousels;
