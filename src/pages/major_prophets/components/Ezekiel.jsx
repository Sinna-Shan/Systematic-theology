import Container from "../../../components/Container";
import Ul from "../../../components/Ul";
function Ezekiel() {
    return (
      <section className="p-2">
        <Container>
          <p>
            එසකියල් යනු බබිලෝනියාවේ වහල්කමට ගෙන ගිය පූජකයන් කණ්ඩායමේ පූජකයෙකි.
            ඔහු විසින් මෙම පොත ලියනු ලබන්නේ වහල්කම තුළ සිටියදීමයි. එසකියල් පොතේ
            අනාගත වාක්‍ය කොටස් තුනකට බෙදා ඇත.
          </p>
          <Ul
            values={[
              "වාල්කමට එන්ට සිටිය යුදෙව්වරුන් ගැන අනාගත වාක්‍යය(ක්‍රිස්තු පූර්ව 586 විනාශය ගැන)",
              "ලෝක ඉතිහාසය ගැන අනාගත වාක්‍ය(විවිධ රාජ්‍යයන්වල පත්වීම්)",
              "ස්වර්ගය සහ එහි සිදුවීම් ගැන අනාගත වාක්‍යය(ස්වර්ගයේ ජීවත් වෙන මනුෂ්‍යයන් ගැන)",
            ]}
          />
        </Container>
      </section>
    );
}

export default Ezekiel
