import { useState } from "react";

/* eslint-disable react/prop-types */
function Header({ title, subTitle, values, content, extras }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="w-full bg-neutral-900 backdrop-filter backdrop-blur-lg bg-opacity-90 p-3 rounded-md text-center text-white my-6 border border-gray-700 shadow-md shadow-gray-900 md:px-4">
        <h1 className="text-xl sm:text-2xl lg:text-4xl lg:leading-relaxed">
          <span className="text-amber-200 text-4xl lg:text-7xl">{title}</span>{" "}
          <br />
          {subTitle}
        </h1>

        <section className="flex flex-wrap gap-2 items-center justify-center mt-6 lg:mt-12 lg:gap-3">
          {values?.map((book, i) => {
            return (
              <div
                key={i}
                className="bg-amber-400 p-2 rounded-md text-slate-800 font-bold sm:text-lg lg:text-2xl lg:p-3"
              >
                {book.book}
              </div>
            );
          })}
        </section>

        <p className="leading-8 mt-6 text-lg text-slate-100 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-10">
          {content}
        </p>

        {show && { ...extras }}

        {extras && (
          <button
            onClick={() => setShow((show) => !show)}
            className="my-4 bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full sm:my-5 md:my-6 lg:text-lg lg:px-8 lg:py-4 lg:my-8"
          >
            {!show ? "Read more" : "Read less"}
          </button>
        )}
      </section>
    </>
  );
}

export default Header;
