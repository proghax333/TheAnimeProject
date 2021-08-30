import React from 'react'

const infoCardClass = `
  h-full
`;

const imageClass = `
  object-cover
`;

const titleClass = `
  text-indigo-100
  w-full
  p-2
  text-center text-sm
  bg-gray-800
`;

function InfoCard({name, img, id, ...props}) {
  return (
    <div
      className={infoCardClass}
    >
      <div className="
        h-full
        overflow-hidden
        rounded-md
        bg-pink-100
        
        flex flex-col 
        justify-end
        transform transition duration-75
        hover:scale-105
        shadow-lg">
        <img
          src={img}
          className={imageClass}
          style={{
            height: '18rem'
          }}
        />
        <p className={titleClass}>{name}</p>
      </div>
    </div>
  )
}

export default InfoCard
