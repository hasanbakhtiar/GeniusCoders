import React from 'react'
import { connect } from 'react-redux'
import { editBlog,removeBlog } from '../../action/blogaction'
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
      <div className="d-flex justify-content-center">
      <button className='btn btn-danger center' onClick={()=>{
        props.dispatch(removeBlog({id:props.pvalue.id}))
        props.history.push('/dashboard');
      }}>Delete</button>
      </div>
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