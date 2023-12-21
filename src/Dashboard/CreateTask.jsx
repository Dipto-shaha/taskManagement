import { useForm } from 'react-hook-form';

const CreateTask = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    
    console.log(data)
    // Reset the form after submission
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-md mx-auto my-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-semibold text-gray-600">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          {...register('title', { required: 'Title is required' })}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description</label>
        <textarea
          id="description"
          name="description"
          {...register('description')}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="deadline" className="block text-sm font-semibold text-gray-600">Deadline</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          {...register('deadline')}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-sm font-semibold text-gray-600">Priority</label>
        <select
          id="priority"
          name="priority"
          {...register('priority')}
          className="w-full p-2 border rounded-md"
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Create Task</button>
    </form>
  );
};

export default CreateTask;
