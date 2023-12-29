import React from 'react'
import Nav from '../components/nav'
import Allpost from './allpost'

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

const allPostPages = (props) => {
  return (
    <div>
        <Nav></Nav>
        <div>
            <Allpost posts={DUMMY_POSTS}></Allpost>
        </div>
    </div>
  )
}

export default allPostPages