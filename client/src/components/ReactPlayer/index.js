import React from "react"
import ReactPlayer from "react-player";

function App() {
  return (
    <div>
      <ReactPlayer
        url="https://www.twitch.tv/crix"
        playing = {true}
        muted = {true}
        width = {"227.6px"}
        height = {"151.49px"}
      />
    </div>
  )
}

export default App