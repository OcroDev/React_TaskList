import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const TaskDetailPage = ({ task }) => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Task Detail - {parseInt(params.id) + 1}</h1>
      <h2>{task.name}</h2>
      <h3>{task.description}</h3>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => navigate("/tasks")}
      >
        Close Task
      </button>
    </div>
  );
};
