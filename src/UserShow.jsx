const UserShow = () => {
  const userTypes = [
    {
      title: 'Developers',
      description: 'Unlock enhanced collaboration and task management tailored for software development teams.',
    },
    {
      title: 'Corporate Professionals',
      description: 'Efficiently manage your tasks and projects in a corporate environment, enhancing productivity.',
    },
    {
      title: 'Bankers',
      description: 'Streamline your financial tasks and projects with a dedicated platform designed for banking professionals.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Who Can Benefit?</h2>
        <div className="flex ">
          {userTypes.map((userType, index) => (
            <div key={index} className="p-4 mx-2 my-2 bg-white rounded shadow-md">
              <p className="text-lg font-semibold">{userType.title}</p>
              <p className="text-gray-600">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserShow;
