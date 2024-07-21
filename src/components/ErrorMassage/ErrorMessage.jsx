import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = ({ message = "Sorry, an error occurred, please try again later" }) => {
  return (
    <p className="errorMessage">{message}</p> /
  );
};

export default ErrorMessage;