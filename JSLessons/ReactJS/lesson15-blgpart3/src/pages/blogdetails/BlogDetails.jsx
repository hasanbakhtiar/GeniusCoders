import React from 'react'
import { connect } from 'react-redux'
import BlogDetailItems from './BlogDetailItems'

const BlogDetails = props => {
  return (
    <div><BlogDetailItems {...props.pvalue}/></div>
  )
}

const mapStateToProps = (state, props)=>{
    return{
        pvalue: state.actionreducer.find((q)=>{
            return q.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(BlogDetails)