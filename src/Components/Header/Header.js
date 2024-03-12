import React from 'react'
import "./Header.css"
import TwitchIcon from '../../Images/twitch-icon.png'
import ProfileImage from '../../Images/profile-picture.webp'
import { CiMenuKebab, CiBatteryCharging } from "react-icons/ci";
import { AiTwotoneMail } from "react-icons/ai";
import { BiMessageAlt, BiDiamond } from "react-icons/bi";
import { IoSearch, IoCopyOutline, IoHeartOutline } from "react-icons/io5";



const Header = () => {
  return (
    <div className='header'>
      <div className='list-1'>
        <img
          src={TwitchIcon}
          alt="Twitch-Icon" />
        <IoCopyOutline className='icon-hidden list-2-icon' />
        <IoHeartOutline className='icon-hidden list-2-icon' />
        <div>Following</div>
        <div>Browse</div>
        <CiMenuKebab className='header-icon' />
      </div>
      <div className="header-search"> <input type='search' placeholder='Search' />
        <IoSearch className='header-icon' />
      </div>
      <div className='list-2'>
        <AiTwotoneMail className='list-2-icon' />
        <BiMessageAlt className='list-2-icon' />
        <BiDiamond className='list-2-icon' />
        <div><CiBatteryCharging className='list-2-icon' /> <div>Get Ad Free</div> </div>
        <img
          src={ProfileImage}
          alt="Profile-Icon" />
      </div></div>
  )
}

export default Header