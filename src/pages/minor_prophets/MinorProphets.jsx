import BookRenderer from "../../components/BookRenderer";
import Header from "../../components/Header";
import Amos from "./components/Amos";
import Hosea from "./components/Hosea";
import HSM from "./components/HSM";
import JMHH from "./components/JMHH";
import Malachi from "./components/Malachi";
import Obediah from "./components/Obediah";
import YN from "./components/YN";
const books = [
  { book: "හොෂෙයා ", chapters: 14, content: null },
  { book: "යෝවෙල්", chapters: 3, content: null },
  { book: "ආමෝස්", chapters: 9, content: null },
  { book: "ඔබදියා", chapters: 1, content: null },
  { book: "යෝනා", chapters: 4, content: null },
  { book: "මීකා", chapters: 7, content: null },
  { book: "නාහුම්", chapters: 3, content: null },
  { book: "හබක්කුක්", chapters: 3, content: null },
  { book: "ශෙපනියා", chapters: 3, content: null },
  { book: "හග්ගයි", chapters: 2, content: null },
  { book: "සෙකරියා", chapters: 14, content: null },
  { book: "මලාකි", chapters: 4, content: null },
];

const category = [
  { book: "හොෂෙයා", chapters: 14, content: <Hosea /> },
  {
    book: "යෝවෙල්, මීකා, හබක්කුක්, ශෙපනියා",
    chapters: "3 / 7 / 3 / 3",
    content: <JMHH/>,
  },
  { book: "ආමෝස්", chapters: 9, content: <Amos/> },
  { book: "ඔබදියා",chapters: 1, content: <Obediah/> },
  { book: "යෝනා, නාහුම්", chapters: "4/3", content: <YN/> },
  { book: "හග්ගයි, සෙකරියා, මලාකි", chapters: "2/14/4", content: <HSM/> },
  { book: "මලාකි", chapters: "4", content: <Malachi/> },
];
function MinorProphets() {
    return (
      <>
        <main
          className="w-full bg-[url('./Prophet_0.jpg')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
        >
          <Header
            title="කුඩා අනාගතවක්තෘ පොත්"
            values={books}
            content="කුඩා අනාගතවක්තෘන් ලෙස හඳුන්වනු ලබන්නේ ඒ අයගේ ආත්මික ස්වභාවය මත නොව එම පොත් වල ඇති තොරතුරු මතය. ඒ අනුව හොෂෙයා සිට මළාකි දක්වා ඇති අවසන් පොත් දොළහ මේ නමින් හඳුන්වයි."
          />
        </main>

        <BookRenderer values={category} />
      </>
    );
}

export default MinorProphets
