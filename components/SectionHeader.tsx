import React from 'react';

interface Props {
  title: string;
  icon: React.ReactNode;
}

export const SectionHeader: React.FC<Props> = ({ title, icon }) => (
  <div className="flex items-center gap-3 mb-8">
    {icon}
    <h2 className="text-2xl font-bold text-dark border-b-2 border-slate-200 pb-2 flex-grow">
      {title}
    </h2>
  </div>
);