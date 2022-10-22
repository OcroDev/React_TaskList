/**
 * *form to create new tasks
 */

import React, { useRef } from "react";
import PropTypes from "prop-types";

//*Models /
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
  //*STYLES
  const normalStyle = {
    backgroundColor: "#0dcaf0",
    fontWeight: "bold",
    color: "white",
  };
  const urgentStyle = {
    backgroundColor: "#ffc107",
    fontWeight: "bold",
    color: "white",
  };
  const blockingStyle = {
    backgroundColor: "#dc3545",
    fontWeight: "bold",
    color: "white",
  };

  //*referencias al html
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  //*Metodos
  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    levelRef.current.value = "";
    add(newTask);
  }

  return (
    <div>
      <h4>Add New Task</h4>
      <form
        action=""
        method="get"
        onSubmit={addTask}
        className="d-flex justify-content-center align-item-center mb-4"
      >
        <div className="form-outline flex-fill form-group">
          <input
            ref={nameRef}
            type="text"
            id="inputName"
            className="form-control form-control-lg mb-3"
            required
            autoFocus
            placeholder="Task Name"
          />

          <input
            ref={descriptionRef}
            type="text"
            id="inputDescription"
            required
            className="form-control form-control-lg mb-3"
            placeholder="Task Description"
          />
          <div className="mb-2">
            <select
              ref={levelRef}
              defaultValue="0"
              id="selectLevel"
              name=""
              className="form-select "
              style={{ color: "gray" }}
              required
            >
              <option value="" style={{ color: "gray" }}>
                Select task priority
              </option>
              <option value={LEVELS.NORMAL} style={normalStyle}>
                Normal
              </option>
              <option value={LEVELS.URGENT} style={urgentStyle}>
                Urgent
              </option>
              <option value={LEVELS.BLOCKING} style={blockingStyle}>
                Blocking
              </option>
            </select>
          </div>
          <button type="submit" className="btn btn-success btn-lg mt-3">
            {length < 1 ? "Create your First task" : "Add New Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
