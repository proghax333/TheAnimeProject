
import React, { useState } from 'react'
import './NavBar.css';

function NavItem({children}) {
  return <li className="NavItem">{children}</li>
}

function NavBar() {
  const [ hidden, setHidden ] = useState(true);
  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="flex bg-gray-800 w-full rounded-md p-2 flex-col items-center justify-evenly md:flex-row md:justify-evenly
    shadow-sm">
      <div className="flex w-full md:w-auto items-center justify-between position-relative px-3 md:w-auto">
        <p className="NavTitle text-blue-200 text-lg p-2 md:p-0 flex items-center justify-center font-semibold">Project Anime</p>
        <div className="NavButton text-indigo-200 w-8 h-8 shadow-md select-none flex justify-center items-center md:hidden" onClick={toggleHidden}><span className={`fas ${hidden ? 'fa-bars' : 'fa-times'}`}></span></div>
      </div>
      <div className={`flex-1 flex flex-col w-full md:w-auto ${hidden ? 'hidden' : ''} md:flex md:flex-row md:justify-end md:relative`}>
        <ul className="flex flex-col md:flex-row list-none items-center justify-evenly text-sm w-full md:w-auto">
          <NavItem>Home</NavItem>
          <NavItem>Categories</NavItem>
          <NavItem>Trending</NavItem>
          <NavItem>Your Account</NavItem>
          <NavItem>Login</NavItem>
        </ul>
        <div className="p-2 w-full flex justify-center items-center md:w-auto">
          <form className="flex items-center justify-center w-full">
            <input className="p-2 px-4 mx-2 text-md font-thin rounded-md w-full text-sm flex" type="text" placeholder="Search Term" />
            <input className="p-2 px-4 rounded-md bg-gray-600 text-indigo-100 text-sm flex" type="submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default NavBar

