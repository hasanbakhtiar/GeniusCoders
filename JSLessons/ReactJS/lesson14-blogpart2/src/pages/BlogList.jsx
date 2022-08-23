import React from "react";
import { connect } from "react-redux";
import BlogItem from "./BlogItem";

const BlogList = props => {
  return (
    <div className="container mt-3">
      <div className="row">
{
    props.pvalue.map((a,i)=>{

    return    <BlogItem key={i} {...a}/>
    })
}
      </div>
    </div>
  );
};
const mapStateToProps=(state)=>{
    return{
        pvalue:state.actionreducer
    }
}
export default connect(mapStateToProps)(BlogList);
