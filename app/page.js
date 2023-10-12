
import getData from '@/helper/getData';
import Image from 'next/image'


export default async function Home() {
  
  const post =await getData('kołobrzeg')

  const {city, list}=post

console.log(post);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{city.name}</h1>
      <p>{city.country}</p>
      <p>{list[12].main.temp}</p>
    </main>
  )
}
