import { useRef, useEffect } from 'react'
import { type project } from '../types'
import { siGithub } from 'simple-icons'

type projectCardProps = {
  project: project
  isDarkMode: boolean
}

export default function ProjectCard({ project, isDarkMode }: projectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2
    }
  }, [])

  return (
    <div className='flex flex-col gap-3 border border-border rounded-sm p-2'>
      <div className='w-full h-64 bg-muted rounded-lg overflow-hidden flex items-center justify-center'>
        {project.video ? (
          <video ref={videoRef} src={project.video} className='w-full h-full object-fit' autoPlay loop muted playsInline />
        ) : (
          <span className='text-muted-foreground text-sm'>Project Video</span>
        )}
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <div className='flex items-center justify-between'>
          <a href={project.link} target='_blank' rel='noopener noreferrer' className='underline font-pixel text-lg'>{project.name}</a>
          <a href={project.link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1 hover:opacity-80'>
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill={!isDarkMode ? `#${siGithub.hex}` : '#ffffff'}
              className="w-4 h-4"
            >
              <path d={siGithub.path} />
            </svg>
          </a>
        </div>
        <p className='text-sm'>{project.description}</p>
        <div className='flex flex-row flex-wrap gap-2'>
          {project.stackStrings?.map((tech, index) => (
            <span key={index} className='text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
