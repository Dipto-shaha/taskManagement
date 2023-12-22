const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row px-5">
      <div className="w-2/3 p-20">
        <p className="mx-2 text-4xl font-bold">
          Empower Your Productivity with Easy
          <span className="text-[#ff715b]">Plan</span> – Where Tasks Meet
          Efficiency
        </p>
        <p>
          Welcome to EasyPlan, your ultimate task management solution.
          Streamline your workflow, stay organized, and boost productivity.
          Effortlessly manage your tasks, set priorities, and achieve your goals
          with our intuitive and user-friendly platform. Join us in simplifying
          your day-to-day tasks for a more productive and stress-free life.
        </p>
        <button className="btn">Let&apos;s Explore</button>
      </div>
      <div className="w-1/3 h-80">
        <img
          className="w-full h-full"
          src="https://i.ibb.co/frY8cKL/1-Xsq-J4-Wo-Cr-Bbp2-XI2g-Fw-VA.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
