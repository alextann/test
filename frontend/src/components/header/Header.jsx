import React, { useState } from 'react'
import DesktopNav from './DesktopNav';
import logo from "/logo.svg"


 const Header = () => {
    const [hideleft,setHideLeft] = useState("-left-[1000px]");
    const menuItems = ["Home","BMI","about","contact"];

    const onOpen = () => {
        setHideLeft("left-0");
    }
    const onClose = () => {
        setHideLeft("-left-[1000px");

    }
  return (
    <>
    <div className = 'max-[900px]:hidden'>
        <DesktopNav menuItems={menuItems}Logo = {logo}/>
    </div>
    </>
    
  )
}

export default Header