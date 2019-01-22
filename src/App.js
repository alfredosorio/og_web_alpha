import React, { Component } from 'react';
import logo from './assets/images/logo.png'
import human_dragon from './assets/music/human_dragons.mp3'
import AudioPlayer from './components/AudioPlayer'
import './App.css';
require('./assets/fonts/Nintendo NES Font.ttf')

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
        {/* Audio Control */}
          <div className="Audio-player">
            <AudioPlayer file={human_dragon}/>
          </div>
        {/* Logo */}
          <div className="Logo-header">
            <img src={logo} alt='og_nerd logo' />
          </div>
        {/* Coming Soon */}
          <div className="Coming-soon">
            <p>COMING SOON</p>
          </div>
        </main>
        {/* Footer */}
        <div className="Footer">
        {/* Social Media Buttons */}
          <div className="Social-media-buttons">
            <a href="https://www.facebook.com/OriGNerd/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/o.g_nerd/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=AYMewuppO0k" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p>&copy; OG Nerd 2019</p>
        </div>
      </div>
    );
  }
}

export default App;
