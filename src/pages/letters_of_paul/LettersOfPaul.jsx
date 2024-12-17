import BookRenderer from "../../components/BookRenderer";
import Header from "../../components/Header";
import Colossians from "./components/Colossians";
import Corinthians from "./components/Corinthians";
import Ephesians from "./components/Ephesians";
import Galatians from "./components/Galatians";
import Hebrews from "./components/Hebrews";
import Philemon from "./components/Philemon";
import Phillippians from "./components/Phillippians";
import Romans from "./components/Romans";
import Thessalonians from "./components/Thessalonians";
import Timothy from "./components/Timothy";
import Titus from "./components/Titus";
const books = [
  { book: "රෝම", chapters: 16, content: <Romans /> },
  { book: "1 & 2 කොරින්ති", chapters: "16 & 13", content: <Corinthians /> },
  { book: "ගලාති", chapters: 6, content: <Galatians /> },
  { book: "එපීස", chapters: 6, content: <Ephesians /> },
  { book: "පිලිප්පි", chapters: 4, content: <Phillippians /> },
  { book: "කොලොස්සි", chapters: 4, content: <Colossians /> },
  { book: "1 & 2 තෙසලෝනික", chapters: "5 & 3", content: <Thessalonians /> },
  { book: "1 & 2 තිමෝති", chapters: "6 & 4", content: <Timothy /> },
  { book: "තීතස්", chapters: 3, content: <Titus /> },
  { book: "පිලෙමොන්", chapters: 1, content: <Philemon /> },
  { book: "හේබ්‍රෙව්", chapters: 13, content: <Hebrews /> },
];
function LettersOfPaul() {
    return (
      <>
        <main
          className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 bg-cover
         bg-center flex flex-col items-center justify-center p-3"
        >
          <Header
            title="පාවුලු තුමාගේ ලිපි"
            values={books}
            content="ශුද්ධ වූ පාවුළුතුමා නව ගිවිසුමේ සිටි විශිෂ්ටතමයා ලෙස නම් කිරීමට අපට හැකියි. ඔහු ඊජිප්තුවේ ඇලෙක්සැන්ඩියාවේ උපත ලැබූ යුදෙව් වික්ය. තාර්ශී ස් නුවර හැදී වැඩුණු ප්‍රබලතම සාහිත්‍යවරයා විය."
            extras={
              <div className="leading-8 mt-6 text-lg text-slate-100 lg:text-2xl flex flex-col gap-4">
                {" "}
                <p>
                  එමෙන්ම එවකට තිබූ ගමාලියෙල් අධ්‍යාපන ක්‍රමය සම්පූර්ණ කළ
                  විශාරදවරයෙකි. ලෝක දේශපාලනය සහ ලෝක ආර්ථිකය පිළිබඳව මනා දැනුමක්
                  ලබා සිටි නිසා රෝම නාගරිකත්වය ලබාගත් අයෙක්ද විය. ඔහු හීබෘ
                  බයිබලය ටනාක් පිළිබඳව මහාචාර්යවරයෙකි. ඒ නිසා පරිසි නායකයකු ලෙස
                  කටයුතු කළේය. එතුමා යුදෙව් මන්ත්‍රණ සභාවේ ප්‍රබල සාමාජිකයෙක් ද
                  විය, යුධ උපායන් පිළිබඳ සැලසුම් කරනයේ සිටි යුද විශේෂඥයෙකි. ඔහු
                  භාෂාවන් ලෙස සිරියෙන් භාෂාව, ඊජිප්තු භාෂාව ලතින් භාෂාව හීබෘ
                  භාෂාව, අරාමීය භාෂාව, ග්‍රීක් භාෂාව, අකාඩියෙන් භාෂාව, මුල් හීබෘ
                  භාෂාව යන භාෂාවලින් ලිවීමට කතා කිරීමට මනා හැකියාවක් තිබූ අයෙකි.
                </p>
                <p className="mt-6 text-amber-400">
                  පාවුලු තුමා ගම් හතකට ලිපි නමයක් ලියා ඇත.
                </p>
              </div>
            }
          />
        </main>
        <BookRenderer values={books} />
      </>
    );
}

export default LettersOfPaul
