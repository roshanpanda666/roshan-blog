import React from 'react'
import Herocomp from './components/home-page/hero'
import Featuredcomp from './components/home-page/featured'
import PostGrid from './components/theposts/post-grid'

const index = () => {
  return (
    <div>
      <Herocomp></Herocomp>
      <Featuredcomp></Featuredcomp>
      <PostGrid></PostGrid>
    </div>
  )
}

export default index