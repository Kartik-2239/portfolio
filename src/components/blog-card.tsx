

export function BlogCard({ title, description, link }: { title: string; description: string; link: string }) {
    return (
        <div className='flex flex-col gap-2'>
            <a href={link} target='_blank' rel='noopener noreferrer' className='underline font-pixel'>{title}</a>
            <p className="text-sm">{description}</p>
        </div>
    )
}