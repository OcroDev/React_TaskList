import React from "react";

//Material UI
import Textfield from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Button, MenuItem, FormControl, Alert } from "@mui/material";
import PropTypes from "prop-types";

//formik
import { useFormik } from "formik";
import * as yup from "yup";

//models
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

export const TaskFormik = ({ add, length }) => {
  const validationSchema = yup.object().shape({
    taskName: yup
      .string()
      .min(6, "Task name too short")
      .max(24, "Task name too long")
      .required("Task Name is required"),
    taskDescription: yup
      .string()
      .min(6, "Task Description too short")
      .required("Task descripition is required"),
    taskLevel: yup.string().required("Task level is required"),
  });

  const formik = useFormik({
    initialValues: {
      taskName: "",
      taskDescription: "",
      taskLevel: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        addTask(values);
      }, 2000);
    },
  });
  //*Metodos
  function addTask(values) {
    const newTask = new Task(
      values.taskName,
      values.taskDescription,
      false,
      values.taskLevel
    );

    values.taskName = "";
    values.taskDescription = "";
    values.taskLevel = "";
    formik.setSubmitting(false);

    add(newTask);
  }

  return (
    <div>
      <h4 className="m-auto">Add new task</h4>
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex justify-content-center align-item-center mb-4"
      >
        <div className="form-outline flex-fill form-group mt-2">
          <Textfield
            fullWidth
            id="taskName"
            name="taskName"
            label="TaskName"
            type="text"
            value={formik.values.taskName}
            onChange={formik.handleChange}
            error={formik.touched.taskName && Boolean(formik.errors.taskName)}
            helperText={formik.touched.taskName && formik.errors.taskName}
            className="mb-4"
          ></Textfield>

          <Textfield
            fullWidth
            id="taskDescription"
            name="taskDescription"
            label="taskDescription"
            type="text"
            value={formik.values.taskDescription}
            onChange={formik.handleChange}
            error={
              formik.touched.taskDescription &&
              Boolean(formik.errors.taskDescription)
            }
            helperText={
              formik.touched.taskDescription && formik.errors.taskDescription
            }
            className="mb-4"
          ></Textfield>
          <FormControl fullWidth>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priorit-label"
              id="taskLevel"
              name="taskLevel"
              label="Priority"
              value={formik.values.taskLevel}
              onChange={formik.handleChange}
              className="mb-4"
              error={
                formik.touched.taskLevel && Boolean(formik.errors.taskLevel)
              }
              helperText={formik.touched.taskLevel && formik.errors.taskLevel}
            >
              <MenuItem value="">Select priority</MenuItem>
              <MenuItem value={LEVELS.NORMAL}>Normal</MenuItem>
              <MenuItem value={LEVELS.BLOCKING}>Urgent</MenuItem>
              <MenuItem value={LEVELS.URGENT}>Blocking</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="outlined">
            Add Task
          </Button>
          {formik.isSubmitting ? (
            <Alert severity="info">Creating Task, please wait...</Alert>
          ) : null}
        </div>
      </form>
    </div>
  );
};

TaskFormik.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};
