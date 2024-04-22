import React from 'react'
import { ImAirplane } from "react-icons/im";
const Hero = ({title ='A Dream out of Your Region', subtitle='Find the Best job Acrosses border that fits your skills and needs'}) => {
  return (
    <>
         <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          > <ImAirplane className='inline text-m mb-1 mr-1' />
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>

    </>
  )
}
export default Hero