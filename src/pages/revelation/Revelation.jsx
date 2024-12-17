import Header from "../../components/Header";

function Revelation() {
    return (
      <>
        <main
          className="w-full min-h-screen bg-[url('./Revelation.jpg')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
        >
          <Header
            title="එළිදරව්ව"
            values={[{ book: "එළිදරව්ව" }]}
            content="එළිදරව්ව යනු උප්පත්තියේදී දෙවියන් වහන්සේ මවන ලද සියලුම මැවිල්ලට සිදුවන අවසානය ගැන සහ එය කෙසේ සිදුවන්නේද? කවුරුන් විසින් සිදු කරන්නේද? යන තොරතුරු ගැන ඉතා නිවැරදිව කතා කර ඇති ලෝකයේ එකම පොතය අතීතයේ සිට වර්තමානයත් ඉදිරි අනාගතයත් පිළිබඳව පැහැදිලි විග්‍රහයක් ඇති ශුද්ධ බයිබලයේ ආත්මයාණන් වහන්සේ වහන්සේගේ අවසාන හුස්ම ලෙසද එළිදරව් පොත නම් කර ඇත."
          />
        </main>
      </>
    );
}

export default Revelation
