import { useEffect, useRef, useState } from 'react'
export default function MusicPlayer() {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const [curVolume, setCurVolume] = useState(0)

	const ctxRef = useRef<AudioContext | null>(null);
	const analyserRef = useRef<AnalyserNode | null>(null);
	const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
	const rafRef = useRef<number | null>(null);

	useEffect(() => {
        return () => {
            if (ctxRef.current) {
                ctxRef.current.close();
            }
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

	useEffect(()=>{
		if (imageRef.current) {
			imageRef.current.style.transform = `scale(${1 + curVolume * 1.25})`
		}
	},[curVolume])


	function loop() {
		const analyser = analyserRef.current;
		if (!analyser) return;

		const data = new Float32Array(analyser.fftSize);
		analyser.getFloatTimeDomainData(data);

		let sum = 0;
		for (let i = 0; i < data.length; i++) {
			sum += data[i] * data[i];
		}

		const volume = Math.sqrt(sum / data.length);
		setCurVolume(volume);
		// console.log(volume);
		setTimeout(() => {
			rafRef.current = requestAnimationFrame(loop);
		}, 250);

	}


	async function toggle() {
        const audio = audioRef.current;
        if (!audio) {
            setIsPlaying(false);
            return;
        }

        if (!ctxRef.current) {
            const ctx = new AudioContext();
            ctxRef.current = ctx;

            const analyser = ctx.createAnalyser();
            analyser.fftSize = 2048;
            analyserRef.current = analyser;

            sourceRef.current = ctx.createMediaElementSource(audio);
            sourceRef.current.connect(analyser);
            analyser.connect(ctx.destination);
        }

        if (!audio.paused) {
            audio.pause();
            setIsPlaying(false);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            return;
        }

        await audio.play();
        setIsPlaying(true);
        loop();
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
