import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.input =React.createRef()
    this.label =React.createRef()
  }

  savePhone(e) {
    localStorage["phone"] = e.target.value;
  }

  navigate  = () => {
    if(!/[0][5][0-9]\-[0-9]{7}/.test(this.input.current.value))
    {
      this.input.current.style.border="red solid 2px";
      this.label.current.innerHTML="please enter a correct phone number 05X-XXXXXXX"
    }
     else{
    this.props.history.push("/finish");
     }
  }

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          ref={this.input}
          type="text"
          placeholder="Enter your phone"
          className="phone"
          onBlur={this.savePhone}
        /><button onClick={this.navigate}>navigate</button>
        <br />
        <label ref={this.label} htmlFor=""></label>
        
      </div>
    );
  }
}
