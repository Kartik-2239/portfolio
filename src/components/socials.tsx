import type { socials } from "../types"

export function Socials({socials}: {socials: socials[]}) {
    return (
        <div className="flex flex-row gap-2">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-muted text-foreground px-3 py-2  border-border border-0 cursor-pointer gap-2 hover:bg-accent"
                >
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-current"
                    >
                        <title>{social.name}</title>
                        <path d={social.icon.path} />
                    </svg>
                </a>
            ))}
        </div>
    )
}