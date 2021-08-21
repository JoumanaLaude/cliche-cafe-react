import React, { Component } from 'react';

export default class TitleText extends Component {
   render() {
      return (
         <>
            <h2 className="pt-3">{this.props.title}</h2>
            <p className="lead">{this.props.content}</p>
         </>
      )
   }
}
