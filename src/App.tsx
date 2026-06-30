import { useEffect, useState } from 'react'
import MusicPlayer from './components/music-player'
import type { anime, game, skill, socials, project, blog } from './types'
import { Socials } from './components/socials'

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
  siHuggingface,
  siMedium
} from 'simple-icons'
import ParticleContainer from './components/particle-container'
import ProjectCard from './components/project-card'
import { BlogCard } from './components/blog-card'

const projects: project[] = [
  {
    name: 'Lightcode',
    description: 'A terminal coding agent written in golang for performance.',
    link: 'https://github.com/Kartik-2239/lightcode',
    image: './lightcode.jpg',
    stack: [siGo],
    stackStrings: ['golang', 'http server', 'bubbletea', 'charm', 'sqlite', 'openai go sdk']
  },
  {
    name: 'Ai Chats Forker',
    description: 'A browser extension that allows you to fork and continue chats in between websites like chatgpt, claude and gmeini',
    link: 'https://github.com/Kartik-2239/ai-chats-forker',
    image: './ai-chats-forker.jpg',
    stack: [siTypescript],
    stackStrings: ['typescript','chrome extension', 'wxt']
  },
  // {
  //   name: 'Dosye',
  //   description: 'A cli tool to count specific words you used while talking to ai agents like opencode, codex etc.',
  //   link: 'https://github.com/Kartik-2239/dosye',
  //   // video: './dosye.mp4',
  //   image: './dosye.jpg',
  //   stack: [siTypescript],
  //   stackStrings: ['typescript', 'cli', 'inquirer']
  // },
  {
    name: 'voice-scraper',
    description: 'A cli tool that finds and creates a joined clip of specific characters.',
    link: 'https://github.com/Kartik-2239/voice-scraper',
    // video: './dosye.mp4',
    image: './voice-scraper.png',
    stack: [siTypescript],
    stackStrings: ['typescript', 'cli', 'pyannote', 'ffmpeg', 'yt-dlp']
  },
  {
    name: 'Code-x-blocker',
    description: "A typescript project to block twitter when codex isn't running.",
    link: 'https://github.com/Kartik-2239/code-x-blocker',
    video: './code-x-blocker.mp4',
    stack: [siTypescript, siPython],
    stackStrings: ['typescript', 'chrome extension', 'javascript', 'websockets']
  },
  // {
  //   name: 'Open-neuro',
  //   description: 'A neuro sama clone because its so cool.',
  //   link: 'https://github.com/Kartik-2239/open-neuro',
  //   video: '',
  //   stack: [siTypescript, siPython],
  //   stackStrings: ['typescript', 'python', 'ai sdk', 'vts sdk', 'websockets', 'huggingface']
  // },
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

const socials_list : socials[] = [
  {
    name: 'email',
    link: 'mailto:kartikkannan22@gmail.com',
    icon: siGmail,
  },
  {
    name: 'github',
    link: 'https://github.com/Kartik-2239',
    icon: siGithub,
  },
  {
    name: 'x',
    link: 'https://x.com/notkartikk',
    icon: siX,
  },
  {
    name: 'huggingface',
    link: 'https://huggingface.co/Kartik2203',
    icon: siHuggingface
  },
  {
    name: 'medium',
    link: 'https://medium.com/@notkartik',
    icon: siMedium
  }
]

const blogs: blog[] = [
  {
    title: 'An AI tool to scrape voices of popular characters/people.',
    description: 'Process of how my voice scraper project works.',
    link: 'https://medium.com/@notkartik/an-ai-tool-to-scrape-voices-of-popular-characters-people-55653e8fb167'
  },
  {
    title: 'What is electron? ',
    description: 'A beginner friendly article about electron and how it works.',
    link: 'https://medium.com/@notkartik/electron-363750b0f993'
  }
]

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // useEffect(() => {
  //   const query = '(prefers-color-scheme: dark)';
  //   if (typeof window !== 'undefined') {
  //     setIsDarkMode(window.matchMedia(query).matches);
  //     window.matchMedia(query).matches ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  //   }
  // }, [])
  useEffect(() => {
    setIsDarkMode(true)
    document.documentElement.classList.add('dark')
  },[])
  return (
    <div className='w-screen min-h-screen bg-background text-muted-foreground font-mono'>
      {/* <MusicPlayer /> */}
      <div className='w-full flex justify-center'>
        <div className='max-w-[900px] w-full mx-4 md:mx-auto my-0 pb-12 flex flex-col border-x border-border'>

          <section id="particles" className='w-full border-b pt-4 border-border bg-black'>
              <ParticleContainer></ParticleContainer>
          </section>

          <section id='Name' className='flex flex-row gap-4 items-center border-b border-border px-3 py-4 md:px-6 md:py-8'>
            <div className='flex flex-row gap-8 items-center'>
              {/* <div className='border border-1 border-border rounded-md overflow-hidden'>
                <img src="./profile.jpg" alt="Profile" className='w-20 rounded-sm'/>
              </div> */}
              <MusicPlayer></MusicPlayer>
              <div className='flex flex-col gap-2'>
                <h1 className='font-bold font-pixel text-2xl md:text-4xl text-foreground'>Kartik</h1>
                <h1 className='font-bold font-pixel text-xl md:text-2xl text-foreground'>software developer</h1>
                <Socials socials={socials_list}></Socials>
              </div>
              
            </div>
          </section>

          <section id='about' className='flex flex-col gap-1 border-b border-border px-3 py-4 md:px-6 md:py-8'>
            <p className='font-bold font-pixel mb-2 text-foreground uppercase'>about</p>
            <p>i really like building projects</p>
            <p>and learning about new things :)</p>
            <p>i also like watching anime.</p>
          </section>

          <section id='skills' className='flex flex-col gap-1 border-b border-border px-3 py-4 md:px-6 md:py-8'>
            <p className='font-bold font-pixel mb-2 text-foreground uppercase'>skills</p>
            <div className='flex flex-row flex-wrap gap-4'>
              {skills.map((skill) => {
                const icon = skill.icon
                const isBlack = icon.hex === '000000'
                return (
                  <div key={skill.name} className='flex items-center bg-muted text-foreground px-3 py-2 rounded-sm border-border border-0 cursor-pointer gap-2 hover:bg-accent'>
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

          <section id='projects' className='flex flex-col gap-4 border-b border-border px-3 py-4 md:px-6 md:py-8' >
            <p className='font-bold font-pixel text-foreground uppercase '>projects</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          <section id='blogs' className='flex flex-col gap-4 border-b border-border px-3 py-4 md:px-6 md:py-8' >
              <p className='font-bold font-pixel text-foreground uppercase '>blogs</p>
              <div className='flex flex-col gap-4'>
                {blogs.map((blog) => (
                  <BlogCard key={blog.title} title={blog.title} description={blog.description} link={blog.link} />
                ))}
              </div>
          </section>

          <section id='anime' className='flex flex-col gap-1 border-b border-border px-3 py-4 md:px-6 md:py-8'>
            <p className='font-bold font-pixel mb-2 text-foreground uppercase'>animes i like</p>
            {animes.map((anime) => (
              <div key={anime.name}>
                <div className='flex flex-row gap-2'>
                  <p><span className='underline font-pixel'>{anime.name}</span>: {anime.sometext} <span>({anime.rating}/10)</span></p>
                </div>
              </div>
            ))}
            <p>And a lot more animes...</p>
          </section>

          <section id='games' className='flex flex-col gap-1 border-b border-border px-3 py-4 md:px-6 md:py-8'>
            <p className='font-pixel mb-2 text-foreground uppercase'>games i like</p>
            {games.map((game) => (
              <div key={game.name} className='flex flex-row gap-2'>
                <img src={game.img} alt={game.name} className='w-16 h-16 object-cover rounded-md' />
                <div className='flex flex-col justify-center'>
                  <a href={game.url} target='_blank' rel='noopener noreferrer' className='underline font-pixel'>{game.name}</a>
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
