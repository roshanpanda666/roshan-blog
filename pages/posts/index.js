import React from 'react'
import Nav from '../components/nav'
import Allpost from './allpost'
import { getAllPost } from '@/lib/posts-util'


const allPostPages = (props) => {
  return (
    <div>
        <Nav></Nav>
        <div>
            <Allpost posts={props.posts}></Allpost>
        </div>
    </div>
  )
}


export function getStaticProps(){
  const featuredPost=getAllPost()

  return{
    props:{
      posts:featuredPost
    }
  }
}

export default allPostPages