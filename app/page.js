'use client'

import Form from '@/components/Form'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
export default function Home() {
  const [city, setCity] = useState('Paris')
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/api?city=${city}`)
        const jsonData = (await response.json()).data
        setWeatherData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    e.target[0].value = ''
  }
  console.log(weatherData);
  return (
    <>
    <Navbar handleSubmit={handleSubmit}/>
      <main className='flex min-h-screen flex-col items-center justify-start  pt-[64px]   img'>
      
        {weatherData?.cod === '404' ? (
          <h1>Zła nazwa</h1>
        ) : (
          <div className=' p-8'>
            <div className='flex flex-col justify-center items-center mb-12 text-white'>
            <h1 className='text-3xl   '>{weatherData?.city.name}</h1>
            <p >Country: {weatherData?.city.country}</p>
            </div>
            <div className='bg-sky-500 w-60 h-60 rounded-full flex flex-col items-center justify-center'>
             
            <p className='text-2xl'>{weatherData?.list[12].weather[0].icon}</p>
            <p className='text-2xl'>{weatherData?.list[12].main.temp}°C</p>
            <p className='text-sm'>{weatherData?.list[12].dt_txt}</p>
            </div>
          </div>
        )}
        
      </main>
    </>
  )
}
