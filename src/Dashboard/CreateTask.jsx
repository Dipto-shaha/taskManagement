import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContest } from "../Context";
import { toast } from "react-toastify";

const CreateTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContest);

  const handleFormSubmit = (data) => {
    const taskInfo = { ...data, status: "todo", email: user.email };
    console.log(data);
    // Reset the form after submission
    fetch("https://to-do-list-server-brown.vercel.app/addtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast.success("Task Added Successfully");
      });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="max-w-md mx-auto my-8 border-2 p-5 rounded-lg border-[#7ec6d5]"
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

      <button type="submit" className="bg-[#ff715b] text-white px-5 py-2 items-center rounded-md">
        Create Task
      </button>
    </form>
  );
};

export default CreateTask;
