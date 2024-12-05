import { IoMdInformationCircle, IoMdGlobe } from "react-icons/io";
import { LiaLanguageSolid } from "react-icons/lia";
import { IoBook } from "react-icons/io5";

const facts = [
  "බයිබලයේ මුළු පොත් සංඛ්‍යාව 66කි.",
  "එය කතුවරයන් හතළිස් දෙනකුගෙන් ලියා ඇත.",
  "එම හතළිස් දෙනා විවිධ භාෂාවන් විවිධ යුගයන් නියෝජනය කරන අයයි.",
  "මුල් ගිවිසුම ලියා ඇත්තේ ප්‍රධාන වශයෙන් හීබෘ භාෂාවෙනි.",
  "ඊට අමතරව අරාමීය භාෂාවෙනුත් පරිච්ඡේද කිහිපයක් ලියා ඇත.(දානියෙල්(1:1-7))",
  "දෙවෙනි ගිවිසුම ලියා ඇත්තේ ග්‍රීක් භාෂාවෙනි.",
  "බයිබලයේ පළමු පොත වන්නේ යෝබ් පොතය.",
  "එය හමුවී ඇත්තේ ක්‍රිස්තු පූර්ව 1500 දීය.",
  "බයිබලයේ අවසාන පොත වන්නේ එළිදරව් පොතය.",
  "එය ක්‍රිස්තු වර්ෂ 100 දී පමණ අවසන් වී ඇත.",
  "වසර 1600 ක් පුරාවට විවිධ භාෂාවලින්, විවිධ දැනුමෙන්, විවිධ සංස්කෘතීන් තුළින්, විවිධ රැකියා තුළින් ජීවත් වූ මිනිසුන් හතළිස් දෙනකු ලවා එකම සංදර්භයකට ගලා යන ලෙස ශුද්ධ බයිබලය නැමැති ග්‍රන්ථය අද්විතීය ලෙසින් දෙවියන් වහන්සේ තුළින් ලියැවී ඇත.",
];
function Facts() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-slate-900 text-white">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl lg:my-10">
        බයිබලයේ ඉතිහාසය
      </h1>
      <ul className="grid grid-cols-1 gap-x-2 gap-y-2 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 lg:mx-4">
        {facts.map((fact, i) => {
          return (
            <li
              className="text-white text-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-700 p-2 min-h-16 rounded-md lg:text-2xl"
              key={i}
            >
              <span className="block font-thin m-2 text-3xl text-amber-600 sm:font-normal md:font-bold lg:font-black lg:m-6 lg:text-4xl">
                {i + 1}.
              </span>

              <span>{fact}</span>
            </li>
          );
        })}
      </ul>

      <section className="text-lg text-white mb-10 sm:grid sm:grid-cols-2 md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed lg:mx-4">
        <div className="mb-3 border border-amber-500 rounded-xl p-2 mx-2 bg-slate-900 shadow-sm lg:px-6 lg:pb-6">
          <IoMdGlobe className="text-5xl m-3 text-amber-500 sm:mb-4 lg:text-6xl lg:m-6" />
          <p>ශුද්ධ වූ බයිබලය මහද්වීප තුනක් තුල ලියැවී ඇත.</p>
          <ul>
            <li>ආසියා මහද්වීපය - ඊශ්‍රායලය</li>
            <li>යුරෝපා මහද්වීපය - රෝමය</li>
            <li>අප්‍රිකා මහද්වීපය - ඊජිප්තුව</li>
          </ul>
        </div>

        <p className="mb-3 border border-amber-500 rounded-xl p-2 mx-2 bg-slate-900 shadow-sm lg:px-6 lg:pb-6 ">
          <IoMdInformationCircle className="text-5xl m-3 text-amber-500 sm:mb-4 lg:text-6xl lg:m-6" />
          ශුද්ධ වූ බයිබලය කතුවරුන් හතළිස් හතර දෙනෙක්ගෙන් ලියා ඇති බවත්
          පිළිගැනීමක් ඇත.දැනට පොත් 72 ක් ලියවී ඇති බව අපි පිළිනොගනියි.ඒ පොත් වල
          දේවානුභාවය නොමැත.පාප්වරුන් රචනා කළ පොත් ද ඇත.
        </p>
        <p className="mb-3 border  font-bold border-amber-500 rounded-xl p-2 mx-2 bg-slate-900 shadow-sm lg:px-6 lg:pb-6">
          <LiaLanguageSolid className="text-5xl m-3 text-amber-500 sm:mb-4 lg:text-6xl lg:m-6 " />
          රෝමානුවන් විසින් ජාත්‍යන්තරයට ගෙන එන ආගම තමයි රෝමානු කතෝලික. කැතෝලිකේ
          ලතින් භාෂාවෙන් ජාත්‍යන්තර.
        </p>
        <p className="mb-3 border border-amber-500 rounded-xl p-2 mx-2 bg-slate-900 shadow-sm lg:px-6 lg:pb-6">
          <IoBook className="text-5xl m-3 text-amber-500 sm:mb-4 lg:text-6xl lg:m-6" />
          යුදෙව්වරුන් බයිබලයේ මුල් ගිවිසුම පමණක් දේවානුභාවයෙන් ලියැවී ඇති බව
          පිළිගන්න නමුත් එකම කතා පුවතක් එකම සංදර්භයක් අනුව ගලායන නිසා මේක
          දේවානුභාවයෙන් ලියැවී ඇති බව අපි පිළිගනිමු. මොකද උප්පත්ති පොතේ පටන්
          ගන්නා අහස පොළොව එළිදරව් පොතේ තමා නැවතත් කතා කරන්නේ.
        </p>
      </section>
    </div>
  );
}

export default Facts;
