"use client";
import React, { useState } from "react";
import loginsvg from "../../assets/addtask.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";

import { toast } from "react-toastify";

export const metadata = {
  title: "Add Task: Work Manager",
};
const AddTask = () => {
  document.title= metadata.title;
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "",
  });
  const handleTask = async (e) => {
    e.preventDefault();
    //validate task data
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("your task is added", {
        position: "top-center",
      });
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="  col-span-6 col-start-4 p-5">
        <div className="my-8 flex justify-center">
          <Image
            src={loginsvg}
            style={{
              width: "50%",
            }}
            alt="Add task"
          />
        </div>
        <h1 className="text-3xl text-center">Add Your Task </h1>

        <form action="#!" onSubmit={handleTask}>
          {/* task title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium  mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className=" w-full p-3 rounded-lg bg-gray-600 focus:ring-white border-black"
              id="task_title"
              name="task_title"
              onChange={(e) => {
                setTask({
                  ...task,
                  title: e.target.value,
                });
              }}
              value={task.title}
            />
          </div>

          {/* task content */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium  mb-2"
            >
              Content
            </label>
            <textarea
              type="text"
              className=" w-full p-3 rounded-lg bg-gray-600 focus:ring-white border-black"
              id="task_content"
              rows={6}
              name="task_content"
              onChange={(e) => {
                setTask({
                  ...task,
                  content: e.target.value,
                });
              }}
              value={task.content}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label htmlFor="task_status" className="block ">
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-lg bg-gray-600 focus:ring-white border-black"
              name="task_status"
              onChange={(e) => {
                setTask({
                  ...task,
                  status: e.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>

          {/* Button for submitt and cancle */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-green-500"
            >
              Add Task
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-400 ms-3">
              Cancle
            </button>
          </div>
          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
