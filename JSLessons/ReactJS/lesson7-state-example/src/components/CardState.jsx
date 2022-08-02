import React, { Component } from "react";
import img0 from "../assets/img/img0.jpg";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.state = {
      count: 0,
    };
  }
  add() {
    this.setState({
      count: this.state.count + 1
    });
  }
  remove() {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.remove} className="btn btn-danger">
          -1
        </button>
        <span className="mx-3">{this.state.count}</span>
        <button onClick={this.add} className="btn btn-success">
          +1
        </button>
      </div>
    );
  }
}

class PhotoCard extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{this.props.title}</p>
          <Counter />
        </div>
      </div>
    );
  }
}

class CardState extends Component {
  constructor(props) {
    super(props);
    this.natureOne = this.natureOne.bind(this);
    this.natureTwo = this.natureTwo.bind(this);
    this.natureThree = this.natureThree.bind(this);
    this.natureFour = this.natureFour.bind(this);
    this.state = {
      photo1: img0,
      photo2: img1,
      photo3: img2,
      title1: "Nature is super",
      title2: "Nature is good",
      title3: "Nature is beutiful",
      display1:"row gap-3",
      display2:"d-none"
    };
  }

  natureOne() {
    this.setState({
      photo1: img3,
      photo2: img4,
      photo3: img0,
      display1:"d-none",
      display2:"row gap-3"
    });
  }
  natureTwo() {
    this.setState({
      photo1: img2,
      photo2: img1,
      photo3: img3,
      display1:"row gap-3",
      display2:"d-none"
    });
  }
  natureThree() {
    this.setState({
      photo1: img0,
      photo2: img3,
      photo3: img4,
    });
  }

  natureFour() {
    this.setState({
      photo1: img1,
      photo2: img4,
      photo3: img2,
    });
  }

  render() {
    return (
      <div>
        <div className="con-btn mb-5">
          <div onClick={this.natureOne} className="btn btn-secondary mx-3">
            Nature One
          </div>
          <div onClick={this.natureTwo} className="btn btn-secondary mx-3">
            Nature Two
          </div>
          <div onClick={this.natureThree} className="btn btn-secondary mx-3">
            Nature Three
          </div>
          <div onClick={this.natureFour} className="btn btn-secondary mx-3">
            Nature Four
          </div>
        </div>

        <div className={this.state.display1}>
          <PhotoCard photo={this.state.photo1} title={this.state.title1} />
          <PhotoCard photo={this.state.photo2} title={this.state.title2} />
          <PhotoCard photo={this.state.photo3} title={this.state.title3} />
        </div>

        <div className={this.state.display2}>
          <PhotoCard photo={this.state.photo1} title={this.state.title1} />
          <PhotoCard photo={this.state.photo2} title={this.state.title2} />
          <PhotoCard photo={this.state.photo3} title={this.state.title3} />
        </div>

      </div>
    );
  }
}

export default CardState;
