import { useEffect, useState } from 'react'
import MusicPlayer from './components/music-player'

import {
  siGo,
  siTypescript,
  siJavascript,
  siPython,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siFastapi,
  siX,
  siGithub,
  siGmail,
  type SimpleIcon
} from 'simple-icons'

type anime = {
  name: string,
  sometext: string,
  rating: number,
}

type game = {
  name: string,
  sometext: string,
  img: string,
  url: string
}
type skill = {
  name: string,
  icon: SimpleIcon
}

type project = {
  name: string,
  description: string,
  link: string,
  stack: SimpleIcon[],
  stackStrings?: string[],
}

const projects: project[] = [
  {
    name: 'Lightcode',
    description: 'A terminal coding agent written in golang for performance.',
    link: 'https://github.com/Kartik-2239/lightcode',
    stack: [siGo],
    stackStrings: ['golang', 'http server', 'bubbletea', 'charm', 'sqlite', 'openai go sdk']
  },
  {
    name: 'Ai Chats Forker',
    description: 'A browser extension that allows you to fork and continue chats in between websites like chatgpt, claude and gmeini',
    link: 'https://github.com/Kartik-2239/ai-chats-forker',
    stack: [siTypescript],
    stackStrings: ['typescript','chrome extension', 'wxt']
  },
  {
    name: 'Dosye',
    description: 'A cli tool to count specific words you used while talking to ai agents like opencode, codex etc.',
    link: 'https://github.com/Kartik-2239/dosye',
    stack: [siTypescript],
    stackStrings: ['typescript', 'cli', 'inquirer']
  },
  {
    name: 'Open-neuro',
    description: 'A neuro sama clone because its so cool.',
    link: 'https://github.com/Kartik-2239/open-neuro',
    stack: [siTypescript, siPython],
    stackStrings: ['typescript', 'python', 'ai sdk', 'vts sdk', 'websockets', 'huggingface']
  },
]

const animes: anime[] = [
  {
    name: 'One Piece',
    sometext: 'So peak!!',
    rating: 9,
  },
  {
    name: "Frieren",
    sometext: 'Nice story, animation and music',
    rating: 10,
  },
  {
    name: 'Violet Evergarden',
    sometext: 'Nice story and kinda unique?',
    rating: 8,
  }
]

const games: game[] = [
  {
    name: 'Minecraft',
    sometext: 'I play minecraft regularly and have been since 2020',
    img: './minecraft.jpg',
    url: "https://www.minecraft.net/en-us"
  },
  {
    name: 'Pokemon Legends ZA',
    sometext: 'Really good but the map was small',
    img: './plza.png',
    url: "https://legends.pokemon.com/en-us/"
  },
  {
    name: 'Pokemon Legends Arceus',
    sometext: 'One of the best pokemon games.',
    img: './pla.jpg',
    url: "https://legends.arceus.pokemon.com/en-us/"
  },
  {
    name: 'Legends of Zelda: BOTW',
    sometext: 'Masterpiece',
    img: './botw.jpg',
    url: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-breath-of-the-wild-switch/"
  }
]

