

async function getData(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=96d145cbc67ffa8619b24c37dd8a0cab&units=metric`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export default getData