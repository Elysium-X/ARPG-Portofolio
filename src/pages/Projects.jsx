import ScrollReveal from '../components/ui/ScrollReveal'
import ProjectCard from '../components/projects/ProjectCard'
import Card from '../components/ui/Card'
import { PROJECTS } from '../constants/data'

function Projects() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
            {/* Header */}
            <ScrollReveal>
                <Card variant="glass" padding="lg" className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-fantasy font-bold text-gold mb-3">
                        <span className="mr-3 text-4xl" aria-hidden="true">🏰</span>
                        Quest Log
                        <span className="ml-3 text-4xl" aria-hidden="true">🏰</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 font-fantasy">
                        Completed quests and conquered projects
                    </p>
                </Card>
            </ScrollReveal>

            {/* Project cards grid */}
            <div className="grid gap-6 md:grid-cols-2">
                {PROJECTS.map((project, index) => (
                    <ScrollReveal key={project.name} delay={index * 150}>
                        <ProjectCard project={project} />
                    </ScrollReveal>
                ))}
            </div>
        </div>
    )
}

export default Projects
