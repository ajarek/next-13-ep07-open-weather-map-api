
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/my-logo.png'
import Form from '@/components/Form'


export default  function Navbar({handleSubmit}) {
  
  return (
    <nav className='fixed top-0 left-0 z-20  h-16 w-full flex items-center justify-between px-4 border-b-2 border-blue-700'>
      <Image
        src={Logo}
        alt='my logo'
        width={40}
       
        placeholder='blur'
        quality={100}
      />
      <div>
        <Form handleSubmit={handleSubmit}/>
      </div>
      
      
    </nav>
  )
}