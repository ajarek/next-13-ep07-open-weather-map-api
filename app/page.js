'use client'

import Form from '@/components/Form'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Loading from '@/components/Loading'
export default function Home() {
  const [city, setCity] = useState('Paris')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/api?city=${city}`)
        const jsonData = (await response.json()).data
        setWeatherData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    e.target[0].value = ''
  }
  
  return (
    <>
    
    <Navbar handleSubmit={handleSubmit}/>
    {loading===true?<Loading/>:(
      <main className='flex min-h-screen flex-col items-center justify-start  pt-[64px]   img'>
      
        {weatherData?.cod === '404' ? (
          <h1 className='text-red-500 text-3xl font-bold mt-32'>Wrong name!</h1>
        ) : (
          <div className=' p-8'>
            <div className='flex flex-col justify-center items-center mb-12 text-white'>
            <h1 className='text-3xl   '>{weatherData?.city.name}</h1>
            <p >Country: {weatherData?.city.country}</p>
            </div>
            <div className='bg-sky-300 opacity-75  w-60 h-60 rounded-full flex flex-col items-center justify-center'>
             <img src={`images/${weatherData?.list[0].weather[0].icon||'settings'}.svg`} alt="icon" />
            <p className='text-2xl'>{weatherData?.list[0].main.temp}°C</p>
            <p className='text-sm'>Pressure: {weatherData?.list[0].main.pressure}hPa</p>
            <p className='text-sm'>Humidity: {weatherData?.list[0].main.humidity}%</p>
            <p className='text-sm'>Wind: {weatherData?.list[0].wind.speed}m/s</p>
            </div>
          </div>
        )}
        
      </main>
    )}
    </>
  )
}
