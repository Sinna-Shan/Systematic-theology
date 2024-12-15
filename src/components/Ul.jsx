/* eslint-disable react/prop-types */
function Ul({ values }) {
  return (
    <ul className="flex w-full flex-wrap my-4 gap-2 text-sm sm:text-base sm:leading-6 lg:text-lg lg:my-6">
      {values.map((value, i) => {
        return (
          <li className="bg-amber-600 p-2 text-base rounded-md sm:p-3 text-gray-900 font-black lg:text-xl" key={i}>
            {value}
          </li>
        );
      })}
    </ul>
  );
}

export default Ul;
