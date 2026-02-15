import Card from '../ui/Card'
import ActionButton from '../ui/ActionButton'

function ProjectCard({ project, delay = 0 }) {
    return (
        <Card
            variant="glass"
            className="group relative overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_2rem_rgba(217,169,78,0.2)] hover:border-gold/40 h-full flex flex-col"
        >
            <div className="p-6 flex flex-col flex-1">
                {/* Project name */}
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl" aria-hidden="true">📜</span>
                    <h3 className="text-xl md:text-2xl font-fantasy font-bold text-gold group-hover:text-yellow-400 transition-colors duration-300">
                        {project.name}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 font-fantasy text-sm md:text-base leading-relaxed mb-4 flex-1">
                    {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-pixel bg-amber-900/30 text-amber-200 border border-amber-700/40 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                    <ActionButton
                        href={project.liveUrl}
                        variant="amber"
                        size="sm"
                        className="px-5 py-2"
                        icon={
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        }
                    >
                        Live Demo
                    </ActionButton>
                    <ActionButton
                        href={project.githubUrl}
                        variant="github"
                        size="sm"
                        className="px-5 py-2"
                        icon={
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        }
                    >
                        GitHub
                    </ActionButton>
                </div>
            </div>

            {/* Decorative corner glow on hover */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
        </Card>
    )
}

export default ProjectCard
