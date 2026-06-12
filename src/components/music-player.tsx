import { useRef, useState } from 'react'
export default function MusicPlayer() {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)

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

	return (
		<>
			<button
                type="button"
                onClick={() => void toggle()}
                aria-pressed={isPlaying}
                style={{
                    animationPlayState: isPlaying ? 'running' : 'paused',
                }}
                className={"fixed right-5 top-5 z-50 h-24 w-24 overflow-hidden rounded-full border-2 border-white/20 shadow-xl animate-spin [animation-duration:12s] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"}// + (isPlaying ? '' : ' hover:scale-105')}
            >
				<img src={"./rowlet.jpg"} alt='Profile music toggle' className='h-full w-full object-cover' />
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
