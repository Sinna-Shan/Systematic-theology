import BookRenderer from "../../components/BookRenderer";
import Header from "../../components/Header";
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
  { book: "හොෂෙයා", content: null },
  { book: "යෝවෙල්, මීකා, හබක්කුක්, ශෙපනියා", content: null },
  { book: "ආමෝස්", content: null },
  { book: "ඔබදියා", content: null },
  { book: "යෝනා, නාහුම්", content: null },
  { book: "හග්ගයි, සෙකරියා, මලාකි", content: null },
  { book: "මලාකි", content: null },
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
