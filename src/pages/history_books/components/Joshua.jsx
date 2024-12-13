import Container from "../../../components/Container";
import Ul from "../../../components/Ul";

function Joshua() {
  return (
    <section className="p-1">
      <Container>
        <p>
          මෝසෙස්ගේ අවසානයෙන් පසු යෝෂුවා නමැති තරුණ සේවකයා සෙනඟට නායකත්වය දෙන
          පිණිස දෙවියන් වහන්සේ තෝරා පත් කළ සේක. ඒ අනුව ඔහු විසින් සෙනඟ පොරොන්දු
          දේශය කරා මග පෙන්වන පිණිස වගකීම බාරගන්නා ලදී. තමා විසින් ගත් එම වගකීම්
          නිවැරදිව සම්පූර්ණ කිරීමට යොෂුවාට හැකි විය.
        </p>

        <h3 className="pt-2 font-bold text-gray-100 sm:pt-4 sm:text-xl md:text-2xl lg:text-3xl lg:pt-6 lg:pb-4">
          ඒ අනුව යොෂුවා පොත කොටස් දෙකකට වෙන් කර ඇත.
        </h3>

        <Ul
          values={[
            "1 පරිච්ඡේදයේ සිට 12 වැනි පරිච්ඡේදය දක්වා",
            "13 වැනි පරිච්ඡේදයේ සිට 24 වැනි පරිච්ඡේදය දක්වා",
          ]}
        />

        <h3 className="pt-3 font-bold text-gray-100 sm:pt-4 sm:pb-2 sm:text-xl md:text-2xl lg:text-3xl lg:pt-6 lg:pb-4">
          1 පරිච්ඡේදයේ සිට 12 වැනි පරිච්ඡේදය දක්වා
        </h3>
        <p>
          යෝර්දාන් ගඟ දෙබෑ කරමින් යෙරිකෝව ජයගෙන ක්‍රමක්‍රමයෙන් පොරොන්දු දේශය කරා
          ළඟා වීමයි.
        </p>

        <h3 className="pt-3 font-bold text-gray-100 sm:pt-4 sm:pb-2 sm:text-xl md:text-2xl lg:text-3xl lg:pt-6 lg:pb-4">
          13 වැනි පරිච්ඡේදයේ සිට 24 වැනි පරිච්ඡේදය දක්වා
        </h3>
        <p>
          අල්ලා ගත් දේශය ගෝත්‍ර දොළහකට හරියාකාරව බෙදා දක්වමින් ලෙවිවරුන්ටද ලෙවී
          නගර <span className="text-amber-400">48</span>ක් ලබා දෙමින් දේශය බෙදා
          වෙන් කොට දෙවියන් වහන්සේගේ සැලැස්ම සම්පූර්ණ කළ සේක.{" "}
          <span className="text-amber-400">
            (යොශුවාගේ ජීවිත කාලය අවුරුදු 110 ය)
          </span>
        </p>

        <h3 className="pt-3 font-bold text-gray-100 sm:pt-4 sm:text-xl md:text-2xl lg:text-3xl lg:pt-6">
          ගෝත්‍ර දොළහ
        </h3>
        <Ul
          values={[
            "රූබෙන්",
            "සිමියොන්",
            "යුදා(කාලෙබ් හෙබෝන්)",
            "ඉස්සාඛාර්",
            "සාබුලෝන්",
            "ඒප්‍රයිම් (ලෙවී)",
            "මනස්සේ (යෝසෙප්)",
            "බෙන්ජමින්",
            "දාන්",
            "නප්තලී",
            "ගාද්",
            "ආශෙර්",
          ]}
        />
      </Container>
    </section>
  );
}

export default Joshua;
