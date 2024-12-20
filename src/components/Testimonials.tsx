import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, Tech Solutions",
    text: "Excelente assessoria jurídica. Profissionais altamente capacitados e atendimento personalizado.",
  },
  {
    name: "Ana Paula Santos",
    role: "Diretora Financeira",
    text: "Resultados expressivos em nossa reestruturação tributária. Recomendo fortemente.",
  },
  {
    name: "Roberto Mendes",
    role: "Empresário",
    text: "Competência e profissionalismo em todas as interações. Parceiros de confiança.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 border border-[#FFD700] rounded-lg"
            >
              <Quote className="h-8 w-8 text-[#FFD700] mb-4" />
              <p className="mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
