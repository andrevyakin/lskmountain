import { Component } from 'react';

class DisableBodyScroll extends Component {
  componentDidMount() {
    document.body.classList.add('overflow-y-hidden', 'select-none', 'pointer-events-none');
    document.getElementById('dark').classList.add('bg-[rgba(0,0,0,0.7)]');
    document.getElementsByTagName('header')[0].classList.remove('z-10');
    document.getElementsByTagName('header')[0].classList.add('blur-xs');

    document
      .getElementsByTagName('footer')[0]
      .classList.add('blur-xs');
  }

  componentWillUnmount() {
    document.body.classList.remove('overflow-y-hidden', 'select-none', 'pointer-events-none');
    document.getElementById('dark').classList.remove('bg-[rgba(0,0,0,0.7)]');
    document.getElementsByTagName('header')[0].classList.add('z-10');
    document.getElementsByTagName('header')[0].classList.remove('blur-xs');

    document
      .getElementsByTagName('footer')[0]
      .classList.remove('blur-xs');
  }

  render() {
    return false;
  }
}

export default DisableBodyScroll;
