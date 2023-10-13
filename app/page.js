'use client'

import Form from "@/helper/Form";
import { useEffect, useState } from "react";



export default  function Home() {
  const [city, setCity] = useState("Paris");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(()=>{
  async function fetchData() {
    try {
      const response = await fetch(
        `http://localhost:3000/api?city=${city}`
      );
      const jsonData = (await response.json()).data;
      setWeatherData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData()
},[city])

   const handleSubmit=(e)=>{
    e.preventDefault()
    setCity(e.target[0].value)
    e.target[0].value=''
   }
  
  return(
    <>
      
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {weatherData?.cod==='404'?
      <h1>Zła nazwa</h1>
      :
      <div>
     <h1>{weatherData?.city.name}</h1>
      <p>{weatherData?.city.country}</p>
      <p>{weatherData?.list[12].main.temp}</p>
      </div>
      
      }
      <Form handleSubmit={handleSubmit}/>

    </main>
    
    </>
  )
}
