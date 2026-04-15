import { SEO } from '../seo';
import ResumeTemplate from '../components/resume/ResumeTemplate';

export default function Resume() {
  return (
    <>
      <SEO
        title="Resume | Junior Jeconia | Bixx Tech"
        description="Professional resume of Junior Jeconia (Bixx / Harshbix), full-stack developer and founder of Farols Digital Solutions. Downloadable PDF."
      />
      <ResumeTemplate data={{}} />
    </>
  );
}
