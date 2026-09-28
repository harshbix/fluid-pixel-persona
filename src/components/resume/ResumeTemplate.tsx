import React from 'react';
import { ResumeData } from '../../lib/resumeBuilder';
import { useLanguage } from '../../context/LanguageContext';

export const ResumeTemplate = React.forwardRef<HTMLDivElement, { data: ResumeData }>(
  ({ data }, ref) => {
    const { t } = useLanguage();

    return (
      <div ref={ref} className="bg-white text-neutral-900 w-[210mm] min-h-[297mm] p-12 font-sans mx-auto rounded-2xl shadow-xl" style={{ fontFamily: 'system-ui, sans-serif' }}>
        {/* Header */}
        <div className="flex items-center gap-8 mb-10">
          {data.image ? (
            <img src={data.image} alt={`${data.name} professional headshot`} className="w-28 h-28 rounded-full object-cover border border-neutral-200" />
          ) : (
            <div className="w-28 h-28 rounded-full bg-neutral-200 flex items-center justify-center text-4xl font-light">
              {data.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
          )}
          <div>
            <h1 className="text-4xl font-light tracking-tight mb-1">{data.name}</h1>
            <h2 className="text-lg uppercase tracking-widest text-neutral-500 mb-2">{data.role}</h2>
            <div className="text-sm text-neutral-500 flex flex-wrap gap-4">
              <span>{data.contacts.email}</span>
              <span>{data.contacts.phone}</span>
              <span>{data.contacts.location}</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{t("resumePage.about")}</div>
          <div className="text-base text-neutral-700 leading-relaxed">{data.bio}</div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{t("resumePage.skills")}</div>
          <div className="flex flex-wrap gap-2">
            {data.skills.map(skill => (
              <span key={skill} className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium border border-neutral-200">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{t("resumePage.experience")}</div>
          <div className="space-y-4">
            {data.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-neutral-800">{exp.role}</span>
                  <span className="text-xs text-neutral-400">{exp.duration}</span>
                </div>
                <div className="text-sm text-neutral-600 mb-1">{exp.company}</div>
                <ul className="list-disc list-inside text-xs text-neutral-500 space-y-1">
                  {exp.achievements.map((ach, j) => (
                    <li key={j}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{t("resumePage.projects")}</div>
          <div className="space-y-2">
            {data.projects.map((proj, i) => (
              <div key={i}>
                <span className="font-semibold text-neutral-800">{proj.title}</span>
                <span className="text-xs text-neutral-400 ml-2">{proj.tags?.join(', ')}</span>
                <div className="text-sm text-neutral-600">{proj.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t pt-4 mt-8 flex flex-wrap gap-4 text-xs text-neutral-400">
          {data.contacts.socials.map((s, i) => (
            <a key={i} href={s.url} className="hover:underline" target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
      </div>
    );
  }
);
ResumeTemplate.displayName = 'ResumeTemplate';
