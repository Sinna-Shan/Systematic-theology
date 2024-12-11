/* eslint-disable react/prop-types */
import { Link} from "react-router-dom";

function Books({ values }) {
    return (
      <section
        className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="zoom-in"
      >
        {values.map((el, i) => {
          return (
            <div
              key={i}
              className="bg-cover bg-center rounded-md border border-black shadow-md lg:hover:scale-105 ease-linear duration-200"
              style={{ backgroundImage: `url('${el.img}')` }}
            >
              <div className="bg-clip-padding backdrop-filter backdrop-blur-sm px-8 bg-opacity-70 bg-slate-700 w-full rounded-md h-full flex items-center justify-end flex-col shadow-md border border-black">
                <img
                  src={el.img}
                  alt={el.link}
                  className=" h-48 rounded-md shadow-md shadow-gray-800 border border-gray-800 overflow-hidden flex items-center object-cover object-center mt-6"
                />

                <span className="text-2xl mt-6 font-bold backdrop-filter bg-opacity-0 rounded-md backdrop-blur-md text-amber-400 bg-gray-100 px-3 py-1.5 flex items-center justify-center">
                  {el.title}
                </span>
                <Link
                  to={el.link}
                  className=" bg-slate-900 px-6 py-3 rounded-full mt-6 mb-6"
                >
                  view more
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    );
}

export default Books
