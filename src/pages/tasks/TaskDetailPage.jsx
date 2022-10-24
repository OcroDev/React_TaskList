import React from "react";
import { useParams } from "react-router-dom";

export const TaskDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Task Detail - {id}</h1>;
    </div>
  );
};
