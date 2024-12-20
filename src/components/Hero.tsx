function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 animate-fade-in">
              Excelência Jurídica e Resultados Confiáveis
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Soluções exclusivas para seus desafios jurídicos
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-[--color-primary] text-black px-8 py-3 rounded hover:bg-[#FFE55C] transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Fale Conosco
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white/10 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
