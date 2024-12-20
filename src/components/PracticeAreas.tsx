import { Building2, Scale, Briefcase, Calculator } from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Direito Empresarial",
    description:
      "Assessoria completa para empresas em questões societárias, contratos e compliance.",
  },
  {
    icon: Scale,
    title: "Direito Civil",
    description:
      "Representação em processos civis, contratos e questões patrimoniais.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description:
      "Suporte jurídico em relações trabalhistas e negociações sindicais.",
  },
  {
    icon: Calculator,
    title: "Direito Tributário",
    description:
      "Planejamento tributário e representação em processos administrativos e judiciais.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">
          Áreas de Atuação
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <area.icon className="h-12 w-12 text-[#FFD700]" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
