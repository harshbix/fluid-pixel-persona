import { SEO } from '../seo';
import { ResumeTemplate } from '../components/resume/ResumeTemplate';
import { buildResumeData } from '../lib/resumeBuilder';

export default function Resume() {
  const resumeData = buildResumeData();

  return (
    <>
      <SEO
        title="Resume | Junior Jeconia | Bixx Tech"
        description="Professional resume of Junior Jeconia (Bixx / Harshbix), full-stack developer and founder of Farols Digital Solutions. Downloadable PDF."
      />
      <div className="py-12 px-4 overflow-x-auto">
        <ResumeTemplate data={resumeData} />
      </div>
    </>
  );
}
