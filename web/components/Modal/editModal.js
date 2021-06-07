import React, { Component } from "react";

class editModal extends Component {
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(event.target);

    this.state = {
      show: this.props.show
    };
  }

  render(){
    if (this.props.show) {
      return (
        <div>Abriu o modal</div>
      );
    } else {
      return null;
    }
  }
}

export default editModal;
