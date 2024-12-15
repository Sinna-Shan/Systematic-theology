import Container from "../../../components/Container";
import Heading from "../../../components/Heading";
import Ul from "../../../components/Ul";
function Hosea() {
  return (
    <section className="p-2">
      <Container>
        <p>
          හොෂයා නැමැති අනාගතවක්තෘවරයාට දෙවියන් වහන්සේ විසින් තම ගමේ සිටින
          ගෝමේර්නම් වෛශ්‍යාත්‍රියව මිලයට ගෙන විවාහ කර ගැනීම පිණිස වෛශ්‍යා කමින්
          මුදවා ගත්තේය. එනමුත් නැවතත් එම ස්ත්‍රිය වෛශ්‍යාකමට හැරී ගියේය.
        </p>
        <Heading type="h3">මෙම යුවළට දරුවන් තිදෙනෙක් ලැබිණි.</Heading>
        <Ul
          values={[
            "යෙස්‍රෙයෙල් - ලේ වැගිරීමට සුදුසු - මරණයට සුදුසු",
            "ලෝ-රුහාමා - අනුග්‍රහය නොමැති.",
            "ලෝ - අම්මී - මගේ ජනතාව නොවේ",
          ]}
        />
      </Container>
    </section>
  );
}

export default Hosea;
