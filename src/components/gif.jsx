import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.updateSelectedGif) {
      this.props.updateSelectedGif(this.props.id);
    }
  }

  render () {
    const url = `https://media.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img src={url} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
