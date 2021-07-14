import React, { Component } from 'react';

export default class TitleText extends Component {
   render() {
      return (
         <>
            <h2>{this.props.titleText}</h2>
            <p className="lead">{this.props.bodyText}</p>
         </>
      )
   }
}
