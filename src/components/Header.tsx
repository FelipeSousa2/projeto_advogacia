
import { Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed w-full bg-black/90 text-white z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-[#FFD700]" />
            <span className="text-2xl font-serif">Lexus & Associates</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-[#FFD700] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#FFD700] transition-colors">
              Sobre
            </a>
            <a
              href="#practice"
              className="hover:text-[#FFD700] transition-colors"
            >
              Áreas de Atuação
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#FFD700] transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="hover:text-[#FFD700] transition-colors"
            >
              Contato
            </a>
          </nav>

          <button className="bg-[#FFD700] text-black px-6 py-2 rounded hover:bg-[#FFE55C] transition-colors">
            Agendar Consulta
          </button>
        </div>
      </div>
    </header>
  );
}
