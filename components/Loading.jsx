import React from 'react'

const loading = () => {
  return (
    <div className='fixed top-0 left-0 z-30 h-screen w-full flex justify-center items-center'>
    <img src="/loading.gif" alt="" />
  </div>
  )
}

export default loading