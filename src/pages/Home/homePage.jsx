import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PROFILE_PAGE = "/profile";

export const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Home Page</h1>

      <div>
        <button
          className="btn btn-info btn-sm m-1"
          onClick={() => navigation(PROFILE_PAGE)}
        >
          Go to profile
        </button>
      </div>
    </div>
  );
};
