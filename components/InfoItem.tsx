import React from 'react';
import { Calendar, MapPin, User, Building, GraduationCap } from 'lucide-react';
import { PERSON_LINKS } from '../constants';

interface Props {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description?: string;
  details?: string[];
  advisors?: string;
  technologies?: string[];
}

const renderAdvisors = (advisors: string) => {
  const parts = advisors.split(/(\s+and\s+|,)/);
  return (
    <>
      Advisors: {parts.map((part, index) => {
        const trimmedPart = part.trim();
        if (PERSON_LINKS[trimmedPart]) {
          return (
            <React.Fragment key={index}>
              <a href={PERSON_LINKS[trimmedPart]} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {trimmedPart}
              </a>
            </React.Fragment>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};


export const InfoItem: React.FC<Props> = ({
  title,
  subtitle,
  location,
  period,
  description,
  details,
  advisors,
  technologies,
}) => {
  return (
    <div className="mb-4 last:mb-0 p-4 rounded-lg bg-white shadow-sm border border-slate-200/50 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary hover:shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-primary">
            {title}
          </h3>
          <div className="text-lg text-secondary font-medium flex items-center gap-2">
            <Building size={16} />
            <span>{subtitle}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-2 md:mt-0 font-mono whitespace-nowrap bg-light px-2 py-1 rounded">
          <Calendar size={14} className="mr-1.5 text-secondary" />
          {period}
        </div>
      </div>

      <div className="flex items-center text-sm text-gray-500 mb-3">
        <MapPin size={14} className="mr-1.5 text-secondary" />
        {location}
      </div>

      <div className="text-secondary leading-relaxed space-y-3">
        {description && <p>{description}</p>}
        
        {details && details.length > 0 && (
          <div className="flex items-start text-sm">
            <GraduationCap size={16} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
            <ul className="list-inside">
              {details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        )}

        {advisors && (
           <div className="flex items-start text-sm text-slate-500 italic">
            <User size={14} className="mr-1.5 mt-0.5 flex-shrink-0" />
            <span>{renderAdvisors(advisors)}</span>
           </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full border border-teal-200 font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};