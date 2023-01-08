import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Header = (props) => {
  let navigate = useNavigate();


  const handleLogout = ()=>{
    //clear local storage 
    localStorage.clear('token')
    // redirect to login page
    navigate("/login");

  }
  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        style={{
          // position: "fixed",
          height:'4rem',
          top: 0,
          left: 0,
          margin: 0,
          background: "#273c75",
        }}
      >
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex" }}>

          <Link to="/home" style={{textDecoration:'none', color:'white',margin:'1rem'}}>
          <Typography  sx={{ flexGrow: 1, fontSize:{xs:'0.7rem',sm:'0.8rem', md:'0.9rem', lg:'1.2rem' } }}>
            {props.title}
          </Typography>
          </Link>


          <Link to="/map" style={{textDecoration:'none', color:'white',margin:'1rem'}}>
          <Typography  sx={{ flexGrow: 1, fontSize:{xs:'0.7rem',sm:'0.8rem', md:'0.9rem', lg:'1.2rem' } }}>
              Map
          </Typography>
          </Link>


          <Link to="/clinics" style={{textDecoration:'none', color:'white',margin:'1rem'}}>
          <Typography  sx={{ flexGrow: 1, fontSize:{xs:'0.7rem',sm:'0.8rem', md:'0.9rem', lg:'1.2rem' } }}>
              Clinics
          </Typography>
          </Link>

          <Link to="/bookings" style={{textDecoration:'none', color:'white',margin:'1rem'}}>
          <Typography  sx={{ flexGrow: 1, fontSize:{xs:'0.7rem',sm:'0.8rem', md:'0.9rem', lg:'1.2rem' } }}>
              Bookings
          </Typography>
          </Link>

          <Link to="/users" style={{textDecoration:'none', color:'white',margin:'1rem'}}>
          <Typography  sx={{ flexGrow: 1, fontSize:{xs:'0.7rem',sm:'0.8rem', md:'0.9rem', lg:'1.2rem' } }}>
              Users
          </Typography>
          </Link>
          
          <Link to="/reports" style={{textDecoration:'none', color:'white',margin:'1rem'}}>
          <Typography  sx={{ flexGrow: 1, fontSize:{xs:'0.7rem',sm:'0.8rem', md:'0.9rem', lg:'1.2rem' } }}>
              Reports
          </Typography>
          </Link>

          </Box>
          
          <Button onClick={handleLogout} sx={{color:'white', fontSize:{xs:'0.7rem',sm:'0.8rem', md:'1rem', lg:'1rem' } }} color="error" variant="contained">Logout</Button>
        </Toolbar>

        

      </AppBar>
      
      {/* <Toolbar /> */}
    </>
  );
};

export default connect()(Header);
