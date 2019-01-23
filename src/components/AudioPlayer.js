import React from "react";
import IconButton from "@material-ui/core/IconButton";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: true
    };
    this.player = React.createRef();
    this.muteAudio = this.muteAudio.bind(this);
  }

  componentDidMount() {
    this.muteAudio();
  }

  muteAudio() {
    this.setState({
      muted: !this.state.muted
    });
    return (this.player.current.muted = this.state.muted);
  }

  render() {
    return (
      <div>
        <audio ref={this.player} autoPlay>
          <source src={this.props.file} type="audio/mpeg" />
        </audio>
        <div className="Track-info">
          {/* SoundCloud Link Icon */}
          <iframe
            title="SoundCloudIcon"
            allowtransparency="true"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Ftravbryanmusic%2Fhuman-dragons-trav-b-ryan&color=orange_white&size=32"
            style={{ width: 32, height: 32 }}
          />
          <p>
            <span style={{ fontWeight: 700 }}>Human Dragons</span>
            <br />
            Trav B Ryan
          </p>
        </div>
        <div className="Mute-button">
          <IconButton onClick={this.muteAudio}>
            {this.state.muted ? (
              <i className="fas fa-volume-up" />
            ) : (
              <i className="fas fa-volume-off" />
            )}
          </IconButton>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
