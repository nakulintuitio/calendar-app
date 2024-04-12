import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../containers/Layout";

const PrivateRoute = ({ element, auth = null }) => {
  return auth ? <Layout children={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
