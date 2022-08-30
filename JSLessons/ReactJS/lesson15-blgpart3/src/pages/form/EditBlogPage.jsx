import React from 'react'
import { connect } from 'react-redux'
import { editBlog } from '../../action/blogaction'
import BlogForm from './BlogForm'


const EditBlogPage = props => {
  return (
    <div>
      <h3 className='text-center'>Edit Blog</h3>
      <BlogForm editblog={props.pvalue} 
      onFormSubmit={(a)=>{
        props.dispatch(editBlog(props.pvalue.id,a));
        props.history.push('/dashboard');
      }}/>
    </div>
  )
}

const mapStateToProps =(state,props)=>{
  return{
    pvalue: state.actionreducer.find((b)=>{
      return b.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditBlogPage)