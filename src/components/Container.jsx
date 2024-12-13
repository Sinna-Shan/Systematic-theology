/* eslint-disable react/prop-types */
function Container({ children }) {
  return (
    <div className="bg-slate-700 overflow-hidden mt-3 px-2 py-3 rounded-md sm:px-3 sm:py-4 sm:text-lg lg:text-2xl lg:leading-8">
      {children}
    </div>
  );
}

export default Container;
