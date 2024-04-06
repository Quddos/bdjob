import React from 'react'

const App = () => {
  const name = 'Quddus';
  const colors = ['blue', 'green', 'purple', ]
  const ramadan = true






  // Returning more than one element 
  return (
    <>
      <div className='text-5xl'>Hello world</div>
      <p>this is {name}</p>

      <ul>
        {colors.map((color, index)=>(
          <li key={index}>{color}</li>
        ))}
      </ul>

      {ramadan && <h1>Dear {name} happy Ramadan</h1>}
    </>
  )
}

export default App