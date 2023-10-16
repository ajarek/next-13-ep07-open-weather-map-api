'use client'
import React from 'react'

const Form = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=''
    >
      <input
        type='text'
        placeholder='City name...'
        autoFocus
        className='input '
      />
      <button
        className='btn'
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}

export default Form
