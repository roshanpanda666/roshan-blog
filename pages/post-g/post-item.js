import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const PostItem = (props) => {
    const{post}=props

    if (!post) {
        return null; // or handle the case where post is not available
      }
      
    const{title,image,excerpt,date,slug}=props.post
    const formateddate=new Date(date).toLocaleString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })

    

    const imagepath=`/images/posts/${slug}/${image}`

    const linkpath=`/posts/${slug}`
  return (
    <motion.div className='flex justify-center items-center border-2 border-cyan-400 rounded-lg hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
    whileHover={{
        y:-10
    }}
    >
        <Link href={linkpath}>
        <div>
            <div><Image src={imagepath} alt="title" width={300} height={200}></Image></div>
            <div>{title}</div>
            <div>{formateddate}</div>
            <div>{excerpt}</div>
        </div>
        </Link>

    </motion.div>
  )
}

export default PostItem