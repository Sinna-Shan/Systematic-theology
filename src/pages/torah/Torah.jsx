import Genesis from "./components/Genesis";
import Exodus from "./components/Exodus";
import Leviticus from "./components/Leviticus";
import Numbers from "./components/Numbers";
import Deuteronomy from "./components/Deuteronomy";
import Header from "../../components/Header";
import BookRenderer from "../../components/BookRenderer";

const books = [
  { book: "උප්පත්ති", chapters: 50, content: <Genesis /> },
  { book: "නික්මයාම", chapters: 40, content: <Exodus /> },
  { book: "ලෙවී කතාව", chapters: 27, content: <Leviticus /> },
  { book: "ගණන් කතාව", chapters: 36, content: <Numbers /> },
  { book: "ද්විතීය කතාව", chapters: 34, content: <Deuteronomy /> },
];
function Torah() {
  return (
    <>
      <main
        className="w-full bg-[url('torah.jpg')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
      >
        <Header
          title="ටෝරා"
          subTitle="(පංච පුස්තකය)"
          values={books}
          content="ටෝරා ලෙසින් හඳුන්වනු ලබන්නේ ශුද්ධ බයිබලයේ ඇති මුල් පොත් පහය. සිංහල
            භාෂාවේ පංච පුස්තකය ලෙසින්ද, ව්‍යවස්ථාව ලෙසින්ද නීති පොත් ලෙසින්ද
            හඳුන්වනු ලබයි.මෙහි විශේෂත්වය වන්නේ පොත් පහම එකම කතුවරයකු වන මෝසෙස්
            විසින් ලිවීමයි."
          extras={
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
          }
        />
      </main>

      <BookRenderer values={books} />
    </>
  );
}

export default Torah;
