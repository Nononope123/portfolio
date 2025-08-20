import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "K-Ventures",
    description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    image: "/kventure.png",
    liveUrl: "https://k-ventures.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "ECMAC",
    description: "Tableau de bord interactif pour visualiser des données en temps réel.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Next.js"],
    image: "/ecmac.png",
    liveUrl: "https://ecmac.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "ONMACED",
    description: "Application mobile cross-platform pour la gestion de tâches.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"],
    image: "/onmaced.png",
    liveUrl: "https://onmaced.vercel.app/formation-activites",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Site portfolio moderne avec animations et design responsive.",
    technologies: ["Next.js", "Tailwind CSS", ],
    image: "/portfolio.png ",
    liveUrl: "https://portfolioaurel.vercel.app/",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Mes <span className="text-primary">Projets</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
