import React from 'react'
import Postheader from './Postheader'

const DUMMY_POSTS=
    {slug:"sluggone",
    title:"getting started with next js ",
    image:'mepo.png',
    date:'28-12-23',
    content:"# this is an example text"
}

const Postcontent = () => {
    const imagepath=`/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-10'>
            <div className='font-mono text-3xl text-gray'>
                    article
            </div>
            <div className='mt-10'>
                <Postheader title={DUMMY_POSTS.title} image={imagepath}></Postheader>
            <div className='border-2 border-cyan-400 mt-8 w-[70vw]'>

            </div>
            </div>
            
            <div className='w-[70vw] mt-5'>
            dumy content            
            </div>
        </div>
    </div>
  )
}

export default Postcontent