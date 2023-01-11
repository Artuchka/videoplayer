import { useState } from "react"
import { Player } from "./Player"

function App() {
	const src = "../assets/video.mp4"
	return (
		<div className="App">
			<Player src={src} />
		</div>
	)
}

export default App
