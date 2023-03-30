import React from 'react';
import imageSrc from './../../images/proofby.jpg'

export default class Pimage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.opacity >= 1) {
        clearInterval(this.timer);
      }
      this.setState({
        opacity: this.state.opacity + 0.01,
      });
    }, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <img className="image" src={imageSrc} style={{ opacity: this.state.opacity }} />;
  }
}


