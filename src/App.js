import React, { Component } from 'react';
import logo from './assets/images/logo.png'
import human_dragon from './assets/music/human_dragons.mp3'
import AudioPlayer from './components/AudioPlayer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
        {/* Audio Control */}
          <div className="Audio-player">
            <AudioPlayer file={human_dragon}/>
          </div>
        {/* Logo */}
          <div className="Logo-header">
            <img src={logo} alt='og_nerd logo'></img>
          </div>
        {/* Coming Soon */}
          <div className="Coming-soon">
            <p>COMING SOON</p>
          </div>
        {/* Footer */}
          <div className="Footer">
          {/* Social Media Buttons */}
            <div className="Social-media-buttons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
            <p>&copy; OG Nerd 2019</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
