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
        <section className="w-full bg-neutral-900 backdrop-filter backdrop-blur-lg bg-opacity-90 p-3 rounded-md text-center text-white my-6">
          <h1 className="text-xl">
            <span className="text-amber-200 text-4xl">ටෝරා</span> <br />
            (පංච පුස්තකය)
          </h1>

          <section className="flex flex-wrap gap-2 items-center justify-center mt-6">
            {books.map((book, i) => {
              return (
                <div
                  key={i}
                  className="bg-amber-400 p-2 rounded-md text-slate-800 font-bold"
                >
                  {book.book}
                </div>
              );
            })}
          </section>

          <p className="leading-8 mt-6 text-lg text-slate-100">
            ටෝරා ලෙසින් හඳුන්වනු ලබන්නේ ශුද්ධ බයිබලයේ ඇති මුල් පොත් පහය. සිංහල
            භාෂාවේ පංච පුස්තකය ලෙසින්ද, ව්‍යවස්ථාව ලෙසින්ද නීති පොත් ලෙසින්ද
            හඳුන්වනු ලබයි.මෙහි විශේෂත්වය වන්නේ පොත් පහම එකම කතුවරයකු වන මෝසෙස්
            විසින් ලිවීමයි.
          </p>

          {show && (
            <div className="leading-8 mt-6 text-lg text-slate-100">
              <p className="text-amber-400 bg-gray-700 rounded-md">
                හීබෘ භාෂාවෙන් ටනාක් ලෙසින් හඳුන්වනු ලබන්නේ ශුද්ධ බයිබලයේ ඇති
                මුල් පොත් 39 ය. එය තෝරා, නෙබීම්, කෙතුබීම් ලෙස හඳුන්වනු ලබයි.
              </p>
              <p className="mt-6 text-base leading-7">
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
            className="mt-4 bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full"
          >
            {!show ? "Read more" : "Read less"}
          </button>
        </section>
      </main>
      <section
        className={`flex flex-wrap gap-2 items-center justify-center bg-gray-900 py-12 px-4`}
      >
        {books.map((book, i) => {
          return (
            <div
              key={i}
              className={`bg-gray-100 p-3 rounded-md flex  flex-col ${
                i === index && viewBookDetails ? "w-full" : ""
              }`}
            >
              {i === index && viewBookDetails ? (
                <>
                  <div className="flex gap-4 items-center">
                    <FaBookJournalWhills className="mb-4 mt-2 text-5xl text-amber-500" />
                    <div className="flex flex-col">
                      <h3 className="text-3xl">{book.book}</h3>
                      <p className="text-base pb-4">
                        පරිච්ඡේද : {book.chapters}
                      </p>
                    </div>
                  </div>
                  {book.content}
                </>
              ) : (
                <div>
                  <FaBookJournalWhills className="mb-4 mt-2 text-3xl text-amber-500" />
                  <h3 className="text-3xl">{book.book}</h3>
                  <p className="text-base pb-4">පරිච්ඡේද : {book.chapters}</p>
                </div>
              )}

              <button
                className=" bg-gray-900 text-gray-100 rounded-full py-1.5 px-3 text-sm"
                onClick={() => handleClick(i)}
              >
                {!(i === index && viewBookDetails)
                  ? "More Details"
                  : "Less Details"}
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Torah;
