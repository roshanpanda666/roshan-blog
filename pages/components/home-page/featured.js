import PostGrid from '@/pages/post-g/post-grid'
import React from 'react'

const Featuredcomp = (props) => {
  return (
    <>
        <div className='flex justify-center items-center flex-col'>
            <div className='font-mono text-2xl bg-gradient-to-r from-cyan-400 via-violet-600 to-violet-700 bg-clip-text text-transparent filter drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] '>
                featured posts
            </div>
            <div>
              <PostGrid posts={props.posts}></PostGrid>
            </div>
        </div>
    </>
    
  )
}

export default Featuredcomp