import React from 'react'

import { useNavigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;

}

export default ProtectedRoute
