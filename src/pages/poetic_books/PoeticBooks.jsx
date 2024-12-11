import BookRenderer from "../../components/BookRenderer";
import Header from "../../components/Header";
import Ul from "../../components/Ul";
const books = [
  { book: "යෝබ්", chapters: 42, content: null },
  { book: "ගීතාවලිය", chapters: 150, content: null },
  { book: "හිතෝපදේශ", chapters: 31, content: null },
  { book: "දේශනාකාරයා", chapters: 12, content: null },
  { book: "සාලමොන්ගේ ගීතිකාව", chapters: 8, content: null },
];
function PoeticBooks() {
  return (
    <>
      <main
        className="w-full bg-[url('./poetry.webp')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
      >
        <Header
          title="කවි පොත්"
          subTitle="(කාව්‍යමය කෘති)"
          values={books}
          content="යුදෙව් සංස්කෘතියේ ඉතා අලංකාර ලෙස ලියැවී ඇති බොහෝ කාව්‍යමය ග්‍රන්ථ ඇත. නමුත් ශුද්ධ බයිබලය තුළ ඇති මෙම පොත් 5 යුදෙව් සංස්කෘතියේ සාහිත්‍ය කෘතීන් ලෙස නම්කර ඇත. "
          extras={
            <div className="leading-8 mt-6 text-lg text-slate-100 lg:text-2xl">
              <p>
                එයට හේතුව මෙම පොත් පහ ඇතුලේ යුදෙව් භාෂාවේ රහස් යුදෙව් අක්ෂර
                වින්‍යාසය තුළ ඇති දිව්‍යමය රහස් යුදෙව් ඉලක්කම් තුළ ඇති වටිනා
                රහස් කාව්‍යයන් ලෙස ලියා ඇත.
              </p>
              <p>මෙම පොත් පහ තුළ ඇති සිදුවීම්.</p>
              <Ul
                values={[
                  "දෙවියන් වහන්සේ විසින් එම මනුෂ්‍යයා සමග කතා කළ අවස්ථාවන්",
                  "එම මනුෂ්‍යයන් තුළින් දෙවියන් වහන්සේ ඉදිරියේ කළ ප්‍රකාශයන්",
                  "එම අයගේ පෞද්ගලික ජීවිත අත්දැකීම්",
                  "ජීවිතයේ වැටීම්වලදී සහ නැගිටීම් වලදී ඔවුන්ගේ මනසේ ඇතිවූ පෞද්ගලික අදහස් දෙවියන් වහන්සේට හෝ මනුෂ්‍යයන්ට ප්‍රකාශ කර ඇත.",
                ]}
              />
            </div>
          }
        />
      </main>
      <BookRenderer values={books} />
    </>
  );
}

export default PoeticBooks;
