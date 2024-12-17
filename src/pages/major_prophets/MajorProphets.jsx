import BookRenderer from "../../components/BookRenderer";
import Header from "../../components/Header";
import Daniel from "./components/Daniel";
import Ezekiel from "./components/Ezekiel";
import Isaiah from "./components/Isaiah";
import Jeremiah from "./components/Jeremiah";
import Lamentations from "./components/Lamentations";
import Footer from "../../components/Footer";

const books = [
  { book: "යෙසායා", chapters: 66, content: <Isaiah /> },
  { book: "යෙරමියා", chapters: 52, content: <Jeremiah /> },
  { book: "විලාප ගී", chapters: 5, content: <Lamentations /> },
  { book: "එසකියල්", chapters: 48, content: <Ezekiel /> },
  { book: "දානියෙල්", chapters: 12, content: <Daniel /> },
];
function MajorProphets() {
  return (
    <>
      <main
        className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 bg-cover
         bg-center flex flex-col items-center justify-center p-3"
      >
        <Header
          title="මහා අනාගතවක්තෘ පොත්"
          values={books}
          content="මහා අනාගතවත්තෘවරු ලෙස මෙම පොත් පහ හඳුන්වනු ලබන්නේ එම කතෘවරුන් විශේෂ නිසා නොවෙයි. මෙම පොත් අනෙක් පොත් වලට සාපේක්ෂව බලන කල විශාල පොත් ලෙස හැඳින්වීමට හැකිය. ඒ නිසා මෙම පොත් පහ මහා අනාගත වතෘ ලෙස හඳුන්වයි."
        />
      </main>
      <BookRenderer values={books} /> <Footer />
    </>
  );
}

export default MajorProphets;
