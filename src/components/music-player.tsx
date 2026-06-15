import { useRef, useState } from 'react'
export default function MusicPlayer() {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	async function toggle() {
		const audio = audioRef.current
		

		if (!audio) {
			return
		}

		if (!audio.paused) {
			audio.pause()
			return
		}

		await audio.play()
	}

	const handleHover = () => {
		if (imageRef.current) {
			imageRef.current.style.transform = 'scale(1.10)'
		}
	}
	const handleLeave = () => {
		if (imageRef.current) {
			imageRef.current.style.transform = 'scale(1)'
		}
	}

	const click = () => {
		void toggle()
		if (imageRef.current) {
			imageRef.current.style.transform = 'scale(1.20)'
			setTimeout(() => {
				if (imageRef.current) {
					imageRef.current.style.transform = 'scale(1)'
				}
			}, 400)
		}
	}

	return (
		<>
			<button
				ref={buttonRef}
                type="button"
                onClick={click}
                aria-pressed={isPlaying}
                style={{
                    animationPlayState: isPlaying ? 'running' : 'paused',
                }}
				onMouseEnter={handleHover}
				onMouseLeave={handleLeave}
                className={"z-50 h-24 w-24 aspect-square rounded-full border-2 p-1 border-border shadow-xl animate-spin [animation-duration:12s] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"}// + (isPlaying ? '' : ' hover:scale-105')}
            >
				<img ref={imageRef} src={"./rowlet.jpg"} alt='Profile music toggle' className='h-full w-full object-cover rounded-full duration-300 ease-in-out' />
			</button>
			<audio
				ref={audioRef}
				src='/music.mp3'
				loop
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onEnded={() => setIsPlaying(false)}
			/>
		</>
	)
}
