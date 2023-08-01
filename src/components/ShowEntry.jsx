import React from 'react'

const ShowEntry = ({entry}) => {
  return entry ? (
  <>
  <h5>{content}</h5>
  <p>Posted in {category}</p>
  </>
  ) : ( 
    <p>Entry not found! </p>
  )
}

export default ShowEntry