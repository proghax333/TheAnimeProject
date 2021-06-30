import React from 'react'

const infoCardClass = `
  overflow-hidden
  h-full
  rounded-md
`;

const imageClass = `
  object-cover
`;

const titleClass = `
  text-indigo-100
  w-full
  text-center
  p-2
  text-sm
  bg-gray-800
`;

function InfoCard({name, img, id, ...props}) {
  return (
    <div
      className={infoCardClass}
    >
      <div className="h-full m-2 overflow-hidden 
      flex flex-col 
      transform transition duration-75
      hover:scale-105">
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
