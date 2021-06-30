
import React from 'react';
import InfoCard from '@/components/InfoCard';

import './Section.css';

const headingClass = `
  Heading
  text-indigo-100 font-semibold text-lg
  py-2 w-100
  mb-2
  border-b
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
`;

const Section = React.forwardRef(({
  name,
  className,
  ...props
}, ref) => {
  return <section {...props} className={`${className} ${sectionClass}`}>
    <h2 className={headingClass}>{name}</h2>
    <div className={cardsContainerClass}>
      <InfoCard
        name="Naruto"
        img="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
        id={1234}
      />
      <InfoCard
        name="Attack on Titan"
        img="https://i.pinimg.com/originals/7b/3b/1b/7b3b1b0dd0ebb816ad9b14fe93ef1787.jpg"
        id={1234}
      />
      <InfoCard
        name="My Hero Academia"
        img="https://i.pinimg.com/736x/fd/8a/77/fd8a77d4818d1d383521164a0fc304c9.jpg"
        id={1234}
      />
      <InfoCard
        name="Demon Slayer"
        img="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"
        id={1234}
      />
      <InfoCard
        name="JoJo's Bizarre Adventure"
        img="https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_UY1200_CR105,0,630,1200_AL_.jpg"
        id={1234}
      />
      <InfoCard
        name="Steins;Gate"
        img="https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
        id={1234}
      />
    </div>
  </section>
});

export default Section

