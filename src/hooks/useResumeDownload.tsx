
import { useRef, useMemo } from 'react';
import { ResumeData } from '../lib/resumeBuilder';
import { ResumeTemplate } from '../components/resume/ResumeTemplate';
import { useReactToPrint } from 'react-to-print';

export function useResumeDownload(data: ResumeData) {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.name.replace(/\s+/g, '_')}_Resume`,
    removeAfterPrint: true,
  });

  // Memoized hidden resume component
  const HiddenResume = useMemo(() => {
    return function HiddenResumeComponent() {
      return (
        <div style={{ display: 'none' }}>
          <ResumeTemplate ref={componentRef} data={data} />
        </div>
      );
    };
  }, [data]);

  return { handleDownload, HiddenResume };
}
