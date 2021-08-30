import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.input =React.createRef()
    this.label =React.createRef()
  }

  saveName(e) {
    localStorage["name"] = e.target.value;
  }

  navigate = () => {

    if(!/[A-Z][a-z]+/.test(this.input.current.value)) 
    {
      this.input.current.style.border="red solid 2px";
      this.label.current.innerHTML="please enter a correct name as: Odelia "
    }
     else{
    this.props.history.push("/contact");
     }
  }

  render() {
    return (
      <div>
        <h1> About</h1>
        <input 
          ref={this.input}
          type="text"
          placeholder="Enter your name"
          className="name"
          onBlur={this.saveName}
        />
        <button onClick={this.navigate}>navigate</button>
        <br />
        <label ref={this.label} htmlFor=""></label>
      </div>
    );
  }
}
