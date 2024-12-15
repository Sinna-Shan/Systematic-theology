/* eslint-disable react/prop-types */
function Heading({ type, children }) {
  if (type === "h1") return <h1 className="">{children}</h1>;
  if (type === "h2") return <h2 className="">{children}</h2>;
  if (type === "h3") return (
    <h3 className="py-2 text-lg font-bold text-gray-100 sm:text-xl sm:py-3 md:text-2xl lg:text-3xl lg:py-4">
      {children}
    </h3>
  );
}

export default Heading;
