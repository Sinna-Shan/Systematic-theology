/* eslint-disable react/prop-types */
function Fact({ icon: Icon, children }) {
  const className = "text-5xl m-3 text-amber-500 sm:mb-4 lg:text-6xl lg:m-6 group-hover:scale-110 ease-linear duration-200";
  return (
    <div
      className=" group mb-3 border border-amber-500 rounded-xl p-2 mx-2 bg-slate-900 shadow-sm md:px-4 lg:px-6 lg:pb-6"
      data-aos="zoom-in"
    >
      <Icon className={className} />
      {children}
    </div>
  );
}

export default Fact;
