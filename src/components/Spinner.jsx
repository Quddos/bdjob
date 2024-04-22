import React from 'react'
import ClipLoader from 'react-spinners/CircleLoader'

const Spinner = ({loading}) => {
    const override={
        display: 'block',
        margin: '100px auto',
    }
  return (
    <ClipLoader
      
      size={100}
      color="yellow"
      loading={loading}
      cssOverride={override}
    />
  )
}

export default Spinner