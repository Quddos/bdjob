import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  





  // Returning more than one element 
  return (
    <>
      <Navbar/>
      <Hero subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListings />
      <ViewAllJobs/>
  
   
    
   
    

    </>
  )
}

export default App