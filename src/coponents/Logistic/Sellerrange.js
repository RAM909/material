import { React, useEffect,useState} from 'react';
import { Form, Formik} from 'formik';
import InputField from './InputField';
import Footer from '../footer/Footer';
import { sellergetrange, sellerrange } from '../../services/api';
//  import useState from 'react-usestateref'
function Logistic() {
  const [posts, setposts] = useState([{
    rating1: "" , 
    rating2: "", rating3: "", rating4: "", rating5: "", rating6: "", rating7: "", rating8: "", rating9:"", rating10: "", rating11:"", rating12: "", rating13: "", rating14: "", rating15: "",
    ran1: "", ran2: "", ran3: "", ran4: "", ran5: "", ran6: "", ran7: "", ran8: "", ran9: "", ran10: "", ran11: "", ran12: "", ran13:"", ran14: "", ran15: ""
  }]);
  useEffect(() => {
  
    (async()=>{
      const dat = await sellergetrange();    
        
     // react-hooks/exhaustive-deps
          setposts(dat[0])
        
       
        
      
    })()

  }, []);

  return (
    <>
      <div className="content-page">

        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">

            </div>








            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Seller Range


                    </h4>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <strong>KM</strong>
                      </div>
                      <div className="col-6">
                        <strong>Values</strong>
                      </div>
                    </div>
                    
                    <Formik
                     
                      initialValues={{
                        title: process.env.REACT_APP_TITLE,
                        rating1: posts.rating1 , 
                        rating2: posts.rating2, rating3: posts.rating3, rating4: posts.rating4, rating5: posts.rating5, rating6: posts.rating6, rating7: posts.rating7, rating8: posts.rating8, rating9: posts.rating9, rating10: posts.rating10, rating11: posts.rating11, rating12: posts.rating12, rating13: posts.rating13, rating14: posts.rating14, rating15: posts.rating15,
                        ran1: posts.ran1, ran2: posts.ran2, ran3: posts.ran3, ran4: posts.ran4, ran5: posts.ran5, ran6: posts.ran6, ran7: posts.ran7, ran8: posts.ran8, ran9: posts.ran9, ran10: posts.ran10, ran11: posts.ran11, ran12: posts.ran12, ran13: posts.ran13, ran14: posts.ran14, ran15: posts.ran15
                      }}
                      enableReinitialize
                      onSubmit={async (values, actions) => {
                        try {

                            let dataresponse = await sellerrange(values);


                          if (!dataresponse.status) {
                            alert("something went wrong", dataresponse);
                          } else {
                            alert("SUCCESSFULLY CREATED", dataresponse.status)
                            window.location.reload()
                          }



                        } catch (error) {
                          alert("error", error)
                        }

                        actions.resetForm()


                      }}





                    >
                      {formik => (
                        <Form>
                          <div >
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating1" placeholder='KM'  />

                              </div>
                              <div className='col-6' >
                                <InputField name='ran1' placeholder='Value' />
                              </div>
                            </div>


                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating2" placeholder='KM' />

                              </div>
                              <div className='col-6' >
                                <InputField name='ran2' placeholder='Value' /></div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating3" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran3' placeholder='Value' /></div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating4" placeholder='KM' />
                              </div>
                              <div className='col-6' >
                                <InputField name='ran4' placeholder='Value' />
                              </div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating5" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran5' placeholder='Value' />
                              </div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating6" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran6' placeholder='Value' /></div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating7" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran7' placeholder='Value' />


                              </div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating8" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran8' placeholder='Value' /></div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating9" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran9' placeholder='Value' /></div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating10" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran10' placeholder='Value' /></div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating11" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran11' placeholder='Value' /></div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating12" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran12' placeholder='Value' />
                              </div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating13" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran13' placeholder='Value' />
                              </div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating14" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran14' placeholder='Value' />
                              </div>
                            </div>
                            <div className='row justify-content-between mt-3'>
                              <div className='col-6' >
                                <InputField name="rating15" placeholder='KM' /></div>
                              <div className='col-6' >
                                <InputField name='ran15' placeholder='Value' /></div>
                            </div>

                            <input type="submit" className='btn justify-content-between   mt-4 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark' value="Submit" />
                          </div>
                        </Form>
                      )}

                    </Formik>






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

export default Logistic;
