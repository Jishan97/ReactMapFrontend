import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/ui/Header';

const PrivateRoute = ({
  component: Component,
  // auth: { isAuth, loading },
}) => {


  if (localStorage.getItem('token')) {
    // console.log('<<<<<<<< private route 1>>>>>>>>');
    return (
        <>
          <Header title={'Blood test center'}/>
          <Component/>
        </>
      )
  } else {
    // console.log('<<<<<<<< private route 2>>>>>>>>');
    return <Navigate to='/login' />;
  }
};



export default PrivateRoute;
