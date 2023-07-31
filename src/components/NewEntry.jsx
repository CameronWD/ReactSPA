import React from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = () => {
    const {category} = useParams()
    
  return (
    <h3>New entry in {category} category</h3>
  )
}

export default NewEntry