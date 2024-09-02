import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

import creditcard from '../../../assets/credit-cards.webp'
import { motion } from 'framer-motion';



const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company detail section */}

          <div className='space-y-6'>
            <h1 className='text-3xl font-bold uppercase'>
              Coders Cafe
            </h1>

            <p className='text-sm max-w-[300px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero commodi odio voluptatem repudiandae non officia rem adipisci porro laboriosam.

            </p>
            <div>
              <p className='flex items-center gap-2'>
                <FaPhone />
                +92 (123) 456-7890

              </p>
              <p className='flex items-center gap-2 mt-2'>
                {" "}

                <FaMapMarkerAlt /> Karchi, Gulistan-e-Johar


              </p>
            </div>

          </div>
          {/* footer links  */}
          <div className='space-y-6' >
            <h1 className='text-3xl font-bold'> Quick Links</h1>
            <div className='grid grid-cols-2 gap-3 '>
              {/* first col section */}
              <div>
                <ul className='space-y-2'>
                  <li>Home</li>
                  <li>About Us </li>
                  <li>Contact Us</li>
                  <li>Privacy Policy </li>
                </ul>
              </div>
              {/* second col section */}
              <div>
                <ul className='space-y-2'>
                  <li>Home</li>
                  <li>About Us </li>
                  <li>Contact Us</li>
                  <li>Privacy Policy </li>
                </ul>
              </div>


            </div>

          </div>
          {/* social links */}
          <div className='space-y-6'>
            <h1 className='text-3xl font-bold'>Follow Us</h1>
            <div className='flex items-center gap-3'>
              <FaFacebookF className='text-3xl hover:scale-105 duration-300' />
              <FaInstagram className='text-3xl hover:scale-105 duration-300' />
              <FaGoogle className='text-3xl hover:scale-105 duration-300' />
              <FaTwitter className='text-3xl hover:scale-105 duration-300' />

            </div>
            <div>
              <h1 className='text-xl font-semibold mb-2'>Payments Methods</h1>
              <img src={creditcard} alt='credit cards' className='w-[80px]'/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer