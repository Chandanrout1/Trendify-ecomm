import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'> 
        <Title text1={"Contact "} text2={"Us"}/>
      </div>
      <div className='my-10 flex flex-col justify-center gap-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center gap-6 items-start'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p>83, 8th Floor,<br /> Mittal Chambers, Nariman Point,Mumbai</p>
          <p>Tel: 0-2222844586 <br /> Email: admin@trendify.com</p>
          <p className='font-semibold text-xl text-gray-600 '> Career at forever</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact