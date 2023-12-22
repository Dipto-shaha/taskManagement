import { Draggable, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TaskList = ({ title, tasks,handletaskDelete }) => {
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
            <Draggable key={task._id} draggableId={task._id} index={index}>
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  className="p-2 mb-2 bg-white rounded-md"
                >
                  <p className="font-semibold">{task.title}</p>
                  <p className="text-gray-600">{task.description}</p>
                  <div className='flex justify-between my-5'>
                    <Link to={`/dashboard/update/${task._id}`}><button className='btn bg-[#00cf5d] text-[#FFF]'> Update</button></Link>
                    <button className='btn bg-[#ff715b] text-[#FFF]' onClick={()=>handletaskDelete(task._id)}> Delete</button>
                  </div>
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
    handletaskDelete:PropTypes.func.isRequired
  };
export default TaskList;
