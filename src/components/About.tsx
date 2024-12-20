import { Award, Users, Scale } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">Sobre Nós</h2>
            <p className="text-gray-600 mb-6">
              Com mais de 20 anos de experiência, nossa equipe de advogados
              especializados oferece soluções jurídicas personalizadas e
              eficientes para nossos clientes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Award className="h-8 w-8 text-[#FFD700]" />
                <div>
                  <h3 className="font-semibold">Premiados</h3>
                  <p className="text-sm text-gray-600">
                    Reconhecimento nacional
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-8 w-8 text-[#FFD700]" />
                <div>
                  <h3 className="font-semibold">+1000 Clientes</h3>
                  <p className="text-sm text-gray-600">Atendidos com sucesso</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Equipe de advogados"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#FFD700] p-6 rounded-lg">
              <Scale className="h-12 w-12 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
