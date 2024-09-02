import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { motion } from 'framer-motion';
const Navbar = ({slidebar , setSlidebar}) => {
    return (
        <nav className='absolute top-0 left-0 w-full  pt-10 text-white z-20'>
            <div className='container'>

                <div className='flex justify-between items-center'>
                    {/* logo section */}
                    <motion.h1 
                    
                    initial={{ opoacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                        delay:0.2
                    }}
                    
                    className='text-2xl font-semibold uppercase '>
                        <span className='text-primary'>coders</span>cafe
                    </motion.h1>

                    {/* hamburger section */}
                    <motion.div 
                     initial={{ opoacity: 0, y: 100 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{
                         type: 'spring',
                         stiffness: 100,
                         damping: 10,
                         delay:0.4,

                        }}
                       
                        // onclick if the slidebar is not open or false set slidebar to trur or open 
                        onClick ={()=> setSlidebar(!slidebar)}
                    
                    >
                    <GiHamburgerMenu className=" text-3xl cursor-pointer"/>

                    </motion.div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar