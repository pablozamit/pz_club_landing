import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, Users, Video, Brain, Star } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">Ya no estás solo.</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Únete al único círculo hispano de retención seminal. Ciencia, comunidad y estrategia para dominar tu
            impulso.
          </p>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Quiero entrar
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Lo que obtienes desde el primer día</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-emerald-600 transition-all duration-300">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">2 Cursos Clásicos</h3>
                <p className="text-gray-300">
                  Acceso a "Fundamentos Antifap" y "Reto de 7 días". Ya no disponibles en la web.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-emerald-600 transition-all duration-300">
              <CardContent className="p-8">
                <FileText className="w-12 h-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">Libro Digital</h3>
                <p className="text-gray-300">
                  "Arte y Ciencia de la Retención Seminal" - La guía completa que necesitas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-emerald-600 transition-all duration-300">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">Comunidad Privada</h3>
                <p className="text-gray-300">Grupo exclusivo de WhatsApp con la comunidad oficial. Apoyo 24/7.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-emerald-600 transition-all duration-300">
              <CardContent className="p-8">
                <Video className="w-12 h-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">Sesiones Online</h3>
                <p className="text-gray-300">2 sesiones mensuales para resolver dudas y compartir avances.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-emerald-600 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <Brain className="w-12 h-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">IA Exclusiva</h3>
                <p className="text-gray-300">
                  "Cerebro Digital de Pablo Zamit": IA entrenada con +400 notas sobre biohacking y desarrollo masculino.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emotional Call Section */}
      <section className="px-4 py-20 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Deja de hacerlo solo.</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Estás a un clic de entrar en una hermandad que sí te entiende.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20 bg-gray-900">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-gray-800 border border-emerald-600 rounded-2xl p-12">
            <div className="text-5xl md:text-6xl font-black text-emerald-500 mb-4">
              9,90 €<span className="text-2xl text-gray-400">/mes</span>
            </div>
            <p className="text-lg text-gray-300 mb-8">Sin permanencias. Todo desbloqueado desde el primer minuto.</p>
            <p className="text-sm text-gray-400 mb-8">Cancela cuando quieras</p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-16 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
            >
              Quiero entrar
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-20 bg-black">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                "Hace meses que no recaigo. Por fin entiendo qué estaba haciendo mal. Gracias, Pablo."
              </blockquote>
              <cite className="text-gray-400 font-semibold">— Marco, 24 años</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 bg-emerald-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tu transformación empieza hoy</h2>
          <p className="text-xl text-emerald-100 mb-12">No esperes más. La comunidad te está esperando.</p>
          <Button
            size="lg"
            className="bg-white text-emerald-900 hover:bg-gray-100 px-16 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Empieza ahora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">© 2024 Pablo Zamit. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
