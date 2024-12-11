import BookRenderer from "../../components/BookRenderer";
import Header from "../../components/Header";
const books = [
  { book: "යෝෂුවා", chapters: 24, content: null },
  { book: "විනිශ්චකාරයන්ගේ පොත", chapters: 21, content: null },
  { book: "රූත්ගේ කතාව", chapters: 4, content: null },
  { book: "1 සාමුවෙල්", chapters: 31, content: null },
  { book: "2 සාමුවෙල්", chapters: 24, content: null },
  { book: "1 රාජාවලිය", chapters: 22, content: null },
  { book: "2 රාජාවලිය", chapters: 25, content: null },
  { book: "1 ලේකම්", chapters: 29, content: null },
  { book: "2 ලේකම්", chapters: 36, content: null },
  { book: "එස්රා", chapters: 10, content: null },
  { book: "නෙහෙමියා", chapters: 13, content: null },
  { book: "එස්තර්", chapters: 10, content: null },
];

function HistoryBooks() {
  return (
    <>
      <main
        className="w-full bg-[url('./history_books.jpg')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
      >
        <Header
          title="ඉතිහාස පොත්"
          values={books}
        />
      </main>
      <BookRenderer values={books} />
    </>
  );
}

export default HistoryBooks;
