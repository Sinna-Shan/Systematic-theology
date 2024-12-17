import Header from "../../components/Header";
const books = [
  { book: "යාකොබ්", chapters: 5, content: null },
  { book: "1 & 2 පේත්‍රස්", chapters: "5 & 3", content: null },
  { book: "1 & 2 & 3 යොහාන්", chapters: "5 & 1 & 1", content: null },
  { book: "යූද්", chapters: 1, content: null }
];
function CommonLetters() {
  return (
    <>
      <main
        className="w-full min-h-screen bg-[url('./common_letters.jpg')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
      >
        <Header
          title="පොදු ලිපි"
          values={books}
          content="මෙම පොදු ලිපි එවකට පැවති හැම සභාවකම කතාබහට ලක් වූ පොදු ප්‍රශ්න අරමුණු කරගෙන ලියන ලද ඒවාය. ඒ අතරින් යාකෝප් සහ යොහාන් එවකට තිබූ දෙවැනි ප්‍රශ්නයක් වූ ක්‍රිස්තු විරෝධී ඉගැන්වීම් පිළිබඳව දැඩි ලෙස කතා කරයි.ඒ වගේම නායකවරුන්ට කීකරුවීම වැඩිමහල්ලන්ගේ බලතල රාජ්‍ය උදෙසා වැඩ කිරීම එක්සිත්කම ශුද්ධාත්ම වැගිරීම සේවකයන්ට විරුද්ධව දොස්තැබීම යන පොදු ප්‍රශ්න පිළිබඳව මෙම පොත් වල කතා කර ඇත."
        />
      </main>
    </>
  );
}

export default CommonLetters;
