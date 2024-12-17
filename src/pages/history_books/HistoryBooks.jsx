import BookRenderer from "../../components/BookRenderer";
import Header from "../../components/Header";
import Chronicles from "./components/Chronicles";
import Esther from "./components/Esther";
import Ezra from "./components/Ezra";
import Joshua from "./components/Joshua";
import Judges from "./components/Judges";
import Kings from "./components/Kings";
import Ruth from "./components/Ruth";
import Samuel from "./components/Samuel";
import Nehemiah from "./components/Nehemiah";
const books = [
  { book: "යෝෂුවා" },
  { book: "විනිශ්චකාරයන්ගේ පොත" },
  { book: "රූත්ගේ කතාව" },
  { book: "1 සාමුවෙල්" },
  { book: "2 සාමුවෙල්" },
  { book: "1 රාජාවලිය" },
  { book: "2 රාජාවලිය" },
  { book: "1 ලේකම්" },
  { book: "2 ලේකම්" },
  { book: "එස්රා" },
  { book: "නෙහෙමියා" },
  { book: "එස්තර්" },
];

const summary = [
  { book: "යෝෂුවා", chapters: 24, content: <Joshua /> },
  { book: "විනිශ්චකාරයන්ගේ පොත", chapters: 21, content: <Judges /> },
  { book: "රූත්ගේ කතාව", chapters: 4, content: <Ruth /> },
  { book: "1 & 2 සාමුවෙල්", chapters: "31, 24", content: <Samuel /> },
  { book: "1 & 2 රාජාවලිය", chapters: "22, 25", content: <Kings /> },
  { book: "1 & 2ලේකම්", chapters: "29, 36", content: <Chronicles /> },
  { book: "එස්රා", chapters: 10, content: <Ezra /> },
  { book: "නෙහෙමියා", chapters: 13, content: <Nehemiah /> },
  { book: "එස්තර්", chapters: 10, content: <Esther /> },
];

function HistoryBooks() {
  return (
    <>
      <main
        className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 bg-cover
         bg-center flex flex-col items-center justify-center p-3"
      >
        <Header title="ඉතිහාස පොත්" values={books} />
      </main>
      <BookRenderer values={summary} />
    </>
  );
}

export default HistoryBooks;
