import React, { Component } from 'react';
import './TitleText.css';

export default class TitleText extends Component {
   render() {
      return (
         <>
            <h2 className="heading">{this.props.titleText}</h2>
            <p className="lead">{this.props.bodyText}</p>
         </>
      )
   }
}
