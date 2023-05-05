import React, { useEffect, useState } from "react";
import menuData from '../data.json';
const Header = () => {

    
    return (<>
       {
        <ul>
            {
            menuData?.menu.map( (item,index) => (
                <li key={index}>
                     <span className={item.menuClassName} ></span>
                    <a className="text-decoration-none" href={item.action}>{item.mainMenuName}</a>
                    {item?.submenuList.map(
                        (subItem,ind)=>(
                            <li key={ind} className="subMenu">
                                 <span className={subItem.subMenuClass}></span>
                                <a className="text-decoration-none" href={subItem.action}>
                                 
                                {subItem.subMenuName}</a>
                            </li>
                        )
                    )}
                </li>
            ))
            }
        
        </ul>
       }
    </>
    )
}
export default Header;