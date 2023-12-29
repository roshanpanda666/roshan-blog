import React from 'react'
import Image from 'next/image'
const Postheader = (props) => {
    const{title,image}=props
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
        <div className='mb-10 '>
            <div className='font-mono text-3xl bg-gradient-to-r from-cyan-400 via-violet-600 to-violet-700 bg-clip-text text-transparent filter drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
            '>
            {title}

            </div>
            </div>
            <div className=''>
                <Image src={image} alt={title} width={400} height={350}></Image>
            </div>
            
        </div>
    </div>
  )
}

export default Postheader