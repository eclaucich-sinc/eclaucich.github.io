import React from 'react';
import { BookOpen } from 'lucide-react';
import { Publication } from '../types';
import { PERSON_LINKS } from '../constants';

const renderAuthors = (authors: string) => {
  // Split by separators (", ", " & ") while keeping them in the resulting array.
  const parts = authors.split(/(, | & )/);

  return (
    <>
      {parts.map((part, index) => {
        // If the part is a separator, just render it as text.
        if (part === ', ' || part === ' & ') {
          return <React.Fragment key={index}>{part}</React.Fragment>;
        }

        const trimmedPart = part.trim();
        const isMe = trimmedPart === 'Estanislao Claucich';
        const link = PERSON_LINKS[trimmedPart];
        
        let className = 'transition-colors';
        if (isMe) {
          className += ' font-bold text-dark';
        } else if (link) {
          className += ' text-slate-700 hover:text-primary hover:underline';
        }

        const authorElement = link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
            {trimmedPart}
          </a>
        ) : (
          <span className={isMe ? 'font-bold text-dark' : ''}>{trimmedPart}</span>
        );

        return <React.Fragment key={index}>{authorElement}</React.Fragment>;
      })}
    </>
  );
};

export const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => {
  const TitleComponent = pub.url ? 'a' : 'h4';

  return (
    <div className="mb-4 last:mb-0 p-4 rounded-lg bg-white shadow-sm border border-slate-200/50 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-accent hover:shadow-md">
      <div className="flex items-start gap-4">
        <BookOpen className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
        <div>
          <TitleComponent
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-primary leading-snug hover:underline"
          >
            {pub.title}
          </TitleComponent>
          <p className="text-sm text-secondary mt-1.5">
            {renderAuthors(pub.authors)}
          </p>
          <div className="flex items-center gap-3 mt-2.5">
            <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
              {pub.year}
            </span>
            <span className="text-sm text-secondary italic">
              {pub.venue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
