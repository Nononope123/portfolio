import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Palette, Brain } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          À <span className="text-primary">Propos</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Développeur passionné par l'innovation</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Avec une expertise solide en développement web et mobile, je crée des solutions digitales modernes et
              performantes. Mon approche combine créativité technique et expérience utilisateur optimale.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Spécialisé dans l'écosystème React/Next.js et passionné par les nouvelles technologies comme l'IA
              générative, je transforme vos idées en applications web et mobiles exceptionnelles.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Développement Web</h4>
                <p className="text-sm text-muted-foreground">
                  Applications web modernes avec React, Next.js et TypeScript
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Mobile</h4>
                <p className="text-sm text-muted-foreground">Applications mobiles cross-platform avec React Native</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">Conception d'interfaces utilisateur avec Figma</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">IA Générative</h4>
                <p className="text-sm text-muted-foreground">Intégration d'IA avec ChatGPT et Gemini</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
