import React from 'react';
import Footer from '../footer/Footer';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Rate, downloadget } from '../../services/api';
import   Papa from 'papaparse'
function Ratecharts() {
 const download = async () =>{
  try{ const response = await downloadget(); // Replace with your server's API endpoint
  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } else {
    alert('Failed to download CSV');
  }
} catch (error) {
  alert('Error:', error);
}
 }
  const validate = yup.object({

    csv: yup
      .mixed()
      .nullable()
      .required("Required")
      // .test(
      //   "FILE_FORMAT",
      //   "Uploaded file has unsupported format",
      //   (value) => !value || SUPPORTED_FORMATS.includes(value?.type)
    // ),

  })
  return (
    <>
      <div className="content-page">

        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Rate Charts</h4>
                </div>

              </div>
            </div>




            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Chart
                    </h4>





                    <div className="table-responsive">
                      <Formik
                        initialValues={{
                          csv: "",
                          url: ""
                        }}
                        onSubmit={async (values, actions) => {
                          Papa.parse(values.csv, {
                            complete: async (result) =>{
                              try {
                              
                                let response = await Rate(result.data)
                                if (response.status) {
    
                                  alert("SUCCESSFULLY CREATED")
    
    
                                  window.location.reload()
                                } else {
                                  alert("something went wrong")
                                }
                              } catch (error) {
                              alert(error)
                              }
                          }
                        })                  
                        actions.resetForm()
                        }}
                        validationSchema={validate}
                      >
                        {formik => (

                          <Form onSubmit={formik.handleSubmit}>
                            <label>CSV Upload</label>
                            <input type="file" accept=".csv" onChange={(e) =>
                              formik.setFieldValue("csv", e.target.files[0])
                            } className={`form-control shadow-none mb-2 ${formik.touched.csv && formik.errors.csv && 'is-invalid'}`} name='csv' placeholder='Image' />
                            <ErrorMessage name='csv' className='error' component='div' />
                            <br />
                            <input type="submit" className='btn mt-2 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark' value="Upload" />
                          </Form>
                        )}
                      </Formik>
                        <button type="button"  className='btn mt-2 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark' onClick={download} >Download</button>

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

export default Ratecharts;
