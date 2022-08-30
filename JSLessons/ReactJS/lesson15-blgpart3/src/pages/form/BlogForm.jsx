import React, { Component } from "react";

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formtitle: props.editblog? props.editblog.title: "",
      formdesc: props.editblog? props.editblog.desc:"",
      formimg:props.editblog? props.editblog.img:"",
      err: "",
    };
  }

  onImgChange = (e) => {
    const formimg = e.target.value;
    this.setState(() => ({ formimg }));
  };

  onTitleChange = (e) => {
    const formtitle = e.target.value;
    this.setState(() => ({ formtitle }));
  };

  onDescChange = (e) => {
    const formdesc = e.target.value;
    this.setState(() => ({ formdesc }));
  };

  blogSubmit = (e) => {
    e.preventDefault();
    if (!this.state.formtitle || !this.state.formdesc) {
      this.setState({ err: "Please, fill out this filed. " });
    } else {
      this.setState({ err: " " });
      this.props.onFormSubmit({
        title:this.state.formtitle,
        desc:this.state.formdesc,
        img:this.state.formimg
      })
    }
  };

  render() {
    return (
      <div>
        {this.state.err && (
          <p className="text-center alert alert-danger">{this.state.err}</p>
        )}
        <div className="d-flex flex-cloumn justify-content-center align-items-center mt-5">
          <form onSubmit={this.blogSubmit} className="col-6">
            <div className="mb-3">
              <label for="b" className="form-label">
                add photo
              </label>
              <input
                type="text"
                className="form-control"
                id="b"
                onChange={this.onImgChange}
                value={this.state.formimg}
              />
            </div>
            <div className="mb-3">
              <label for="b" className="form-label">
                add title
              </label>
              <input
                type="text"
                className="form-control"
                id="b"
                onChange={this.onTitleChange}
                value={this.state.formtitle}
                
              />
            </div>
            <div className="mb-3">
              <label for="a" className="form-label">
                add description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="a"
                onChange={this.onDescChange}
                value={this.state.formdesc}

              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
       
          </form>
       
        </div>
      </div>
    );
  }
}

export default BlogForm;
