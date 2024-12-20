import Container from "../../../components/Container";
import Ul from "../../../components/Ul";

function Leviticus() {
  return (
    <section className="p-2">
      <Container>
        <p>
          මිසරයෙන් පිටත් වූ සෙනඟ ගමන ආරම්භ කළ පසු ප්‍රථම වතාවට දෙවියන් වහන්සේ
          විසින් තමාගේ වැඩය කරන පිණිස පූජකවරුන් කණ්ඩායමක් තෝරා ගන්ට තීන්දු කරන
          ලදී. ඒ අනුව ලෙවිවරුන්ගේ ගෝත්‍රය දෙවියන් වහන්සේගේ පූජකයන් ලෙස නම්කර එම
          පූජකයන් එදිනෙදා ජීවත් විය යුතු ආකාරය සහ පූජකයන් ලෙස ඔවුන්ගේ වගකීම්
          පිළිබඳව දෙවියන් වහන්සේ විසින් අණපනත් ප්‍රකාශ කරන ලදී. ඒ අනුව පූජකයන්ට
          පැවරෙන ප්‍රධාන වගකීම වන්නේ පූජාවන් පැවැත්වීමයි. එම පූජා වර්ග පහක්
          සඳහන් කර ඇත.
        </p>

        <Ul
          values={[
            "දවන පූජාව",
            "පාප පූජාව",
            "අපරාධ පූජාව",
            "සමාදාන පූජාව",
            "ආහාර පූජාව",
          ]}
        />
      </Container>

      <Container>
        <p>
          තවද ලෙවිවරුන්ට ලියන ලද මෙම පොත තුල නීති මාලාවක්ද ඔවුන්ට හඳුන්වා දී ඇත
          ඒවා කොටස් කිහිපයකට වෙන්කර ගත හැකිය.
        </p>

        <Ul values={["සෞඛ්‍ය නීති", "ආහාර නීති", "සදාචාරාත්මක නීති"]} />
      </Container>
    </section>
  );
}

export default Leviticus;
