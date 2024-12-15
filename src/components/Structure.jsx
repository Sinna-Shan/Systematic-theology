import { Link } from "react-router-dom";
import Books from "./Books";

const oldTestement = [
  { img: "./torah.jpg", link: "torah", title: "පංච පුස්තකය (5)" },
  { img: "./history_books.jpg", link: "history", title: "ඉතිහාස පොත් (12)" },
  { img: "./poetry.jpg", link: "poetry", title: "කවි පොත් (5)" },
  {
    img: "./Prophet_0.jpg",
    link: "major_prophets",
    title: "මහා අනාගතවක්තෘ පොත් (5)",
  },
  {
    img: "./minor_prophets.webp",
    link: "minor_prophets",
    title: "කුඩා අනාගතවක්තෘ පොත් (12)",
  },
];

const newTestement = [
  { img: "./gospel.jpg", link: "gospel", title: "සුභාරංචි පොත් (4)" },
  { img: "./acts.jpg", link: "acts", title: "ඉතිහාස පොත් (1)" },
  {
    img: "./hebrews_to_jude.jpg",
    link: "letters_of_paul",
    title: "පාවුලු තුමාගේ ලිපි (14)",
  },
  {
    img: "./common_letters.jpg",
    link: "common_letters",
    title: "පොදු ලිපි (7)",
  },
  {
    img: "./Revelation.jpg",
    link: "revelation",
    title: "අනාගතවක්තෘ පොත් (1)",
  },
];
function Structure() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-t from-slate-800 to-slate-900 text-white px-3 text-center pb-10">
      <h1
        className="text-3xl sm:text-3xl md:text-5xl md:mb-6 lg:text-7xl lg:my-10"
        data-aos="zoom-in"
      >
        ශුද්ධ බයිබලයේ කොටස්
      </h1>
      <h3
        className="mt-6 text-xl text-amber-400 sm:text-2xl md:text-3xl lg:text-4xl"
        data-aos="zoom-in"
      >
        ශුද්ධ වූ බයිබලය ප්‍රධාන කොටස් දෙකකි.
      </h3>
      <h4
        className="mt-8 text-lg mb-6 sm:text-xl md:text-2xl lg:leading-relaxed lg:text-3xl"
        data-aos="zoom-in"
      >
        මුල් ගිවිසුම කොටස් පහකින් සමන්විතය
        <br />
        (පොත් 39)
      </h4>
      <Books values={oldTestement} />
      <Link
        to="silent"
        className="my-8 border rounded-full px-3 py-1.5 text-center sm:my-10 sm:px-4 sm:py-2 sm:text-lg md:my-12 hover:border-amber-400 ease-linear duration-300 lg:text-3xl lg:my-16 lg:px-8 lg:py-4"
      >
        නිහඩ කාලය
      </Link>
      <h4
        className="mt-8 text-lg my-8 sm:text-xl md:text-2xl lg:my-6 lg:leading-relaxed lg:text-3xl"
        data-aos="zoom-in"
      >
        දෙවෙනි ගිවිසුම කොටස් පහකින් සමන්විතය. <br />
        (පොත් 27)
      </h4>
      <p
        className="my-6 leading-7 text-base sm:text-lg sm:leading-8 md:text-xl md:leading-10 lg:text-2xl lg:leading-relaxed lg:my-10"
        data-aos="zoom-in"
      >
        පොත් තිස් නමය පුරාවට තෝරා ගත් වංශයක් සමඟ හැසිරෙමින් ආ සර්ව බලධාරී
        දෙවියන් වහන්සේ තමාට කීකරු සෙනඟක් නිර්මාණය කර ගැනීමට අනපනත් නීති රීති
        දමමින් උත්සාහ කළ ද එම උත්සාහය ව්‍යාර්ථ විය. ඉන්පසුව කීකරු සෙනඟක් සාදා
        ගැනීමට නම් මනුෂ්‍යයා තුළ සාතන්ට තිබෙන අයිතිය ඉවත් විය යුතු බව එතුමා
        විසින් ස්ථිර කරන ලද්දේය. ඒ වෙනුවෙන් තමාම දේවත්වය අතහැර මනුකයක් දරාගෙන
        පොළොවට පැමිණීමට අවශ්‍ය බව තීන්දු කළේය. එම තීන්දුවේ ප්‍රකාරය අනුව දේවත්වය
        අත හරින කල යේසුස් නම් ලත් මනුෂ්‍ය රූපයකට එතුමා ඇතුළු විය. මෙහිදී පියාණන්
        වහන්සේට ඉතා කීකරුව තමාගේ ජීවිතය කුරුසියේදී පූජා කරමින් සකල ජාතීන් සමඟ
        ලෙයින් ඇති කරගත් ගිවිසුම නව ගිවිසුම නම් වේ.
      </p>
      <Books values={newTestement} />
    </div>
  );
}

export default Structure;
