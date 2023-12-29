import React from 'react'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Nav from '../nav'
const Herocomp = () => {
  return (
    <div>
      <Nav></Nav>
      <div className='flex justify-center items-center lg:flex-row-reverse flex-col mt-20 lg:gap-80 gap-y-28 lg:gap-x-60'>

        <div className='flex'>
          <motion.div className='bg-violet-900 rounded-t-full lg:h-96 lg:w-96 h-72 w-72 flex'
          initial={{
            opacity:0
          }}
          whileInView={{

           opacity:1
            
          }}
          >
            
            <Image
            src='/mep.png'
            width={500}
            height={500}
            className='-mt-10 -ml-5'
            >

            </Image>
          </motion.div>
        </div>
        

        <div className='flex-row lg:w-[40vw] w-[90vw] text-center lg:text-start'>
          <div className='font-mono text-gray-400 text-1xl lg:text-3xl'>hey everyone</div>
          <div className='flex flex-row gap-3 justify-center items-center lg:justify-start lg:items-start'>
            <span className='lg:text-[6rem] text-[2rem] font-mono'>I'm</span>
            <div className='lg:text-[6rem] text-[2rem] bg-gradient-to-r from-cyan-400 via-violet-600 to-violet-700 bg-clip-text text-transparent filter drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] font-mono '>
            <Typewriter
            words={['Sabyasachi', 'Coder', 'Designer', 'learner']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
            </div>
        
          </div>
          <div className='font-mono text-gray-500 '>
            i am a full stack developer.<br></br>my domains are in web technology,Ai,<br></br>I love to build things<br></br>my go to stack is Nextjs,mongodb,tailwindcss.
          </div>
        </div>
        
        
      </div>

      <div className='w-full flex justify-center items-center'>
        <div className='border-violet-950 border-2 mt-20 w-72 shadow-[0px_1px_262px_30px_#6b46c1] blur-3xl'></div>
      </div>
        
    </div>
  )
}

export default Herocomp