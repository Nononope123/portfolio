import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Figma",
  "Git",
  "SQL",
  "Framer Motion",
  "GitHub",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Mes <span className="text-primary">Compétences</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <Card key={tech} className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="p-4 text-center">
                  <span className="text-card-foreground font-medium">{tech}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
