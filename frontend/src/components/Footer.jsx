import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 mt-40 text-sm my-10'>
            {/* left section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias mollitia esse sunt maxime. Nulla eveniet vero quo et praesentium dolorum adipisci necessitatibus ab.</p>
            </div>
            {/* center section */}
            <div className=''>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* right section */}
            <div>
                <p className='text-xl uppercase font-medium mb-5'>Get in Touch</p>
<ul className='flex flex-col gap-2 text-gray-600'>
    <li>+92 3** ********</li>
    <li>dumy@gmail.com</li>
</ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>All Right Reserve.</p>
        </div>
    </div>
  )
}

export default Footer