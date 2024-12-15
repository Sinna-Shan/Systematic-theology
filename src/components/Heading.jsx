/* eslint-disable react/prop-types */
function Heading({ type, children }) {
  if (type === "h1") return (
    <h1 className="py-4 text-4xl font-bold text-amber-500 sm:text-5xl sm:py-6 md:text-6xl md:py-8 lg:text-7xl lg:py-10">
      {children}
    </h1>
  );
  if (type === "h2") return (
    <h2 className="text-amber-300 my-3 text-xl border rounded-md py-2 bg-gray-700 sm:text-2xl sm:my-6 sm:py-3 md:text-3xl md:my-8 md:py-4 lg:text-4xl lg:my-10 lg:py-5">
      {children}
    </h2>
  );
  if (type === "h3") return (
    <h3 className="py-2 text-lg font-bold text-gray-100 sm:text-xl sm:py-3 md:text-2xl lg:text-3xl lg:py-4">
      {children}
    </h3>
  );
}

export default Heading;
