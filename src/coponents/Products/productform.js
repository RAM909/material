import { React, useEffect, useState, useRef } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Switch from "@mui/material/Switch";
import JoditEditor from "jodit-react";
import * as yup from "yup";
import Multiselect from "multiselect-react-dropdown";
import Inputfielded from "../Offer andbanner/Inputfielded";
import "../../App.css";
import {
  Filterget,
  getAllCategory,
  getAllSubCategory,
  Product,
  Productget,
  Productname,
  SubSubgetCategory,
  UploadFile,
} from "../../services/api";
/* eslint-disable */
function ProductForm() {
  const editor = useRef(null);
  const [state, setstate] = useState([]);
  const [state1, setstate1] = useState([]);
  const [state2, setstate2] = useState([]);
  const [filters, setfilters] = useState([]);
  const [filters1, setfilters1] = useState([]);
  const [tags2, settags2] = useState([]);
  const [tags23, settags23] = useState([]);

  useEffect(() => {
    async function data() {
      let dat = await getAllCategory();
      let response = await getAllSubCategory();
      let resp = await SubSubgetCategory();
      let filtername = await Filterget();
      let data1 = await Productget();
      setfilters1(data1.data);
      let optionsvalue = [];
      filtername.data.map((i) => {
        let valueds = i.name + "=" + i.att;
        optionsvalue.push({ name: valueds });
      });
      setfilters(optionsvalue);
      setstate2(resp);

      setstate1(response);

      setstate(dat);
    }
    data();
  }, []);

  const validate = yup.object({
    productname1: yup.string().required("Required"),
    price2A: yup
      .string()
      .required("Required")
      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    discountprice2B: yup
      .string()
      .required()
      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    taxpercent3: yup
      .string()
      .required("Required")
      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    partprice4A: yup
      .string()
      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    sell4B: yup.string(),
    skuid5: yup.string().required("Required"),
    stock6: yup.string().required("Required"),
    weight7A: yup.string().required("Required"),
    weightunit7A: yup.string().required("Required"),
    volumetricweight7B: yup.string().required("Required"),
    volumetricunit7B: yup.string().required("Required"),
    len8A: yup.string().required("Required"),
    lenunit8A: yup.string().required("Required"),
    width8B: yup.string().required("Required"),
    widthunit8B: yup.string().required("Required"),
    height8C: yup.string().required("Required"),
    heightunit8C: yup.string().required("Required"),
    manufacturer9: yup.string().required("Required"),
    madein10: yup.string().required("Required"),
    minord11A: yup
      .string()
      .required("Required")
      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    maxord11B: yup
      .string()
      .required("Required")
      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),

    description12: yup.string().required("Required"),
    description123: yup.string().required("Required"),

    minimum1: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    maximum1: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      )
      .when("minimum1", (minimum1) => {
        if (minimum1) {
          return yup
            .number()
            .min(minimum1, "Greater than minimum")
            .typeError("maximum should be greater than minimum");
        }
      }),
    price1: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    minimum2: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    maximum2: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      )
      .when("minimum2", (minimum2) => {
        if (minimum2) {
          return yup
            .number()
            .min(minimum2, "Greater than minimum")
            .typeError("maximum should be greater than minimum");
        }
      }),
    price2: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    minimum3: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    maximum3: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      )
      .when("minimum3", (minimum3) => {
        if (minimum3) {
          return yup
            .number()
            .min(minimum3, "Greater than minimum")
            .typeError("maximum should be greater than minimum");
        }
      }),
    price3: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    minimum4: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    maximum4: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      )
      .when("minimum4", (minimum4) => {
        if (minimum4) {
          return yup
            .number()
            .min(minimum4, "Greater than minimum")
            .typeError("maximum should be greater than minimum");
        }
      }),
    price4: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    minimum5: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    maximum5: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      )
      .when("minimum5", (minimum5) => {
        if (minimum5) {
          return yup
            .number()
            .min(minimum5, "Greater than minimum")
            .typeError("maximum should be greater than minimum");
        }
      }),
    price5: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    free5: yup.bool(),
    free4: yup.bool(),
    free6: yup.bool(),
    free3: yup.bool(),
    free2: yup.bool(),

    free1: yup.bool(),

    minimum6: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
    maximum6: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      )
      .when("minimum6", (minimum6) => {
        if (minimum6) {
          return yup
            .number()
            .min(minimum6, "Greater than minimum")
            .typeError("maximum should be greater than minimum");
        }
      }),
    categoryid: yup.string().required("Required"),
    excpins: yup.string(),
    seotags: yup.string(),
    seotitle: yup.string(),
    seodesc: yup.string(),

    price6: yup
      .string()

      .matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "Only Digits"
      ),
  });

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card m-b-28">
            <div className="card-body">
              <h4 className="mt-0 header-title mb-4">Add Product</h4>
              <div>
                <Formik
                  initialValues={{
                    productname1: "",
                    price2A: "",
                    discountprice2B: "",
                    taxpercent3: "",
                    partprice4A: "",
                    sell4B: "",
                    skuid5: "",
                    stock6: "",
                    weight7A: "",
                    weightunit7A: "",
                    volumetricweight7B: "",
                    volumetricunit7B: "",
                    len8A: "",
                    lenunit8A: "",
                    width8B: "",
                    widthunit8B: "",
                    height8C: "",
                    heightunit8C: "",
                    manufacturer9: "",
                    madein10: "",
                    minord11A: "",
                    maxord11B: "",
                    description12: "",
                    cancellable: false,
                    returnable: false,
                    refunable: false,
                    quote: false,
                    loading: false,
                    unit18A: "",
                    unit18B: "",
                    unit18C: "",
                    unit18D: "",
                    vol18E: "",
                    vol18F: "",
                    vol18G: "",
                    vol18H: "",
                    vari1: "",
                    vari2: "",
                    vari3: "",
                    vari4: "",
                    subcategory: "",
                    categoryid: "",
                    minimum1: "",
                    maximum1: "",
                    price1: "",
                    minimum2: "",
                    maximum2: "",
                    price2: "",
                    minimum3: "",
                    maximum3: "",
                    price3: "",
                    minimum4: "",
                    maximum4: "",
                    price4: "",
                    minimum5: "",
                    maximum5: "",
                    price5: "",
                    minimum6: "",
                    maximum6: "",
                    price6: "",
                    imgs1: "",
                    imgs2: "",
                    imgs3: "",
                    cal: false,
                    imgs4: "",
                    file1: "",
                    file2: "",
                    file3: "",
                    file4: "",
                    calculatorunit: "",
                    subsubcategory: "",
                    calculator: "",
                    tags: [{}],
                    vari: [],
                    description123: "",

                    free6: false,
                    free5: false,
                    free4: false,
                    free3: false,
                    free2: false,
                    free1: false,
                    actions1: false,
                    excpins: "",
                    seotags: "",
                    seotitle: "",
                    seodesc: "",
                  }}
                  validationSchema={validate}
                  onSubmit={async (values, actions) => {
                    let arrayelement = [];
                    tags23?.map((element) => {
                      arrayelement.push(element);
                    });
                    values.vari = arrayelement;
                    let arr2 = [];
                    tags2?.map((element, index) => {
                      let hs = element.name.split("=");
                      let temp = { variant: hs[0], value: hs[1] };
                      arr2.push(temp);
                    });
                    values.tags = arr2;
                    try {
                      if (values.imgs1) {
                        const data = new FormData();
                        data.append("name", values.imgs1.name);
                        data.append("file", values.imgs1);
                        let img = await UploadFile(data);

                        values.imgs1 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }
                    try {
                      if (values.imgs2) {
                        const data = new FormData();
                        data.append("name", values.imgs2.name);
                        data.append("file", values.imgs2);
                        let img = await UploadFile(data);

                        values.imgs2 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }
                    try {
                      if (values.imgs3) {
                        const data = new FormData();
                        data.append("name", values.imgs3.name);
                        data.append("file", values.imgs3);
                        let img = await UploadFile(data);

                        values.imgs3 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }
                    try {
                      if (values.imgs4) {
                        const data = new FormData();
                        data.append("name", values.imgs4.name);
                        data.append("file", values.imgs4);
                        let img = await UploadFile(data);

                        values.imgs4 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }
                    try {
                      if (values.file1) {
                        const data = new FormData();
                        data.append("name", values.file1.name);
                        data.append("file", values.file1);
                        let img = await UploadFile(data);

                        values.file1 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }
                    try {
                      if (values.file1) {
                        const data = new FormData();
                        data.append("name", values.file1.name);
                        data.append("file", values.file1);
                        let img = await UploadFile(data);

                        values.file1 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }

                    try {
                      if (values.file2) {
                        const data = new FormData();
                        data.append("name", values.file2.name);
                        data.append("file", values.file2);
                        let img = await UploadFile(data);

                        values.file2 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }
                    try {
                      if (values.file3) {
                        const data = new FormData();
                        data.append("name", values.file3.name);
                        data.append("file", values.file3);
                        let img = await UploadFile(data);

                        values.file3 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }
                    try {
                      if (values.file4) {
                        const data = new FormData();
                        data.append("name", values.file4.name);
                        data.append("file", values.file4);
                        let img = await UploadFile(data);

                        values.file4 = img.data;
                      }
                    } catch (error) {
                      alert(error);
                    }

                    try {
                      let response = await Product(values);

                      if (response.status) {
                        alert(response.data.message);

                        // window.location.reload();
                      } else {
                        alert("something went wrong");
                      }
                    } catch (error) {
                      alert(error);
                    }

                    actions.resetForm();
                  }}
                >
                  {(formik) => (
                    <Form>
                      {/* 1st row  */}
                      <div className="row mt-2">
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="1. Product Name"
                            name="productname1"
                          />
                        </div>

                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded label="2A. Price(Rs)" name="price2A" />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="2B. Discounted Price(Rs)"
                            name="discountprice2B"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded label="3. Tax(%)" name="taxpercent3" />
                        </div>
                      </div>
                      {/* 2nd row */}
                      <div className="row mt-2">
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="4A. Part Price(Rs)"
                            name="partprice4A"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="4B. Sell In"
                            name="sell4B"
                            placeholder="e.g. liter or sqft or bag"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded label="5. SKU ID" name="skuid5" />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded label="6. Stock" name="stock6" />
                        </div>
                      </div>
                      {/* 3rd row */}
                      <div className="row mt-2">
                        {/* 1 column */}
                        <div className="col-6  mt-2">
                          {/* inner row */}
                          <div className="row">
                            <div className="col-12 col-lg-8 mt-2 ">
                              <Inputfielded
                                label="7A. Weight"
                                name="weight7A"
                              />
                            </div>
                            <div className="col-12 col-lg-4 mt-2">
                              <label>Unit</label>

                              <Field
                                as="select"
                                name="weightunit7A"
                                className={`form-control shadow-none ${
                                  formik.touched.weightunit7A &&
                                  formik.errors.weightunit7A &&
                                  "is-invalid"
                                }`}
                              >
                                <option defaultValue="">Unit</option>
                                <option value="Kg">Kg</option>
                                <option value="g">g</option>
                                <option value="lb">lb</option>
                              </Field>
                              <ErrorMessage
                                component="div"
                                name="weightunit7A"
                                className="error"
                              />
                            </div>
                          </div>
                        </div>
                        {/* 2 column */}
                        <div className="col-6  mt-2">
                          <div className="row">
                            <div className="col-12 col-lg-8 mt-2 ">
                              <Inputfielded
                                label=" 7B. Vol Weight"
                                name="volumetricweight7B"
                              />
                            </div>
                            <div className="col-12 col-lg-4 mt-2">
                              <label>Unit</label>

                              <Field
                                as="select"
                                name="volumetricunit7B"
                                className={`form-control shadow-none  ${
                                  formik.touched.volumetricunit7B &&
                                  formik.errors.volumetricunit7B &&
                                  "is-invalid"
                                } `}
                              >
                                <option value="">Unit</option>
                                <option value="kg">kg</option>
                                <option value="g">g</option>
                                <option value="lb">lb</option>
                              </Field>
                              <ErrorMessage
                                component="div"
                                name="volumetricunit7B"
                                className="error"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 4th row */}
                      <div className="row mt-2">
                        <div className="col-4 mt-2">
                          {/* inner row */}
                          <div className="row">
                            <div className="col-12 col-lg-8 mt-2 ">
                              <Inputfielded label="8A. Length" name="len8A" />
                            </div>
                            <div className="col-12 col-lg-4 mt-2">
                              <label>Unit</label>

                              <Field
                                as="select"
                                name="lenunit8A"
                                className={`form-control shadow-none  ${
                                  formik.touched.lenunit8A &&
                                  formik.errors.lenunit8A &&
                                  "is-invalid"
                                } `}
                              >
                                <option defaultValue="">Unit</option>
                                <option select value="cm">
                                  cm
                                </option>
                                <option value="m">m</option>
                                <option value="ft">ft</option>
                                <option value="in">in</option>
                                <option value="mm">mm</option>
                              </Field>
                              <ErrorMessage
                                component="div"
                                name="lenunit8A"
                                className="error"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-4 mt-2">
                          {/* inner row */}
                          <div className="row">
                            <div className="col-12 col-lg-8 mt-2 ">
                              <Inputfielded label="8B. Width" name="width8B" />
                            </div>
                            <div className="col-12 col-lg-4 mt-2">
                              <label>Unit</label>

                              <Field
                                as="select"
                                name="widthunit8B"
                                className={`form-control shadow-none  ${
                                  formik.touched.widthunit8B &&
                                  formik.errors.widthunit8B &&
                                  "is-invalid"
                                } `}
                              >
                                <option defaultValue="">Unit</option>
                                <option select value="cm">
                                  cm
                                </option>
                                <option value="m">m</option>
                                <option value="ft">ft</option>
                                <option value="in">in</option>
                                <option value="mm">mm</option>
                              </Field>
                              <ErrorMessage
                                component="div"
                                name="widthunit8B"
                                className="error"
                              />
                            </div>
                          </div>
                        </div>

                        {/* 1 column */}
                        <div className="col-4 mt-2">
                          {/* inner row */}
                          <div className="row">
                            <div className="col-12 col-lg-8 mt-2 ">
                              <Inputfielded
                                label="8C. Height"
                                name="height8C"
                              />
                            </div>
                            <div className="col-12 col-lg-4 mt-2">
                              <label>Unit</label>

                              <Field
                                as="select"
                                name="heightunit8C"
                                className={`form-control shadow-none  ${
                                  formik.touched.heightunit8C &&
                                  formik.errors.heightunit8C &&
                                  "is-invalid"
                                } `}
                              >
                                <option defaultValue="">Unit</option>
                                <option select value="cm">
                                  cm
                                </option>
                                <option value="m">m</option>
                                <option value="ft">ft</option>
                                <option value="in">in</option>
                                <option value="mm">mm</option>
                              </Field>
                              <ErrorMessage
                                component="div"
                                name="heightunit8C"
                                className="error"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 5th row */}
                      <div className="row mt-2">
                        <div className="col-12 col-lg-3  mt-2">
                          <Inputfielded
                            label="9. Manufacturer"
                            name="manufacturer9"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded label="10. Made in " name="madein10" />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="11A. Min Order"
                            name="minord11A"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="11B. Max Order "
                            name="maxord11B"
                          />
                        </div>
                      </div>
                      {/* 6 row */}
                      <div className="row mt-2">
                        <div className="col-12  mt-2">
                          <label>12A. Product Description</label>

                          <JoditEditor
                            ref={editor}
                            value={formik.values.description12}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) =>
                              formik.setFieldValue("description12", newContent)
                            } // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                          />

                          <ErrorMessage
                            component="div"
                            name="description12"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12  mt-2">
                          <label>12B. Product Description 2</label>

                          <JoditEditor
                            ref={editor}
                            value={formik.values.description123}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) =>
                              formik.setFieldValue("description123", newContent)
                            } // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                          />

                          <ErrorMessage
                            component="div"
                            name="description123"
                            className="error"
                          />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-12 col-lg-3  mt-2">
                          <label>13A. Material Calculator ?</label>
                          <br />
                          <Switch
                            onChange={(e) => formik.setFieldValue("cal", true)}
                          />
                        </div>
                        <div className="col-lg-3  mt-2">
                          <Inputfielded
                            label="13B. Material Calculator Value"
                            name="calculator"
                          />
                        </div>
                        <div className="col-12 col-lg-3  mt-2">
                          <Inputfielded
                            label="13C. Material Unit"
                            name="calculatorunit"
                          />
                        </div>
                        <div className="col-12 col-lg-3  mt-2">
                          <label>14. Tags</label>
                          {/* <Inputfielded label="14. Tags" name="tags" /> */}

                          <Multiselect
                            options={filters} // Options to display in the dropdown
                            name="tags"
                            onSelect={(selectedList, selectedItem) => {
                              settags2(selectedList);
                            }}
                            onRemove={(selectedList, removedItem) => {
                              settags2(selectedList);
                            }}
                            style={{ border: "1px solid #353957" }}
                            displayValue="name" // Property name to display in the dropdown options
                          />
                        </div>

                        <div className="col-lg-6 mt-2">
                          <label>
                            15. Frequently Bought Together Products{" "}
                          </label>
                          <Multiselect
                            placeholder="Product Name"
                            options={filters1} // Options to display in the dropdown
                            name="vari"
                            onSelect={(selectedList, selectedItem) => {
                              settags23(selectedList);
                            }}
                            onRemove={(selectedList, removedItem) => {
                              settags23(selectedList);
                            }}
                            style={{
                              border: "1px solid #353957",
                              color: "white",
                              overflow: "none",
                            }}
                            displayValue="productname1" // Property name to display in the dropdown options
                          />

                          <ErrorMessage
                            name="vari"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>
                      {/* 7 row */}
                      <div className="row mt-2">
                        <div className="col-12 col-lg-3  mt-2">
                          <label>16A. Is Cancellable ?</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("cancellable", true)
                            }
                          />
                        </div>
                        <div className="col-12 col-lg-3  mt-2">
                          <label>16B. Is Returnable ?</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("returnable", true)
                            }
                          />
                        </div>

                        <div className="col-12 col-lg-3  mt-2">
                          <label>16C. Is Refundable ?</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("refunable", true)
                            }
                          />
                        </div>
                        <div className="col-12 col-lg-3  mt-2">
                          <label>16D. Quote Only</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("quote", true)
                            }
                          />
                        </div>
                      </div>

                      {/* 9. row */}
                      <div className="row mt-2">
                        <div className="col-12 col-lg-3  mt-2">
                          <label>16E. Loading/Unloading Charges</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("loading", true)
                            }
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12 col-lg-3 mt-2">
                          <label>17A. Category Name</label>
                          <Field
                            as="select"
                            className={`form-control shadow-none ${
                              formik.touched.categoryid &&
                              formik.errors.categoryid &&
                              "is-invalid"
                            }`}
                            name="categoryid"
                          >
                            <option defaultValue="">Select Category</option>
                            {state &&
                              state.map((i, index) => (
                                <option value={i.title}>{i.title}</option>
                              ))}
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="categoryid"
                            className="error"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <label>17B. Sub Category Name</label>
                          <Field
                            as="select"
                            className={`form-control shadow-none ${
                              formik.touched.subcategory &&
                              formik.errors.subcategory &&
                              "is-invalid"
                            }`}
                            name="subcategory"
                          >
                            <option defaultValue="">Select Category</option>
                            {state1 &&
                              state1.map((i, index) => {
                                if (formik.values.categoryid === i.categoryname)
                                  return (
                                    <option
                                      key={index}
                                      name="subcategory"
                                      value={i.subcategory}
                                    >
                                      {i.subcategory}
                                    </option>
                                  );
                              })}
                          </Field>
                          <ErrorMessage
                            component="div"
                            className="error"
                            name="subcategory"
                          />
                        </div>

                        <div className="col-12 col-lg-3 mt-2">
                          <label> 17C. Sub Sub Category Name</label>
                          <Field
                            as="select"
                            className={`form-control shadow-none ${
                              formik.touched.subsubcategory &&
                              formik.errors.subsubcategory &&
                              "is-invalid"
                            }`}
                            name="subsubcategory"
                          >
                            <option defaultValue="">Select Category</option>
                            {state2 &&
                              state2.map((i, index) => {
                                if (
                                  formik.values.categoryid === i.categoryname &&
                                  formik.values.subcategory ===
                                    i.subcategoryname
                                )
                                  return (
                                    <option value={i.subsubcategory}>
                                      {i.subsubcategory}
                                    </option>
                                  );
                              })}
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="subsubcategory"
                            className="error"
                          />
                        </div>
                      </div>
                      {/* new row */}
                      <div className="row mt-2">
                        <div className="col-12 col-lg-3  mt-2">
                          <Inputfielded
                            label="18A. Unit/Box Type 1"
                            name="unit18A"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="18B. Unit/Box Type 2"
                            name="unit18B"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="18C. Unit/Box Type 3"
                            name="unit18C"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="18D. Unit/Box Type 4"
                            name="unit18D"
                          />
                        </div>
                      </div>

                      {/* new row */}
                      <div className="row mt-2">
                        <div className="col-12 col-lg-3  mt-2">
                          <Inputfielded
                            label="18E. Box Type 1 Vol. Wt."
                            name="vol18E"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="18F. Box Type 2 Vol. Wt."
                            name="vol18F"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="18G. Box Type 3 Vol. Wt."
                            name="vol18G"
                          />
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                          <Inputfielded
                            label="18H. Box Type 4 Vol. Wt."
                            name="vol18H"
                          />
                        </div>
                      </div>

                      {/* variation Name */}
                      <div className="row mt-2">
                        <div className="col-3  mt-2">
                          <Inputfielded
                            label="19A. Variation 1 Name"
                            name="vari1"
                          />
                        </div>
                        <div className="col-3  mt-2">
                          <Inputfielded
                            label="19B. Variation 2 Name"
                            name="vari2"
                          />
                        </div>
                        <div className="col-3  mt-2">
                          <Inputfielded
                            label="19C. Variation 3 Name"
                            name="vari3"
                          />
                        </div>
                        <div className="col-3  mt-2">
                          <Inputfielded
                            label="19D. Variation 4 Name"
                            name="vari4"
                          />
                        </div>
                      </div>

                      <label className="mt-2">20. Rate Chart</label>
                      <div className="row mt-2">
                        <div className="col-1 mt-2">
                          <Inputfielded label="Min 1" name="minimum1" />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Max 1" name="maximum1" />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Price 1" name="price1" />
                        </div>
                        <div className="col-1 mt-2">
                          <div className="col-12 col-lg-3  mt-2"></div>
                          <label>Free 1</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("free1", true)
                            }
                          />
                        </div>

                        <div className="col-1  mt-2">
                          <Inputfielded label="Min 2" name="minimum2" />
                        </div>
                        <div className="col-1  mt-2">
                          <Inputfielded label="Max 2" name="maximum2" />
                        </div>
                        <div className="col-1  mt-2">
                          <Inputfielded label="Price 2" name="price2" />
                        </div>
                        <div className="col-1 mt-2">
                          <label>Free 2</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("free2", true)
                            }
                          />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Min 3" name="minimum3" />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Max 3" name="maximum3" />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Price 3" name="price3" />
                        </div>
                        <div className="col-1 mt-2">
                          <label>Free 3</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("free3", true)
                            }
                          />
                        </div>
                      </div>
                      <div className="row mt-2"></div>
                      <div className="row mt-2">
                        <div className="col-1  mt-2">
                          <Inputfielded label="Min4" name="minimum4" />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Max 4" name="maximum4" />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Price 4" name="price4" />
                        </div>
                        <div className="col-1 mt-2">
                          <label>Free 4</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("free4", true)
                            }
                          />
                        </div>

                        <div className="col-1  mt-2">
                          <Inputfielded label="Min 5" name="minimum5" />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Max 5" name="maximum5" />
                        </div>
                        <div className="col-1  mt-2">
                          <Inputfielded label="Price 5" name="price5" />
                        </div>
                        <div className="col-1 mt-2">
                          <label>Free 5</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("free5", true)
                            }
                          />
                        </div>
                        <div className="col-1  mt-2">
                          <Inputfielded label="Min 6" name="minimum6" />
                        </div>
                        <div className="col-1 mt-2">
                          <Inputfielded label="Max 6" name="maximum6" />
                        </div>
                        <div className="col-1  mt-2">
                          <Inputfielded label="Price 6" name="price6" />
                        </div>
                        <div className="col-1 mt-2">
                          <label>Free 6</label>
                          <br />
                          <Switch
                            onChange={(e) =>
                              formik.setFieldValue("free6", true)
                            }
                          />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-3">
                          <label>21A. Image</label>
                          <input
                            type="file"
                            accept="image/*"
                            className={`form-control shadow-none ${
                              formik.touched.imgs1 &&
                              formik.errors.imgs1 &&
                              "is-invalid"
                            }`}
                            name="img"
                            placeholder="Image"
                            onChange={(e) =>
                              formik.setFieldValue("imgs1", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            component="div"
                            name="imgs1"
                            className="error"
                          />
                        </div>
                        <div className="col-3 ">
                          <label>21B. Image</label>
                          <input
                            type="file"
                            accept="image/*"
                            className={`form-control shadow-none ${
                              formik.touched.imgs2 &&
                              formik.errors.imgs2 &&
                              "is-invalid"
                            }`}
                            name="imgs2"
                            placeholder="Image"
                            onChange={(e) =>
                              formik.setFieldValue("imgs2", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            component="div"
                            name="imgs2"
                            className="error"
                          />
                        </div>
                        <div className="col-3 ">
                          <label>21C. Image</label>
                          <input
                            type="file"
                            accept="image/*"
                            className={`form-control shadow-none ${
                              formik.touched.imgs3 &&
                              formik.errors.imgs3 &&
                              "is-invalid"
                            }`}
                            name="imgs3"
                            placeholder="Image"
                            onChange={(e) =>
                              formik.setFieldValue("imgs3", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            component="div"
                            name="imgs3"
                            className="error"
                          />
                        </div>
                        <div className="col-3 ">
                          <label>21D. Image</label>
                          <input
                            type="file"
                            accept="image/*"
                            className={`form-control shadow-none ${
                              formik.touched.imgs4 &&
                              formik.errors.imgs4 &&
                              "is-invalid"
                            }`}
                            name="imgs4"
                            placeholder="Image"
                            onChange={(e) =>
                              formik.setFieldValue("imgs4", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            component="div"
                            name="imgs4"
                            className="error"
                          />
                        </div>
                      </div>

                      {/* file upload  */}
                      <div className="row mt-3">
                        <div className="col-3">
                          <label>22A. File</label>
                          <input
                            type="file"
                            accept=".pdf"
                            className={`form-control shadow-none ${
                              formik.touched.file1 &&
                              formik.errors.file1 &&
                              "is-invalid"
                            }`}
                            name="file1"
                            placeholder="Image"
                            onChange={(e) =>
                              formik.setFieldValue("file1", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            component="div"
                            name="file1"
                            className="error"
                          />
                        </div>
                        <div className="col-3 ">
                          <label>22B. File</label>
                          <input
                            type="file"
                            accept=".pdf"
                            className={`form-control shadow-none ${
                              formik.touched.file2 &&
                              formik.errors.file2 &&
                              "is-invalid"
                            }`}
                            name="file2"
                            placeholder="Image"
                            onChange={(e) =>
                              formik.setFieldValue("file2", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            component="div"
                            name="file2"
                            className="error"
                          />
                        </div>
                        <div className="col-3 ">
                          <label>22C. File</label>
                          <input
                            type="file"
                            accept=".pdf"
                            className={`form-control shadow-none ${
                              formik.touched.file3 &&
                              formik.errors.file3 &&
                              "is-invalid"
                            }`}
                            name="img"
                            placeholder="Image"
                            onChange={(e) =>
                              formik.setFieldValue("file3", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            component="div"
                            name="file3"
                            className="error"
                          />
                        </div>
                        <div className="col-3 ">
                          <label>22D. File</label>
                          <input
                            type="file"
                            accept="/.pdf"
                            className={`form-control shadow-none ${
                              formik.touched.file4 &&
                              formik.errors.file4 &&
                              "is-invalid"
                            }`}
                            name="img"
                            placeholder="Image"
                            onChange={(e) =>
                              formik.setFieldValue("file4", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            component="div"
                            name="file4"
                            className="error"
                          />
                        </div>
                      </div>
                      <br />

                      <Inputfielded
                        label="Buyer Excluded Pincodes"
                        name="excpins"
                      />

                      <Inputfielded label="SEO Title" name="seotitle" />

                      <Inputfielded label="SEO Description" name="seodesc" />

                      <Inputfielded label="SEO Tags" name="seotags" />

                      <div className="row">
                        <input
                          type="submit"
                          className="btn mt-4 rounded-3 w-20 mx-5 btn-lg btn-outline-secondary btn-dark"
                          value="Submit"
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              {/* formik form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
