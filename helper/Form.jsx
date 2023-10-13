'use client'
import React from 'react'

const Form = ({handleSubmit}) => {
 
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form