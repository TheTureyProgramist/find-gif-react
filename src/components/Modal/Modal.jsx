import React, { Component } from 'react';
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) this.props.onClose();
  };
  render() {
    const { largeImageURL, onClose } = this.props;
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={largeImageURL} alt="" />
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
      </div>
    );
  }
}
export default Modal;