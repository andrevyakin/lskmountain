import { Component } from 'react';

class DisableBodyScroll extends Component {
  componentDidMount() {
    document.body.classList.add('overflow-y-hidden');
    document.getElementById('navbar').classList.add('hidden');
  }

  componentWillUnmount() {
    document.body.classList.remove('overflow-y-hidden');
    document.getElementById('navbar').classList.remove('hidden');
  }

  render() {
    return false;
  }
}

export default DisableBodyScroll;
