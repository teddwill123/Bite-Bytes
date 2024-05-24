import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-4 bg-[#030712] text-gray-300'>
        <div className='grid grid-cols-3'>
            <div className='col-span-1 text-center'>
                <p className='py-12 lg:text-2xl'>Welcome to <br/> <span className='font-bold text-orange-500'>Bite Byte</span></p>
                {/* icons */}
                <p className='text-[20px] sm:text-2xl lg:text-2xl'>Follow us on:</p>
                <div className='flex py-4 gap-3 justify-center'>
                    < FaFacebookSquare size={30}/>
                    < FaInstagramSquare size={30} />
                    < FaTwitterSquare size={30}/>
                </div>
            </div>
            
            <div className='grid grid-cols-2 lg:grid-cols-3 col-span-2 py-12'>
                <div className=''>
                    <h3 className='text-gray-500 py-2 text-center'>PRODUCT</h3>
                    <ul className='text-center'>
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>FQA</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-500 py-2 text-center'>LEGAL</h3>
                    <ul className='text-center'>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Licenses</li>
                        <li>Careers</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-500 py-2 text-center'>ABOUT</h3>
                    <ul className='text-center'>
                        <li>Company</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Tutorials</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        <p className='mt-12 text-center text-gray-500 lg:text-2xl'>&copy;Bite Bytes All Right Reserved</p>
    </div>
  )
}

export default Footer
