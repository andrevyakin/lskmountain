import { Component } from 'react';

class DisableBodyScroll extends Component {
  componentDidMount() {
    document.body.classList.add('overflow-y-hidden', 'select-none');
    document.getElementById('dark').classList.add('bg-[rgba(0,0,0,0.7)]');
    document.getElementsByTagName('header')[0].classList.remove('z-10');
    document.getElementsByTagName('header')[0].classList.add('-z-10');
    document
      .getElementsByTagName('footer')[0]
      .classList.add('relative', '-z-10');
  }

  componentWillUnmount() {
    document.body.classList.remove('overflow-y-hidden', 'select-none');
    document.getElementById('dark').classList.remove('bg-[rgba(0,0,0,0.7)]');
    document.getElementsByTagName('header')[0].classList.remove('-z-10');
    document.getElementsByTagName('header')[0].classList.add('z-10');
    document
      .getElementsByTagName('footer')[0]
      .classList.remove('-z-10', 'relevant');
  }

  render() {
    return false;
  }
}

export default DisableBodyScroll;
