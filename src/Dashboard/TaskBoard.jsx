import { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { AuthContest } from "../Context";
import axios from "axios";

const TaskBoard = () => {
  const { user } = useContext(AuthContest);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
  
    axios
      .get(`http://localhost:5000/tasklist?email=${user.email}`)
      .then((response) => {
        setTasks(response.data);
        console.log(response.data);
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
      .put(`http://localhost:5000/updateStatus`, {
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 mt-8 gap-10">
        <TaskList
          title="ToDo"
          tasks={tasks.filter((task) => task.status === "todo")}
        />
        <TaskList
          title="Ongoing"
          tasks={tasks.filter((task) => task.status === "ongoing")}
        />
        <TaskList
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
        />
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
