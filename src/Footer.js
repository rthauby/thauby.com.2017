import React, { Component } from 'react';
import './styles/footer.css';
import reactLogo from './svg/react.svg';

class Footer extends Component {
  render(){
    return (
      <footer>
        <div><img src={reactLogo} className='reactLogo' /></div>
        <div>This site is powered by React, hosted on S3, and served via CloudFront.</div>
        <div>Fancy, I know.</div>
      </footer>
    )
  }
}

export default Footer;