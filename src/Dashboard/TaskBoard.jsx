import { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { AuthContest } from "../Context";
import axios from "axios";
import { toast } from "react-toastify";

const TaskBoard = () => {
  const { user } = useContext(AuthContest);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://to-do-list-server-brown.vercel.app/tasklist?email=${user.email}`
      )
      .then((response) => {
        setTasks(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, [user, setTasks]);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const taskId = result.draggableId;
    const destinationListId = result.destination.droppableId;
    axios
      .put(`https://to-do-list-server-brown.vercel.app/updateStatus`, {
        id: taskId,
        status: destinationListId,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
    console.log(taskId, destinationListId);
    const updatedTasks = tasks.map((task) => {
      if (task._id === taskId) {
        return { ...task, status: destinationListId };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const handletaskDelete = (id) => {
    axios
      .delete(`https://to-do-list-server-brown.vercel.app/taskdelete/${id}`)
      .then((response) => {
        console.log(response.data);
        toast.success("Task Delted Successfully");
        const updatedTasks = tasks.filter((task) => task._id != id);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 mt-8 gap-10">
        <TaskList
          title="ToDo"
          tasks={tasks.filter((task) => task.status === "todo")}
          handletaskDelete={handletaskDelete}
        />
        <TaskList
          title="Ongoing"
          tasks={tasks.filter((task) => task.status === "ongoing")}
          handletaskDelete={handletaskDelete}
        />
        <TaskList
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
          handletaskDelete={handletaskDelete}
        />
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
