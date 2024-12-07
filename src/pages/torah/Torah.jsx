import { useState } from "react";
import { FaBookJournalWhills } from "react-icons/fa6";
import Genesis from "./components/Genesis";
import Exodus from "./components/Exodus";
import Leviticus from "./components/Leviticus";
import Numbers from "./components/Numbers";
import Deuteronomy from "./components/Deuteronomy";

const books = [
  { book: "උප්පත්ති", chapters: 50, content: <Genesis /> },
  { book: "නික්මයාම", chapters: 40, content: <Exodus /> },
  { book: "ලෙවී කතාව", chapters: 27, content: <Leviticus /> },
  { book: "ගණන් කතාව", chapters: 36, content: <Numbers /> },
  { book: "ද්විතීය කතාව", chapters: 34, content: <Deuteronomy /> },
];
function Torah() {
  const [show, setShow] = useState(false);
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
    <>
      <main
        className="w-full bg-[url('/torah.jpg')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
      >
        <section className="w-full bg-neutral-900 backdrop-filter backdrop-blur-lg bg-opacity-90 p-3 rounded-md text-center text-white my-6 border border-gray-700 shadow-md shadow-gray-900 md:px-4">
          <h1 className="text-xl sm:text-2xl lg:text-4xl lg:leading-relaxed">
            <span className="text-amber-200 text-5xl lg:text-7xl">ටෝරා</span> <br />
            (පංච පුස්තකය)
          </h1>

          <section className="flex flex-wrap gap-2 items-center justify-center mt-6 lg:mt-12 lg:gap-3">
            {books.map((book, i) => {
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
            ටෝරා ලෙසින් හඳුන්වනු ලබන්නේ ශුද්ධ බයිබලයේ ඇති මුල් පොත් පහය. සිංහල
            භාෂාවේ පංච පුස්තකය ලෙසින්ද, ව්‍යවස්ථාව ලෙසින්ද නීති පොත් ලෙසින්ද
            හඳුන්වනු ලබයි.මෙහි විශේෂත්වය වන්නේ පොත් පහම එකම කතුවරයකු වන මෝසෙස්
            විසින් ලිවීමයි.
          </p>

          {show && (
            <div className="leading-8 mt-6 text-lg text-slate-100">
              <p className="text-amber-400 bg-gray-700 rounded-md p-2 sm:text-xl sm:py-4 lg:text-2xl lg:leading-10">
                හීබෘ භාෂාවෙන් ටනාක් ලෙසින් හඳුන්වනු ලබන්නේ ශුද්ධ බයිබලයේ ඇති
                මුල් පොත් 39 ය. එය තෝරා, නෙබීම්, කෙතුබීම් ලෙස හඳුන්වනු ලබයි.
              </p>
              <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 lg:text-xl lg:leading-normal">
                උප්පත්ති පොතේ පළමු පරිච්ඡේදය තුළ පටන් ගැන්මේදී ලෙස ලියා ඇති වචනය
                මුළු මහත් විශ්වයේ මුල්මවීම් සිදුවූ කාලය ලෙස හඳුන්වා දීමට හැකිය.
                එය හීබෘ භාෂාවෙන් බෙහෙර්ශත් ලෙස සඳහන් කර ඇත. මෙම වචනය හීබෘ භාෂාව
                තුළ ඇති ගැඹුරු අර්ථ ගණනාවක් ප්‍රකාශ වන වටිනා වචනයකි. එහි ඇති එක්
                අර්ථයක් නම් අනන්තයට එහා ඇති අසංඛය ලෙසින් හඳුන්වන යම් කාල
                කාලවකවානුවක් පිළිබඳ ප්‍රකාශ කරයි. එම පදනම මත සිට බයිබලයට වැය වී
                ඇති කාලය අවුරුදු 6000 ලෙස ඔප්පු වුනත් උත්පත්ති පළමු පරිච්ඡේදයේ
                පළමු පදය විද්‍යාව පවසන ලෙස බොහෝ කලකට පෙර මැවුම්කාර දෙවියන්
                වහන්සේ විසින් පෘථිවිය නිර්මාණය කළ බව ප්‍රකාශ කළ හැක.
              </p>
            </div>
          )}

          <button
            onClick={() => setShow((show) => !show)}
            className="my-4 bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full sm:my-5 md:my-6 lg:text-lg lg:px-8 lg:py-4 lg:my-8"
          >
            {!show ? "Read more" : "Read less"}
          </button>
        </section>
      </main>
      <section
        className={`flex flex-wrap gap-2 items-center justify-center bg-gray-900 py-12 px-4 sm:gap-3 lg:gap-4`}
      >
        {books.map((book, i) => {
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
                      <p className="text-base pb-4 sm:text-lg">
                        පරිච්ඡේද : {book.chapters}
                      </p>
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
                  <p className="text-base pb-6 sm:text-lg lg:text-2xl lg:mt-4">
                    පරිච්ඡේද : {book.chapters}
                  </p>
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
    </>
  );
}

export default Torah;
