import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListing from './components/JobListing';

const App = () => {
  





  // Returning more than one element 
  return (
    <>
      <Navbar/>
      <Hero subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListing />
  
   
    
   
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>

    </>
  )
}

export default App