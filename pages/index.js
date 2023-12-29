import React from 'react'
import Herocomp from './components/home-page/hero'
import Featuredcomp from './components/home-page/featured'

const DUMMY_POSTS=[
  {slug:"sluggone",
  title:"getting started with next js ",
  image:'mepo.png',
  excerpt:"getting started with next js ",
  date:'28-12-23'},

  {slug:"sluggone",
  title:"getting started with next js ",
  image:'mepo.png',
  excerpt:"getting started with next js ",
  date:'28-12-23'},

  {slug:"sluggone",
  title:"getting started with next js ",
  image:'mepo.png',
  excerpt:"getting started with next js ",
  date:'28-12-23'},

  {slug:"sluggone",
  title:"getting started with next js ",
  image:'mepo.png',
  excerpt:"getting started with next js ",
  date:'28-12-23'},

  {slug:"sluggone",
  title:"getting started with next js ",
  image:'mepo.png',
  excerpt:"getting started with next js ",
  date:'28-12-23'},

  {slug:"sluggone",
  title:"getting started with next js ",
  image:'mepo.png',
  excerpt:"getting started with next js ",
  date:'28-12-23'}
]
const index = (props) => {
  return (
    <div>
      <Herocomp></Herocomp>
      <Featuredcomp posts={DUMMY_POSTS}></Featuredcomp>
    </div>
  )
}

export default index