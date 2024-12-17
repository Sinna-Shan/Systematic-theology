import Container from '../../../components/Container';
import Ul from "../../../components/Ul";
function Matthew() {
  return (
    <section className="p-2">
      <Container>
        {" "}
        <Ul
          values={[
            "ක්‍රිස්තුස් ජේසුස් වහන්සේව යුදෙව්වරුන් බලාපොරොත්තු වූ මෙසියස් නම් රජ හැටියට යුදෙව්වරුන් හට හඳුන්වා දෙනු ලබයි.",
            "ඉතිහාසයේ තොරතුරු පදනම් කරගෙන බොහෝ විශ්ලේෂණාත්මකව ඉදිරිපත් කර ඇත.",
            "එය ස්වර්ගයෙහිදී සිංහයෙකුගේ සලකුණ නිරූපණය කරයි.",
          ]}
        />
      </Container>
    </section>
  );
}

export default Matthew;
