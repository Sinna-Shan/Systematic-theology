/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBookJournalWhills } from "react-icons/fa6";

function BookRenderer({ values }) {
  const [viewBookDetails, setViewBookDetails] = useState(false);
  const [index, setIndex] = useState(null);

  function handleClick(i) {
    if (i !== index) {
      setViewBookDetails(false);
    }
    setViewBookDetails((show) => !show);
    setIndex(i);
  }
  return (
    <section
      className={`flex flex-wrap gap-2 items-center justify-center bg-gray-900 py-12 px-4 sm:gap-3 lg:gap-4`}
    >
      {values?.map((book, i) => {
        return (
          <div
            key={i}
            className={`bg-slate-800 p-3 min-w-56 rounded-md flex flex-col text-gray-300 ${
              i === index && viewBookDetails ? "w-full" : ""
            } sm:min-w-64 lg:min-w-96`}
          >
            {i === index && viewBookDetails ? (
              <>
                <div className="flex gap-4 items-center">
                  <FaBookJournalWhills className="mb-4 mt-2 text-5xl text-amber-500" />
                  <div className="flex flex-col items-left justify-center">
                    <h3 className="text-3xl sm:text-4xl">{book.book}</h3>
                    {book.chapters && (
                      <p className="text-base mt-2 pb-4 sm:text-lg">
                        පරිච්ඡේද : {book.chapters}
                      </p>
                    )}
                  </div>
                </div>
                {book.content}
              </>
            ) : (
              <div>
                <FaBookJournalWhills className="mb-4 mt-2 text-3xl text-amber-500 sm:text-4xl lg:text-5xl lg:mb-6" />
                <h3 className="text-3xl sm:text-4xl sm:pb-2 lg:text-5xl">
                  {book.book}
                </h3>
                {book.chapters && (
                  <p className="text-base pb-6 sm:text-lg lg:text-2xl lg:mt-4">
                    පරිච්ඡේද : {book.chapters}
                  </p>
                )}
              </div>
            )}

            <div className="flex items-center justify-center w-full mt-4 ">
              <button
                className=" bg-gray-900 text-gray-100 rounded-full py-3 px-6 text-sm lg:text-lg lg:w-72 lg:my-6 hover:bg-transparent hover:shadow-[inset_0px_0px_0px_2px_#fbbf24] hover:text-amber-400 ease-linear duration-300 "
                onClick={() => handleClick(i)}
              >
                {!(i === index && viewBookDetails)
                  ? "More Details"
                  : "Less Details"}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default BookRenderer;
