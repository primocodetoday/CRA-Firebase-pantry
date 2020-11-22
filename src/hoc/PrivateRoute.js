﻿/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...restProps }) => {
  const auth = useSelector((state) => state.firebase.auth);

  return <Route {...restProps} render={(props) => (auth.uid ? <Component {...props} /> : <Redirect to="/signin" />)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PrivateRoute;