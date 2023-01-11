import React, { FC, useRef, useState } from "react"

import style from "./player.module.scss"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { SlSizeFullscreen } from "react-icons/sl"
import { MdOutlineCloseFullscreen } from "react-icons/md"
import { TbRectangle } from "react-icons/tb"
import { BiRectangle } from "react-icons/bi"

export const Player: FC<{ src: string }> = ({ src = "" }) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isFull, setFull] = useState(false)
	const [isMini, setMini] = useState(false)
	const [isTheater, setTheater] = useState(false)
	const videoRef = useRef(document.createElement("video"))

	const handleResume = () => {
		setIsPlaying(true)
		videoRef.current.play()
	}
	const handleStop = () => {
		setIsPlaying(false)
		videoRef.current.pause()
	}

	const handleFullToggle = () => {
		setFull((prev) => !prev)
		if (document.fullscreenElement) {
			console.log("is fullscreen")
			return
		}
		console.log("NOT fullscreen")
		// videoRef.current.requestFullscreen()
	}
	const handleTheaterToggle = () => {
		setTheater((prev) => !prev)
	}
	console.log({ isPlaying })
	console.log(document.fullscreenElement)

	return (
		<div
			className={`${style.container}
			${isPlaying ? style.playing : style.paused}
			${isFull ? style.fullscreen : ""}
			${isTheater ? style.theater : ""}
			${isMini ? style.mini : ""}
		`}
		>
			<div className={style.wrapper}>
				<video
					src={"/video.mp4"}
					className={style.video}
					ref={videoRef}
					controls={false}
				></video>
				<div className={style["video-controls"]}>
					<div className={style["play-button"]}>
						{isPlaying ? (
							<BsPauseFill onClick={handleStop} />
						) : (
							<BsFillPlayFill onClick={handleResume} />
						)}
					</div>
					<div className={style["theater-button"]}>
						{isTheater ? (
							<TbRectangle onClick={handleTheaterToggle} />
						) : (
							<BiRectangle onClick={handleTheaterToggle} />
						)}
					</div>
					<div className={style["fullscreen-button"]}>
						{isFull ? (
							<MdOutlineCloseFullscreen
								onClick={handleFullToggle}
							/>
						) : (
							<SlSizeFullscreen onClick={handleFullToggle} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
