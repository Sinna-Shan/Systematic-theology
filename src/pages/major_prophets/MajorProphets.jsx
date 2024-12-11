import BookRenderer from "../../components/BookRenderer";
import Header from "../../components/Header";

const books = [
  { book: "යෙසායා", chapters: 66, content: null },
  { book: "ඉරමියා", chapters: 52, content: null },
  { book: "විලාප ගී", chapters: 5, content: null },
  { book: "එසකියල්", chapters: 48, content: null },
  { book: "දානියෙල්", chapters: 12, content: null },
];
function MajorProphets() {
  return (
    <>
      <main
        className="w-full bg-[url('./Prophet_0.jpg')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
      >
        <Header
          title="මහා අනාගතවක්තෘ පොත්"
          values={books}
          content="මහා අනාගතවත්තෘවරු ලෙස මෙම පොත් පහ හඳුන්වනු ලබන්නේ එම කතෘවරුන් විශේෂ නිසා නොවෙයි. මෙම පොත් අනෙක් පොත් වලට සාපේක්ෂව බලන කල විශාල පොත් ලෙස හැඳින්වීමට හැකිය. ඒ නිසා මෙම පොත් පහ මහා අනාගත වතෘ ලෙස හඳුන්වයි."
        />
      </main>

      <BookRenderer values={books} />
    </>
  );
}

export default MajorProphets;
