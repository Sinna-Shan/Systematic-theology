import Container from "../../../components/Container";
import Ul from "../../../components/Ul";
function Mark() {
  return (
    <section className="p-2">
      <Container>
        <Ul
          values={[
            "එවකට ලෝකයේ ප්‍රසිද්ධව සිටි ග්‍රීක්වරුන් මුල්කරගෙන ලියැවී ඇත. එම නිසා ඔවුන්ගේ තේජවත් දෙවිවරුන්ට එහා ක්‍රිස්තුස් වහන්සේ සේවකයකු හැටියට (මනුස්සයාට ඉතා කිට්ටු) මාක් තුමා විසින් හඳුන්වා දී ඇත.",
            "ස්වර්ගයේ ගවයකුගේ සලකුණ තබයි.",
          ]}
        />
      </Container>
    </section>
  );
}

export default Mark;
