import React from 'react'
import IconButton from '@material-ui/core/IconButton';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      muted: true
    }
    this.player = React.createRef()
    this.muteAudio = this.muteAudio.bind(this)
  }

  componentDidMount() {
    this.muteAudio()
  }

  muteAudio() {
    this.setState({
      muted: !this.state.muted
    })
    return this.player.current.muted = this.state.muted
  }

  render() {
    console.log(this.state.muted)
    return(
      <div>
        <audio
          ref={this.player}
          autoPlay
        >
          <source src={this.props.file} type="audio/mpeg" />
        </audio>
        <div className="Track-info">
          <a href="https://m.soundcloud.com/travbryanmusic/human-dragons-trav-b-ryan" target="_blank" rel="noopener noreferrer">
            <p3>&#9835; Now Playing</p3>
            <p>Human Dragons</p>
            <p2>Trav B Ryan</p2>
          </a>
        </div>
        <div className="Audio-control">
          <IconButton onClick={this.muteAudio}>
            {
              this.state.muted ? <i className="fas fa-volume-up" /> : <i className="fas fa-volume-off" />
            }
          </IconButton>
        </div>

        {/* Mute/Unmute Button */}
        <div className="Audio-control">
        
        </div>

      </div>
    )
  }
}

// const AudioPlayer = (props) => {
//   return (
//     <div>
//       <audio controls autoPlay>
//         <source src={props.file} type="audio/mpeg" />
//       </audio>
//     </div>
//   )
// }

export default AudioPlayer