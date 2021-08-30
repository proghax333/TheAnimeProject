import React from 'react';
import Section from '@/components/Section';
import InfoCard from '@/components/InfoCard';

function HomePage() {
  return (
    <div className="">
      <Section name="Trending Shows">
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
      </Section>
      <Section name="Most Viewed">
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
      </Section>
      <Section name="Top Rated">
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
        <InfoCard
          name="My Hero Academia"
          img="https://i.pinimg.com/736x/fd/8a/77/fd8a77d4818d1d383521164a0fc304c9.jpg"
          id={1234}
        />
      </Section>
    </div>
  );
}

export default HomePage;
