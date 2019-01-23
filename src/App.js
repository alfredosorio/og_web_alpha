import React, { Component } from "react";
import logo from "./assets/images/logo.png";
import human_dragons from "./assets/music/human_dragons.mp3";
import AudioPlayer from "./components/AudioPlayer";
import LinkButton from "./components/LinkButton";
import "./App.css";
require("./assets/fonts/Nintendo NES Font.ttf");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
          {/* Audio Control */}
          <AudioPlayer file={human_dragons} />
          {/* Logo */}
          <div className="Logo">
            <img src={logo} alt="og_nerd logo" />
          </div>
          {/* Coming Soon */}
          <div className="Coming-soon">
            <p>COMING SOON</p>
          </div>
          {/* Footer */}
          <div className="Footer">
            <div className="Social-media-buttons-wrapper">
              <LinkButton
                link="https://www.facebook.com/OriGNerd/"
                icon="fab fa-facebook-f"
              />
              {/* Instagram */}
              <LinkButton
                link="https://www.instagram.com/o.g_nerd/"
                icon="fab fa-instagram"
              />
              {/* YouTube */}
              <LinkButton
                link="https://www.youtube.com/watch?v=AYMewuppO0k"
                icon="fab fa-youtube"
              />
            </div>
            {/* Facebook */}

            <p>&copy; OG Nerd 2019</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
