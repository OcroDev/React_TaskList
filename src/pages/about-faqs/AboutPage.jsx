import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("we are in the Route:", location.pathname); //about / faqs

  const navigation = (path) => {
    navigate(path);
  };
  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <div>
      <h1>About | FAQs Page</h1>
      <button className="btn btn-info btn-sm" onClick={() => navigation("/")}>
        Go to home
      </button>
      <button className="btn btn-warning btn-sm" onClick={() => goBack()}>
        Go Back
      </button>
      <button className="btn btn-warning btn-sm" onClick={() => goForward()}>
        Go Forward
      </button>
    </div>
  );
};
