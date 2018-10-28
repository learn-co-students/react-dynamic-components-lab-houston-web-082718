import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {this.props.opacity >= 0.2 ? (
          <ColorBox opacity={this.props.opacity - 0.1} />
        ) : null}
      </div>
    );
  }
}

// class ColorBox extends Component {
//   render() {
//     const newOpacity = this.props.value * 10;

//     if (this.props.opacity < 2) {
//       return (
//         <div>
//           <ColorBox opacity={newOpacity - 1} />
//         </div>
//       );
//     } else {
//       return null;
//     }
//   }
// }
