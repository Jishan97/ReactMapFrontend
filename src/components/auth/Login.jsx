import React, { useEffect, useState } from "react";
import { useFormik, Formik } from "formik";
// LoadingButton
import FormContainer from "./FormContainer";
import "./Register.css";
// import { ToastContainer, toast } from 'react-toastify';

import { Link, useNavigate } from "react-router-dom";

import { connect, useSelector } from "react-redux";

// import { startLoginUser } from "../../redux/actions/userAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import LoadingButton from "@mui/lab/LoadingButton";
import { Typography } from "@mui/material";
import { startLoginUser } from "../../redux/action/userActions";
const eye = <FontAwesomeIcon icon={faEye} />;

const LoginComponent = (props) => {
    let navigate = useNavigate();

  const [customToast, setCustomToast] = useState(null);


  const user = useSelector((state) => state.user);
  
  console.log('user from login', user)
  const {isLoggedIn} = user;
 

  useEffect(() => {

    if (localStorage.getItem('token')) {
      navigate('/home')
    }
  }, [])

  const [passwordShown, setPasswordShown] = useState(false);

  // // const history = unstable_HistoryRouter();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          } else if (!values.email) {
            errors.email = "*";
          } else if (!values.password) {
            errors.password = "*";
          } else if (values.password.length < 6) {
            errors.password = "Length should be greater than 8";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values)
          setCustomToast(null);
          const errorRedirect = (e) => {
            setCustomToast(e)
          }
          const redirect = () => {
            navigate("/home");
          };

          setSubmitting(false);

          props.dispatch(startLoginUser(values, redirect, errorRedirect));
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <FormContainer>
              
              <Typography sx={{ color: 'red' }}>{customToast}</Typography>

              <div className="input-section">
                <div>
                  <div className="welcome-text">Welcome Back!</div>
                  <div className="welcome-text" style={{ color: "#5C727D" }}>
                    Live the experience
                  </div>
                </div>
                
                <div className="input-form">
                  <div>
                    <div>
                      <label className="form-label">
                        Email
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
                  <div style={{ textAlign: "center" }}>
 
                    <LoadingButton
                      size="small"
                      className="submit-btn"
                      type="submit"
                    //   loading={loading}
                      variant="outlined"
                      disabled={isSubmitting}
                    >
                      Submit
                    </LoadingButton>
                  </div>
                  <div>

                    <div className="bottom-text">
                      <Link to="/forgotPassword" className="login-link">
                        Forgot Password?{" "}
                      </Link>{" "}
                      <br />
                      Not Account Yet?{" "}
                      <Link to="/register" className="login-link">
                        Register{" "}
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


export default connect()(LoginComponent);
