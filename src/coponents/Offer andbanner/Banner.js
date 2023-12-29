import React, { useState, useEffect } from "react";
import BannerForm from "./BannerForm";
import Footer from "../footer/Footer";
import { getBanner } from "../../services/api";
function Banner() {
  const [posts, setposts] = useState([] || null);
  // eslint-disable-next-line
  useEffect(() => {
    async function data() {
      let dat = await getBanner();
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
                    <h4 className="mt-0 header-title mb-4">Banner </h4>
                    <div></div>
                    {/* formik form */}
                    <BannerForm />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Banner Details</h4>

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
                            posts?.map((i) => (
                              <tr key={i._id}>
                                <td>
                                  <img
                                    src={i.img1}
                                    alt="...."
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    src={i.img2}
                                    alt="...."
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    src={i.img3}
                                    alt="...."
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    src={i.img4}
                                    alt="...."
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    src={i.img5}
                                    alt="...."
                                    height="80px"
                                    width="80px"
                                  />
                                </td>
                                <td>
                                  <img
                                    src={i.img6}
                                    alt="...."
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

export default Banner;
