import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Create React Task Management App",
      description: "Build a task management platform using React",
      deadline: "2023-01-31",
      priority: "high",
      status: "todo",
    },
    {
      id: "2",
      title: "Implement Drag-and-Drop",
      description: "Add drag-and-drop functionality for task lists",
      deadline: "2023-02-15",
      priority: "moderate",
      status: "ongoing",
    },
    {
      id: "3",
      title: "Add Authentication",
      description: "Implement user authentication and authorization",
      deadline: "2023-03-01",
      priority: "high",
      status: "completed",
    },
    {
      id: "4",
      title: "Add Autfnfjsbfhentication",
      description: "Implement user authentication and authorization",
      deadline: "2023-03-01",
      priority: "high",
      status: "completed",
    },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const taskId = result.draggableId;
    const destinationListId = result.destination.droppableId;

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
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
