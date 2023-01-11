import React, { FC, useRef, useState } from "react"

import style from "./player.module.scss"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"

export const Player: FC<{ src: string }> = ({ src = "" }) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const videoRef = useRef(document.createElement("video"))

	const handleResume = () => {
		setIsPlaying(true)
		videoRef.current.play()
	}
	const handleStop = () => {
		setIsPlaying(false)
		videoRef.current.pause()
	}
	return (
		<div
			className={`${style.container}
			${isPlaying ? "playing" : "paused"}
		`}
		>
			<video
				src={"/video.mp4"}
				className={style.video}
				ref={videoRef}
			></video>
			<div className={style["video-controls"]}>
				<div className={style["play-button"]}>
					{isPlaying ? (
						<BsPauseFill onClick={handleStop} />
					) : (
						<BsFillPlayFill onClick={handleResume} />
					)}
				</div>
			</div>
		</div>
	)
}
