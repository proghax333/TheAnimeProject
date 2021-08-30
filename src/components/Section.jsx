
import React from 'react';
import InfoCard from '@/components/InfoCard';

import './Section.css';

const headingClass = `
  Heading
  text-indigo-100 font-semibold text-lg
  py-2 w-100
  mb-4
  border-b
  border-gray-600
`;
const sectionClass = `
  Section
  p-2
`;
const cardsContainerClass = `
  CardsContainer
  grid grid-cols-1
  sm:grid-cols-2
  md:grid-cols-4
  gap-3
`;

const Section = React.forwardRef(({
  name,
  className,
  children,
  ...props
}, ref) => {
  return <section {...props} className={`${className} ${sectionClass}`}>
    <h2 className={headingClass}>{name}</h2>
    <div className={cardsContainerClass}>
      {children}
    </div>
  </section>
});

export default Section