const skills: skill[] = [
  { name: 'go', icon: siGo },
  { name: 'ts', icon: siTypescript },
  { name: 'js', icon: siJavascript },
  { name: 'python', icon: siPython },
  { name: 'react', icon: siReact },
  { name: 'nextjs', icon: siNextdotjs },
  { name: 'nodejs', icon: siNodedotjs },
  { name: 'fastapi', icon: siFastapi },
]


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const query = '(prefers-color-scheme: dark)';
    if (typeof window !== 'undefined') {
      setIsDarkMode(window.matchMedia(query).matches);
      window.matchMedia(query).matches ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }
  }, [])
  return (
    <div className='w-screen min-h-screen bg-background text-muted-foreground font-mono'>
      <MusicPlayer />
      <div className='w-full flex justify-center'>
        <div className='max-w-[700px] w-full px-6 py-12 flex flex-col gap-10'>

          <section id='Name' className='flex flex-row gap-4 items-center'>
            <div className='flex flex-col'>
              <h1 className='font-bold text-4xl text-foreground'>Kartik</h1>
            </div>
          </section>

          <section id='about' className='flex flex-col gap-1'>
            <p className='font-bold mb-2 text-foreground'>about</p>
            <p>i am a hobbyist software developer.</p>
            <p>i really like building projects.</p>
            <p>i also like watching anime and playing Minecraft and Pokemon.</p>
          </section>

          <section id='projects' className='flex flex-col gap-1'>
            <p className='font-bold mb-2 text-foreground'>projects</p>
            <div className='flex flex-col gap-4'>
            {projects.map((project) => (
              <div key={project.name} className='flex flex-col gap-1'>
                <div className='flex flex-col gap-2'>
                  <p>
                    <div className='flex flex-row gap-2 items-center'>
                      <a href={project.link} target='_blank' rel='noopener noreferrer' className='underline'>{project.name}</a>
                    </div>
                  </p>
                  <div className='flex flex-row w-full gap-2'>
                    {/* tech used: {project.stackStrings?.join(', ')} */}
                    {/* {project.stackStrings?.map((tech, index) => (
                      <div key={index} className='w-20 h-10 flex items-center bg-muted text-foreground px-2 py-1 rounded-xl border-border border cursor-pointer gap-1 mr-2 hover:bg-accent'>
                        <span className='text-xs'>{tech}</span>
                      </div>
                    ))} */}
                  </div>
                </div>
              <p>{project.description}</p>
            </div>
            ))}
            </div>
          </section>

          <section id='skills' className='flex flex-col gap-1'>
            <p className='font-bold mb-2 text-foreground'>skills</p>
            <div className='flex flex-row flex-wrap gap-4'>
              {skills.map((skill) => {
                const icon = skill.icon
                const isBlack = icon.hex === '000000'
                return (
                  <div key={skill.name} className='flex items-center bg-muted text-foreground px-3 py-2 rounded-xl border-border border cursor-pointer gap-2 hover:bg-accent'>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill={isBlack && isDarkMode ? `#ffffff` : `#${icon.hex}`}
                      className="w-4 h-4"
                    >
                      <path d={icon.path} />
                    </svg>
                    <span className='text-sm font-bold'>{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </section>

          <section id='socials' className='flex flex-col gap-1'>
            <p className='font-bold mb-2 text-foreground'>socials</p>
            <div className='flex flex-row gap-4'>
              {/* <p><a href='mailto:kartikkannan22@gmail.com' className='underline'>mail</a></p>
              <p><a href='https://github.com/Kartik-2239' className='underline'>github</a></p> */}
              <a href='mailto:kartikkannan22@gmail.com' target='_blank' rel='noopener noreferrer' className='flex items-center bg-muted text-foreground px-3 py-2 rounded-xl border-border border cursor-pointer gap-2 hover:bg-accent'>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill={`#${siGmail.hex}`}
                  className="w-4 h-4"
                >
                  <path d={siGmail.path} />
                </svg>
                <span className='text-sm font-bold'>Email</span>
              </a>
              <a href='https://github.com/Kartik-2239' target='_blank' rel='noopener noreferrer' className='flex items-center bg-muted text-foreground px-3 py-2 rounded-xl border-border border cursor-pointer gap-2 hover:bg-accent'>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill={!isDarkMode ? `#${siGithub.hex}` : `#ffffff`}
                  className="w-4 h-4"
                >
                  <path d={siGithub.path} />
                </svg>
                <span className='text-sm font-bold'>Github</span>
              </a>
              <a href='https://x.com/notkartikk' target='_blank' rel='noopener noreferrer' className='flex items-center bg-muted text-foreground px-3 py-2 rounded-xl border-border border cursor-pointer gap-2 hover:bg-accent'>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill={!isDarkMode ? `#${siX.hex}` : `#ffffff`}
                  className="w-4 h-4"
                >
                  <path d={siX.path} />
                </svg>
                <span className='text-sm font-bold'>Twitter</span>
              </a>
            </div>
          </section>

          <section id='anime' className='flex flex-col gap-1'>
            <p className='font-bold mb-2 text-foreground'>animes i like</p>
            {animes.map((anime) => (
              <div key={anime.name}>
                <div className='flex flex-row gap-2'>
                  <p className='underline'>{anime.name}</p>
                  <p>: {anime.sometext}</p>
                  <span>({anime.rating}/10)</span>
                </div>
              </div>
            ))}
            <p>And a lot more niche animes...</p>
          </section>

          <section id='games' className='flex flex-col gap-1'>
            <p className='font-bold mb-2 text-foreground'>games i like</p>
            {games.map((game) => (
              <div key={game.name} className='flex flex-row gap-2'>
                <img src={game.img} alt={game.name} className='w-16 h-16 object-cover rounded-md' />
                <div className='flex flex-col justify-center'>
                  <a href={game.url} target='_blank' rel='noopener noreferrer' className='underline'>{game.name}</a>
                  <p>{game.sometext}</p>
                </div>
              </div>
            ))}
          </section>

        </div>
      </div>
    </div>
  )
}
