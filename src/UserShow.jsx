
const UserShow = () => {
    const userTypes = [
        'Developers',
        'Corporate Professionals',
        'Bankers',
      ];
    
      return (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Who Can Benefit?</h2>
            <div className="flex flex-wrap justify-center">
              {userTypes.map((userType, index) => (
                <div key={index} className="p-4 mx-2 my-2 bg-white rounded shadow-md">
                  <p className="text-lg font-semibold">{userType}</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};

export default UserShow;

