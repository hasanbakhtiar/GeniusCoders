import React from 'react'

const BlogDetailItems = ({id,title,desc,img}) => {
  return (
    <div className='container mt-3'>
      <img src={img} width='300' alt="" />
        <p>Blog ID:{id}</p>
        <p>Blog Title:{title}</p>
        <p>Blog Description:{desc}</p>
    </div>
  )
}

export default BlogDetailItems