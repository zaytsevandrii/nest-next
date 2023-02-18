import React from "react"
import { useState } from "react"
import Link from "next/link"

const Navigate = ({children}) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true)

    const handleSubMenuClick = () => {
        setIsSubMenuOpen(!isSubMenuOpen)
    }

    const handleMenuItemClick = () => {
        setIsSubMenuOpen(false)
    }
    return (
      <>
        <nav>
            <ul>
                <li style={{background:'blue',width:'150px'}} onMouseEnter={handleSubMenuClick} onMouseLeave={handleSubMenuClick}>
                    <a href="#">Menu</a>
                    {isSubMenuOpen && (
                        <ul className="subMenu">
                            <li onClick={handleMenuItemClick}>
                                <Link href="/page1">
                                    Page 1
                                </Link>
                            </li>
                            <li onClick={handleMenuItemClick}>
                                <Link href="/page2">
                                   Page 2
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
        <div>{children}</div>
        </>
    )
}

export default Navigate

/* 

export default function NavigationMenu() {
 

  return (
    
  );
} */
