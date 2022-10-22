import React from "react";

//Material UI
import Textfield from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Button, MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";

//formik
import { useFormik } from "formik";
import * as yup from "yup";

//models
// todo import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

export const TaskFormik = () => {
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
      taskLevel: LEVELS.NORMAL,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h4 className='m-auto'>Add new task</h4>
      <form
        onSubmit={formik.handleSubmit}
        className='d-flex justify-content-center align-item-center mb-4'
      >
        <div className='form-outline flex-fill form-group mt-2'>
          <Textfield
            fullWidth
            id='taskName'
            name='taskName'
            label='TaskName'
            type='text'
            value={formik.values.taskName}
            className='mb-4'
          ></Textfield>

          <Textfield
            fullWidth
            id='taskDescription'
            name='taskDescription'
            label='taskDescription'
            type='text'
            value={formik.values.taskDescription}
            className='mb-4'
          ></Textfield>
          <FormControl fullWidth>
            <InputLabel id='priority-label'>Priority</InputLabel>
            <Select
              labelId='priorit-label'
              id='priority'
              name='priority'
              label='Priority'
              defaultValue=''
              className='mb-4'
            >
              <MenuItem value={LEVELS.NORMAL}>Normal</MenuItem>
              <MenuItem value={LEVELS.BLOCKING}>Urgent</MenuItem>
              <MenuItem value={LEVELS.URGENT}>Blocking</MenuItem>
            </Select>
          </FormControl>

          <Button type='submit' variant='outlined'>
            Add Task
          </Button>
        </div>
      </form>
    </div>
  );
};
