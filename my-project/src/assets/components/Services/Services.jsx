import React from 'react'
import { easeInOut, motion, stagger, transform } from 'framer-motion'
import coffee1 from '../../Coffee/coffee1.png';
import coffee3 from '../../Coffee/coffee3.png';



const Services = () => {

    const servicesData = [
        {
            id: 1,
            image: coffee1,
            title: "Black Coffee",
            Subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laboriosam ipsum voluptates voluptatibus quas cupiditate,"

        },

        {
            id: 2,
            image: coffee3,
            title: "Hot Coffee",
            Subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laboriosam ipsum voluptates voluptatibus quas cupiditate,"

        },

        {
            id: 3,
            image: coffee1,
            title: "Cold Coffee",
            Subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laboriosam ipsum voluptates voluptatibus quas cupiditate,"

        },
    ]


    // animations for cards and heading 
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,

            transition: {
                type: "spring",
                stiffness: 150,
                damping: 10,
                ease: easeInOut
            },


        },

    };



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.6,
                staggerChildren: 0.4    //for delay between animation
            },
        },
    };

  
    
    return (
        <div className="container my-16 space-y-4 px-4 sm:px-6 lg:px-8">
            {/* header section */}
            <div className='text-center max-w-lg mx-auto space-y-2'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2
                    }}
                    className='text-2xl sm:text-3xl font-bold text-lightGray'>
                    Fresh and <span className='text-primary'>Tasty Coffee</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                        delay: 0.6
                    }}
                    className='text-sm opacity-50'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                    laudantium aliquam veniam repudiandae quae omnis consequatur explicabo
                    nemo qui
                </motion.p>
            </div>

            {/* card section */}
            <motion.div
                // variants={containerVariants}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true, amount: 0.8 }} 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4
                }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

                {servicesData.map((service) => (
                    <motion.div
                        key={service.id}
                        variants={cardVariants}
                        className='text-center p-4 space-y-6'>
                        <img src={service.image} alt={service.title} className='img-shadow2 w-full max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' />
                        <div className='space-y-2'>
                            <h1 className='text-lg sm:text-xl font-bold text-primary'>{service.title}</h1>
                            <p className='text-sm text-darkGray'>{service.Subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );

}

export default Services