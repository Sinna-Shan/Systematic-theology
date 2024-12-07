/* eslint-disable react/prop-types */
function Ul({ values }) {
  return (
    <ul className="flex w-full flex-wrap mt-4 gap-2 text-sm sm:text-base sm:leading-6 lg:text-lg lg:mt-6">
      {values.map((value, i) => {
        return (
          <li className="bg-amber-600 p-2 rounded-md sm:p-3 text-gray-900 font-black" key={i}>
            {value}
          </li>
        );
      })}
    </ul>
  );
}

export default Ul;
