import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./FormContainer.css";

const FormContainer = (props) => {
  return (
    <div className="form-section">
      <Grid container>
        <Grid item md={7} lg={7}>
          <div className="left-section">
            {/* <div className="overley"></div> */}
            <div className="text-overley" >
              <div className="logo">
                <h1>
                  <Link className="logo-link" to="/">Blood Test</Link>
                </h1>
              </div>
              <div className="mid-section">
                <div className="text" >Find nearby blood test center and book apppointment</div>
              </div>
              <div className="bottom-text">
                <div>
                  {/* <Link className="link-style" to="/">Home</Link> */}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={12} md={5} lg={5}>
          <div className="right-section">{props.children}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormContainer;
