import { Draggable, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

const TaskList = ({ title, tasks }) => {
  return (
    <Droppable droppableId={title.toLowerCase()} type="task">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="p-4 border rounded-md bg-gray-100"
        >
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  className="p-2 mb-2 bg-white rounded-md"
                >
                  <p className="font-semibold">{task.title}</p>
                  <p className="text-gray-600">{task.description}</p>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};



TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        deadline: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default TaskList;
