import React from "react";
import PropsTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TASK_PAGE = "/tasks";
export const ProfilePage = ({ user }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Your profile</h1>
      <button
        onClick={() => navigate(TASK_PAGE)}
        className="btn btn-info btn-sm m-1 "
      >
        Your Tasks
      </button>
      <button onClick={goBack} className="btn btn-info btn-sm m-1">
        Go Back
      </button>
    </div>
  );
};

ProfilePage.PropsTypes = {
  user: PropsTypes.func,
};
