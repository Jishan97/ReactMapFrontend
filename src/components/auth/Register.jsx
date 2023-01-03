import React, { useEffect, useState } from "react";
import { useFormik, Formik } from "formik";
import LoadingButton from '@mui/lab/LoadingButton';
import { connect, useSelector } from "react-redux";
// import { startRegisterUser } from "../../redux/actions/userAction";
import FormContainer from "./FormContainer";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import { startRegisterUser } from "../../redux/action/userActions";


const eye = <FontAwesomeIcon icon={faEye} />;

const RegisterComponent = (props) => {
    let navigate = useNavigate();

  const [customToast, setCustomToast] = useState(null);

//   const user = useSelector((state) => state.user);
//   const { loading } = user;
//   console.log("loading", loading)
//   let history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);

  // // const history = unstable_HistoryRouter();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };




  return (
    <>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "*";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (!values.email) {
            errors.email = "*";
          } else if (!values.password) {
            errors.password = "*";
          } else if(!values.password2){
            errors.password = "*";
          }
          else if (values.password.length < 6) {
            errors.password = "Length should be greater than 6";
          } else if (values.password != values.password2) {
            errors.password = "Password not matched";
          } else if (values.checked != 'accept') {
            errors.checked = "Please indicate that you have read and agree to the Terms and Conditions"
          } else if (!values.checked) {
            errors.checked = "Please indicate that you have read and agree to the Terms and Conditions"
          } 

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          let formData = JSON.stringify(values);
          console.log(formData)

          // values = {"favoriteFood":"ramen","fa
          setSubmitting(false);
          const errorRedirect = (e) => {
            setCustomToast(e)
          }
          const redirect = () => {
            // redirect to home page
            navigate("/login");
          };
          props.dispatch(startRegisterUser(values, redirect, errorRedirect));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormContainer>
            <Typography sx={{ color: 'red' }}>{customToast}</Typography>

              <div className="input-section">
                <div className="input-form">
                  <div>
                    <div>
                      <label className="form-label">
                        Name{" "}
                        {touched.name && errors.name ? (
                          <p style={{ color: "red", margin: 0 }}>{errors.name}</p>
                        ) : null}
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="form-label">
                        Email{" "}
                        {touched.email && errors.email ? (
                          <p style={{ color: "red", margin: 0 }}>
                            {errors.email}
                          </p>
                        ) : null}
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="email"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="form-label">
                        Password
                        {touched.password && errors.password ? (
                          <p style={{ color: "red", margin: 0 }}>
                            {errors.password}
                          </p>
                        ) : null}
                      </label>
                    </div>
                    <div>
                      <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <i onClick={togglePasswordVisiblity}>{eye}</i>
                    </div>
                  </div>

                  <div>
                    <div>
                      <label className="form-label">Confirm Password</label>
                    </div>
                    <div>
                      <input
                        type={passwordShown ? "text" : "password"}
                        name="password2"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>




                  <div>
                    <div>
                      <label className="form-label">
                        Phone{" "}
                       
                      </label>
                    </div>
                    <div>
                      <input
                        type="Number"
                        name="phone"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>



                  <div>
                    <div>
                      <label className="form-label">
                        Address{" "}
                    
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="address"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>




                  <div>
                    <div>
                      <label className="form-label">
                        Gender{" "}
                       
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="gender"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>


                  <div>
                    <div>
                      <label className="form-label">
                        Postcode{" "}
                       
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="postcode"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>



                  <div className="checkBoxFlex">

                    <div>

                      <input
                        style={{ height: '20px' }}
                        type="checkbox" name="checked" value="accept"
                        className="form-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <label className="form-label">

                      I accept terms and condition <span> <a href="/term-condition">click here</a>  </span> </label>

                  </div>
                  {touched.checked && errors.checked ? (
                    <p style={{ color: "red", margin: 0 }}>
                      {errors.checked}
                    </p>
                  ) : null}

                  <div style={{ textAlign: "center" }}>
                    <LoadingButton
                      size="small"
                      className="submit-btn"
                      type="submit"
                    //   loading={loading}
                      variant="outlined"
                    //   disabled={isSubmitting}
                    >
                      Submit
                    </LoadingButton>
                  </div>
                  <div>
                    <div className="bottom-text">
                      Already a member?{" "}
                      <Link to="/login" className="login-link">
                        Login{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </FormContainer>
          </form>
        )}
      </Formik>
    </>
  );
};


// export default RegisterComponent;

export default connect()(RegisterComponent);
