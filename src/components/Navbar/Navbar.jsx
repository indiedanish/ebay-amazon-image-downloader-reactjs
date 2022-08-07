import React, {useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'


import './Navbar.scss'

import {images} from '../../constants'
function Navbar() {

    const [toggle, setToggle] = useState(false)
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
           
            <h1>Image Downloader</h1>
        </div>
        <ul className=" app__navbar-links ">
            {['Home','About', 'Contact','Products' ].map((item)=>(
                <li className="app__flex p-text" key={`link-${item}`} >
                    <div/>
                    <a href={`#${item}`} >{item}</a>
                  
                </li>
            )

            ) }
        </ul>

        {/* <div className="app__navbar-menu ">
           <HiMenuAlt4 className="text-white" onClick={()=>{setToggle(true)}} />

            {toggle && (
                <motion.div 
                whileInView={{
                    x: [300,0]
                }}
                transition={{duration: 0.85, ease: 'easeOut' }}
                >
                    <HiX  onClick={()=>{setToggle(false)}} />
                 
                    <ul className="app__navbar-links">
                    {['Home','About', 'Contact','Products' ].map((item)=>(
                <li  key={item} >
                  
                    <a onClick={()=>{setToggle(false)}} href={`#${item}`} >{item}</a>
                  
                </li>
            )

            ) }

            </ul>l
                </motion.div>

            )}


        </div> */}

     
            <h8 className="app__devtag" >
                <a href="https://instagram.com/indiedanish"  >
                Subscribe To Premium
                </a>
            </h8>
        
    </nav>
  )
}

export default Navbar