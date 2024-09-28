import React,{ useState} from 'react'
import './navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [hamberger, sethamberger] = useState(true);
    
    return (
        <nav className='nav'>
            <header className='logo'>
                <h1>ES</h1>
            </header>
            <div className="link-container">
                <ul className={hamberger? 'links ':'links show-links'}>
                    <li  onClick={()=>sethamberger(true)}>
                        <a href="#home">Home</a>
                    </li>
                    <li  onClick={()=>sethamberger(true)}>
                        <a href="#work">Work</a>
                    </li>
                    <li onClick={()=>sethamberger(true)}>
                        <a href="#experiance">Experiance</a>
                    </li>
                    <li  onClick={()=>sethamberger(true)}>
                        <a href="#about">About</a>
                    </li>
                    <li onClick={()=>sethamberger(true)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='hambergur' onClick={()=>sethamberger(!hamberger)}>
              {hamberger ?<FaBars color='white' size='30' />:<FaTimes color='white' size='30' />} 
            </div>
        </nav>
    )
}

export default Navbar