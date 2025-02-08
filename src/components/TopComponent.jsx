import React from "react";
import SpotifyLogo from "../assets/g10.png"; 

function TopComponent() {
  return (
    <div>
      <img src={SpotifyLogo} alt="Spotify Logo" className="spotify_logo"/>
    </div>
  );
}

export default TopComponent;
