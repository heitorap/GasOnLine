import React, { Component } from "react";

class Modal extends Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      show: this.props.show,
      show: false,
      showModal: this.showModal
    };
  }

  render() {
    if (this.props.show) {
      return (this.props.children)
    } else {
      return null
    }
  }
}

export default Modal;
