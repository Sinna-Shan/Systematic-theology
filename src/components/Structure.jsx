import { Link } from "react-router-dom";
import Books from "./Books";

const oldTestement = [
  { img: "./torah.jpg", link: "torah", title: "පංච පුස්තකය (5)" },
  { img: "./history books.jpg", link: "history", title: "ඉතිහාස පොත් (12)" },
  { img: "./Poetry.jpg", link: "poetry", title: "කවි පොත් (5)" },
  {
    img: "./Prophet_0.jpg",
    link: "major_prophets",
    title: "මහා අනාගතවක්තෘ පොත් (5)",
  },
  {
    img: "./minor prophets.webp",
    link: "minor_prophets",
    title: "කුඩා අනාගතවක්තෘ පොත් (12)",
  },
];

const newTestement = [
  { img: "./gospal.jpg", link: "gospal", title: "සුභාරංචි පොත් (4)" },
  { img: "./acts.jpg", link: "acts", title: "ඉතිහාස පොත් (1)" },
  {
    img: "./Hebrews to Jude.jpg",
    link: "leters_of_paul",
    title: "පාවුලු තුමාගේ ලිපි (14)",
  },
  {
    img: "./common letters.jpg",
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
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-t from-slate-800 to-slate-900 text-white px-3 text-center">
      <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl lg:my-10">
        ශුද්ධ බයිබලයේ කොටස්
      </h1>
      <h3 className="mt-6 text-xl">ශුද්ධ වූ බයිබලය ප්‍රධාන කොටස් දෙකකි.</h3>
      <h4 className="mt-8 text-lg mb-6">
        මුල් ගිවිසුම කොටස් පහකින් සමන්විතය
        <br />
        (පොත් 39)
      </h4>
      <Books values={oldTestement} />
      <h4 className="mt-8 text-lg mb-6">
        දෙවෙනි ගිවිසුම කොටස් පහකින් සමන්විතය. <br />(පොත් 27)
      </h4>
      <Books values={newTestement} />
    </div>
  );
}

export default Structure;
