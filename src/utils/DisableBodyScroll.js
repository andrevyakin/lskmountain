import { Component } from 'react';

class DisableBodyScroll extends Component {
  componentDidMount() {
    document.body.classList.add('overflow-y-hidden');
    document.getElementById('navbar').classList.remove('z-10');
    document.getElementById('navbar').classList.add('-z-10');
  }

  componentWillUnmount() {
    document.body.classList.remove('overflow-y-hidden');
    document.getElementById('navbar').classList.remove('-z-10');
    document.getElementById('navbar').classList.add('z-10');
  }

  render() {
    return false;
  }
}

export default DisableBodyScroll;
