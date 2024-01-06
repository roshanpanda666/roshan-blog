import React from 'react'
import Postheader from './Postheader'
import ReactMarkdown from 'react-markdown'


const DUMMY_POSTS=
    {
    slug:"sluggone",
    title:"getting started with next js ",
    image:'mepo.png',
    date:'28-12-23',
    content:'# this is an example text',
}

const Postcontent = () => {
    const imagepath=`/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
  return (
    <div>
        <article className='flex flex-col justify-center items-center mt-10'>
            <div className='font-mono text-3xl text-gray'>
                    article
            </div>
            <div className='mt-10'>
            <div className='text-[1rem]'>
            <Postheader title={DUMMY_POSTS.title} image={imagepath}></Postheader>

            </div>
            <div className='border-2 border-cyan-400 mt-8 lg:w-[70vw]'>

            </div>
            </div>
            
            <div className='flex justify-center items-center lg:w-[70vw] mt-5'>
                <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
            </div>
            
        </article>
    </div>
  )
}

export default Postcontent