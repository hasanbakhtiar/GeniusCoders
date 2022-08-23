import React from 'react'

const BlogDetailItems = ({id,title,desc}) => {
  return (
    <div className='container mt-3'>
        <p>Blog ID:{id}</p>
        <p>Blog Title:{title}</p>
        <p>Blog Description:{desc}</p>
    </div>
  )
}

export default BlogDetailItems