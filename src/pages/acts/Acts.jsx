import Header from "../../components/Header";
function Acts() {
  return (
    <main
      className="w-full min-h-screen bg-[url('./acts.jpg')] bg-cover
         bg-center flex flex-col items-center justify-center p-3"
    >
      <Header
        title="ක්‍රියා පොත."
        values={[{book:"ක්‍රියා"}]}
        content={
          <>
            <p className="sm:leading-9 md:leading-10 lg:leading-relaxed">
              ක්‍රියා පොත ලෙස හැඳින්වෙන්නේ ක්‍රිස්තුස් වහන්සේ පොළොවේ සිටි
              කාලයේදී එතුමා විසින් තෝරාගනු ලැබූ ගෝලයෝ තුළින් ශුද්ධ සභාවට
              ශුද්ධාත්මයාණන් කරන කොට ගෙන ආරම්භවීම පිළිබඳව. ඒ අනුව ශුද්ධාත්මයාණන්
              වහන්සේ වැගිරීමෙන් පසුව, යෙරුසලම තුළත්, කොරනේලියස්ගේ නිවසේ දෙවැනි
              වර ශුද්ධාත්ම වැගිරීමෙන් පසු අන්‍ය ජාතිකයින් වෙතටත්, අවසානයේදී එවකට
              අගනුවර ව තිබූ රෝමය වෙතටත් ශුද්ධ සභාවේ ව්‍යාප්තිය පිළිබඳව ව්‍යාත්මක
              පැහැදිලි කිරීමක්ය.
            </p>

            <p className="text-amber-400 mt-6">ලූක්තුමා විසින් ලියා ඇත.</p>
          </>
        }
      />
    </main>
  );
}

export default Acts;
