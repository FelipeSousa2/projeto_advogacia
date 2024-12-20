import React, { useState } from "react";
import Header from "./Header"; // Importe o Header
import Footer from "./Footer"; // Importe o Footer
// Importar o Link para navegação interna

function ScheduleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Envio real de dados pode ser feito aqui
  };

  return (
    <>
      {/* Cabeçalho */}
      <Header />

      <section id="schedule" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6 text-center">
            Agende Sua Consulta
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Escolha um horário conveniente para você e entre em contato conosco.
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow-lg"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Horário
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[--color-primary] text-black py-3 rounded-lg hover:bg-[#FFE55C] transition-colors"
              >
                Agendar Consulta
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default ScheduleForm;
