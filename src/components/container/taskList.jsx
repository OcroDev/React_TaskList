import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import "../../styles/taskList.scss";
import { TaskFormik } from "../pure/forms/taskFormik";

const TasklistComponent = () => {
  //*STYLES
  const loadingStyle = {
    color: "grey",
    fontSize: "2rem",
    fontWeight: "bold",
  };
  /**
   * *Tareas
   */
  const defaultTask1 = new Task(
    "Example1",
    "Description1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description3",
    false,
    LEVELS.BLOCKING
  );

  //* estado del componente
  const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  //*control de ciclo de vida del componente
  useEffect(() => {
    console.log("task state has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("task comoponent is going Unmount... ");
    };
  }, [tasks]);

  const completeTask = (task) => {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    //*const [...tempTasks] = tasks; //otra alternativa
    //* const tempTasks = tasks.slice(); //otra alternativa
    tempTasks[index].completed = !tempTasks[index].completed;

    //* we update the state of the component with the new list of tasks and it will update the
    //* iteration of the tasks in order to show the task updated
    setTask(tempTasks);
  };

  const removeTask = (task) => {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTask(tempTasks);
  };

  const addTask = (task) => {
    console.log("adding the new task: ", task);

    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTask(tempTasks);
  };

  /**
   * @returns this return a table with a task list
   */
  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description </th>
            <th scope="col">Priority </th>
            <th scope="col">Actions </th>
          </tr>
        </thead>
        <tbody>
          {/* //? itera sobre una lista de tareas */}
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                id={index}
                task={task}
                complete={completeTask}
                remove={removeTask}
              />
            );
          })}
        </tbody>
      </table>
    );
  };

  let tasksTable;

  tasks.length > 0
    ? (tasksTable = <Table />)
    : (tasksTable = (
        <>
          <h3>There no task to show</h3>
          <h4>Please create one</h4>
        </>
      ));

  return (
    <div>
      <div className="col-12">
        <div className="card ">
          {/* card header */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/*card body (content) */}
          <div
            className="card-body internal-scroll"
            style={{ postion: "reltive", height: "400px" }}
            data-mdb-perfect-scrollbar="true"
          >
            {/*//TODO add loading spinner */}
            {loading ? (
              <p style={loadingStyle}>loading Tasks...</p>
            ) : (
              tasksTable
            )}
          </div>
        </div>
      </div>
      <TaskFormik add={addTask} length={tasks.length} />
    </div>
  );
};

export default TasklistComponent;
