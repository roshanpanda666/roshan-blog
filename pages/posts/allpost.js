import React from 'react'
import PostGrid from '../post-g/post-grid'

const Allpost = (props) => {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <div className='font-mono text-3xl bg-gradient-to-r from-cyan-400 via-violet-600 to-violet-700 bg-clip-text text-transparent filter drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-10'>
            All Posts

            </div>
        </div>
        <div>
            <PostGrid posts={props.posts}></PostGrid>
        </div>
    </div>
  )
}

export default Allpost