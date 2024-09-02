import React from 'react'
import WorldMap from '../../../assets/world-map.png';
import { motion } from 'framer-motion';

const WhereToBuy = () => {
    return (
        <div className='container my-6 '>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center '>
                {/* form section */}
                <div className='space-y-8'>
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={
                            {
                                type: "spring",
                                stiffness: 150,
                                damping: 10,
                                delay: 0.2
                            }
                        }

                        className='text-4xl font-bold text-darkGray '>Buy our products from anywhere</motion.h1>

                    {/* first input */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={
                            {
                                type: "spring",
                                stiffness: 150,
                                damping: 10,
                                delay: 0.4
                            }
                        }
                        className='flex item-center gap-4'>
                        <input type='text' placeholder='Name' className='input-style w-full lg:w-[150px]' />
                        <input type='email' placeholder='Email' className='input-style w-full' />
                    </motion.div>

                    {/* second input */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={
                            {
                                type: "spring",
                                stiffness: 150,
                                damping: 10,
                                delay: 0.6
                            }
                        }

                        className='flex item-center gap-4'>
                        <input type='text' placeholder='Country' className='input-style w-full' />
                        <input type='text' placeholder='zip code ' className='input-style w-full lg:w-[150px]' />
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={
                            {
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.8
                            }
                        }


                        className='primary-btn w-full'>
                        Order Now
                    </motion.button>

                </div>
                {/* world map section */}
                <div className='col-span-2'>
                    < motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={
                            {
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 1
                            }
                        }


                        src={WorldMap} alt='' className='w-full sm:w-[500px] mx-auto' />


                </div>
            </div>
        </div>
    )
}

export default WhereToBuy