import React from "react";

class LinkButton extends React.Component {
  render() {
    return (
      <div className="Social-media-buttons">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <i className={this.props.icon} />
        </a>
      </div>
    );
  }
}

export default LinkButton;
