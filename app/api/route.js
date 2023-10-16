import { NextRequest, NextResponse } from 'next/server'

//localhost:3000/api
export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const city = searchParams.get('city')
  let url = ''
  if (city) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${process.env.KEY_OPENWEATHERMAP}&units=metric`
  } else {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=Kołobrzeg&APPID=${process.env.KEY_OPENWEATHERMAP}&units=metric`
  }
  console.log(url)
  const res = await fetch(url)

  const data = await res.json()
  return NextResponse.json({ data })
}
