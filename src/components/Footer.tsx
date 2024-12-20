import { Scale, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-[#FFD700]" />
              <span className="text-xl font-serif">Lexus & Associates</span>
            </div>
            <p className="text-gray-400">
              Excelência jurídica e compromisso com resultados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#FFD700]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#FFD700]">
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#practice"
                  className="text-gray-400 hover:text-[#FFD700]"
                >
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#FFD700]"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Av. Paulista, 1000</li>
              <li>São Paulo, SP</li>
              <li>(11) 9999-9999</li>
              <li>contato@lexus.adv.br</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#FFD700] hover:text-[#FFE55C]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#FFD700] hover:text-[#FFE55C]">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lexus & Associates. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
