import React, { useEffect } from "react";
import PropTypes from "prop-types";

//*MODELS
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum.js";

//*CSS
import "../../styles/task.scss";
import { Link } from "react-router-dom";

const TaskComponent = ({ task, complete, remove, id }) => {
  //*STYLES
  const taskCompleted = {
    color: "gray",
    textDecoration: "line-through",
  };

  const taskPending = {
    fontWeight: "bold",
    color: "tomato",
  };

  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    /**
     * *function that return a badge
     * *depending on the level of the task
     */
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-info text-dark">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-warning text-dark">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-danger text-dark">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  /**
   * *function that returns an icon depending on task completion
   */
  function taskIsCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-on icon-pointer"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-off icon-pointer"
          style={{ color: "gray" }}
        ></i>
      );
    }
  }
  console.log(id);
  return (
    <tr
      className="`fw-normal` task-pending"
      style={task.completed ? taskCompleted : taskPending}
    >
      <th>
        <Link
          to={"/task/" + id.toString()}
          style={task.completed ? taskCompleted : taskPending}
        >
          <span className="m-2"> {task.name} </span>
        </Link>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/* execution of function to return badge element
         */}
        <span>{taskLevelBadge()}</span>
      </td>
      <td className="align-middle">
        {taskIsCompletedIcon()}
        <i
          onClick={() => remove(task)}
          className="bi-trash icon-pointer"
          style={{ color: "tomato", fontSize: "1.3rem" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
