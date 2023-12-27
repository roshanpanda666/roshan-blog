import React from 'react'
import Link from 'next/link'
import Logo from './logo'

const MainNavigation = () => {
  return (
    <header className='flex justify-center items-center gap-[10vw] lg:gap-[65vw] mt-5'>
        <Link href='/'>
            
                <Logo></Logo>
            
        </Link>
        

        <nav className='flex flex-row gap-10'>
          
                <div className='font-mono hover:text-violet-500 text-2xl'>
                    <Link href='/posts'>Posts</Link>
                </div>
                <div className='font-mono hover:text-violet-500 text-2xl'>
                    <Link href='/contact'>Contact</Link>
                </div>
          
        </nav>
    </header>
  )
}

export default MainNavigation