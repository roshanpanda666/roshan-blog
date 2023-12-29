import React from 'react'
import PostItem from './post-item'

const PostGrid = (props) => {
    const{posts}=props
  return (
    <div>
        <div className=' mt-14 flex flex-wrap gap-10 justify-center items-center text-center'>
        {posts && posts.map((post) => (<PostItem key={post.slug} post={post} />))}

        </div>
    </div>
  )
}

export default PostGrid