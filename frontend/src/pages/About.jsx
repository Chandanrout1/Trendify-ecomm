import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About "} text2={"Us"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Choose us for unmatched quality, exceptional customer service, and competitive prices, delivered with a local touch. Experience the difference when you buy from us.</p>
            <b>Our Mission</b>
            <p>Our mission is to revolutionize the fashion industry by creating an immersive, seamless e-commerce experience. We aim to blend style, innovation, and accessibility, offering a platform where customers can discover and shop the latest trends while engaging with fashion in a dynamic, interactive way.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"Why "} text2={"Choose Us"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-700'>Quality Assurance: </b>
          <p> We ensuring the platform functions smoothly and provides a seamless user experience. Since eCommerce involves handling sensitive customer data and financial transactions, the stakes are higher, making QA even more essential</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-700'>Convenience: </b>
          <p>You will get fast and easy navigation, quick checkout options, and multiple payment methods. It includes same-day delivery, in-store pickup, personalized recommendations, and efficient returns. A mobile-friendly design and 24/7 support enhance the experience, ensuring seamless shopping with minimal effort.</p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About