import Container from "../../../components/Container";
import Heading from "../../../components/Heading"
function Romans() {
  return (
    <section className="p-2">
      <Container>
        <p>
          පවුල් තුමා විසින් ආරම්භ කරන ලද සභාවලින් ඉතා වැදගත් අභියෝගාත්මක සභාව
          ලෙස රෝම සභාව හැඳින්වේ. එයට හේතුව නම් එවකට පැවති රෝම අධිරාජ්‍යයේ
          ක්‍රිස්තියානි සභාව තහනම් කරන ලද සංවිධානයක් ලෙස නම් කර තිබීමයි. එවන්
          වාතාවරණයකදී පාවුල් තුමා පේතර සමඟ රෝමයට ගොස් මෙම සේවාව වර්ධනය කළ බව
          ඉතිහාසය සාක්ෂි දරයි.
        </p>
        <Heading type="h3">රෝම පොත කොටස් දෙකකි.</Heading>
        <Container>
          <Heading type="h3">
            1 වැනි පරිච්ඡේදයේ සිට 11 වැනි පරිච්ඡේදය දක්වා.
          </Heading>
          <p>
            ක්‍රිස්තුස් වහන්සේගේ ශුද්ධ සභාව තුළ පැවැත්විය යුතු ප්‍රධාන
            මූලධර්මයන් හඳුන්වා දී ඇත.
          </p>
        </Container>
        <Container>
          <Heading type="h3">
            12 වැනි පරිච්ඡේදයේ සිට 16 වැනි පරිච්ඡේදය දක්වා
          </Heading>
          <p>ශුද්ධ සභා තුළ ප්‍රායෝගික විනය නීති මුල් කරගෙන එම කොටස ලියැවීඇත.</p>
        </Container>
      </Container>
    </section>
  );
}

export default Romans;
