import React from "react";
import { useLocation } from "react-router-dom";

const Provider = (props) => {

  const location = useLocation();
  const successMessage = location.state?.successMessage || '';

  return (
    <div className="py-5">
      <div className="container">
        {successMessage &&
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        }
        <div className="row">
          <h1>Provider</h1>
        </div>
      </div>
    </div>
  );
};

export default Provider;