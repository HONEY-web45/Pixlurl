"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
const Navbar = () => {
    const router=usePathname()
  return (
    <div>
   
<nav className='h-20 sm:h-16 bg-gray-900 text-white flex flex-col sm:flex-row items-center px-5  justify-evenly sm:justify-between'>
  <Link href={"/"}> <div className="logo font-bold text-xl">
        Pixlurl
    </div>
    </Link> 
    <div className='flex items-center flex-col sm:flex-row'>

    <ul className='list-none flex gap-3 sm:gap-6  p-3 font-semibold pl-4 sm:pl-8 items-center'>

<Link href="/"><li>Home</li></Link>
<Link href="/about"><li>About</li></Link>
{router!="/shorten" && <Link href="/shorten"><li>Shorten</li></Link>}
<Link href="/contact" className='text-center'><li>Contact</li></Link>

<li className='flex gap-3'>

  {router!="/shorten"  && <Link href="/shorten"><button className='bg-red-500 shadow-lg hidden sm:block px-2 py-1 rounded-3xl'>Try Now</button></Link>}
    {/* <Link href="https://github.com"><button className='bg-red-500 shadow-lg px-2 py-1 rounded-3xl'>Github</button></Link> */}
</li>
    </ul>
    </div>

</nav>
    </div>
  )
}

export default Navbar
