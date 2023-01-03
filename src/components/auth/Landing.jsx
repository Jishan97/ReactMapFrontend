import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// MUI
import Box from '@mui/material/Box';

// Components
import Spinner from '../ui/Spinner';
import { useSelector } from 'react-redux';

const Landing = (props) => {
    const user = useSelector((state) => state.user);
    const { loading, isLoggedIn } = user;

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {loading && <Spinner />}
      {isLoggedIn ? (
        <Navigate to='/home' />
      ) : (
        <Navigate to='/login' />
      )}
    </Box>
  );
};

Landing.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};


export default connect()(Landing);
