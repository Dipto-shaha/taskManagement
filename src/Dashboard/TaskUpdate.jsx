import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContest } from "../Context";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskUpdate = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { user } = useContext(AuthContest);
  const [status,setStatus]=useState("");
  const {id} =useParams();
  useEffect(() => {
    //console.log(id)
    fetch(`http://localhost:5000/gettask/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("deadline", data.deadline);
        setValue("priority", data.priority);
        setStatus(data.status);
      })
      .catch((error) => {
        console.error("Error fetching task:", error);
      });
  }, [id, setValue]);

  const handleFormSubmit = (data) => {
    const updatedTaskInfo = { ...data, email: user.email,status: status };
    console.log(updatedTaskInfo)
    axios.put(`http://localhost:5000/updatetask/${id}`, { info:updatedTaskInfo})
      .then((res) => {
        console.log(res);
        toast.success("Task Updated Successfully");
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        toast.error("Error updating task. Please try again.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="max-w-md mx-auto my-8"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          {...register("title", { required: "Title is required" })}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-600"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          {...register("description")}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="deadline"
          className="block text-sm font-semibold text-gray-600"
        >
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          {...register("deadline")}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="priority"
          className="block text-sm font-semibold text-gray-600"
        >
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          {...register("priority")}
          className="w-full p-2 border rounded-md"
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Update Task
      </button>
    </form>
  );
};


export default TaskUpdate;
