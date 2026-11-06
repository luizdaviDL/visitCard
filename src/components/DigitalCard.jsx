
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Code,
  Coffee,
  Star,
  Download,
  ExternalLink
} from 'lucide-react';

import Projects from './Projects';

const DigitalCard = () => {
const services = [
  { name: "Automação de processos administrativos e operacionais para empresas e escritórios" },
  { name: "Desenvolvimento de sistemas personalizados para gestão e necessidades específicas" },
  { name: "Criação de landing pages profissionais para divulgação de produtos, serviços e captação de clientes" },
  { name: "Desenvolvimento de sites institucionais e comerciais para empresas e negócios locais" },
  { name: "Desenvolvimento de plataformas e aplicações web sob medida" },
  { name: "Desenvolvimento de soluções digitais para projetos acadêmicos e universitários, incluindo TCCs" }
];

  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Python', level: 80, color: 'bg-blue-600' },
    { name: 'PostgreSQL', level: 85, color: 'bg-purple-500' },
    { name: 'AWS', level: 75, color: 'bg-orange-500' }
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-6 md:px-8">

      <div className="w-full max-w-none mx-auto">

        {/* Cabeçalho Principal */}
        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden mb-8 transition-all duration-300 hover:shadow-2xl">

          <div className="relative">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800"></div>
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Conteúdo */}
            <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 text-white">

              <div className="flex flex-col md:flex-row items-center gap-8">

                {/* Avatar */}
              <div className="relative group shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-[#061d3d] border-2 border-white/40 shadow-lg transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">

                  <img
                    src="/logo.png"
                    alt="Logotipo Luiz Sistemas"
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

                {/* Informações */}
                <div className="text-center md:text-left flex-1">

                  <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Luiz Sistemas
                  </h1>
                    
                  <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
                    TECNOLOGIA E SOLUÇÕES DIGITAIS
                  </p>
                  
                  A Luiz Sistemas oferece soluções tecnológicas para empresas, profissionais e empreendedores, com foco no desenvolvimento de sistemas web personalizados, criação de landing pages e sites profissionais, além da automação de processos empresariais. Cada solução é planejada de acordo com as necessidades do negócio, buscando otimizar operações, fortalecer a presença digital e proporcionar mais eficiência por meio da tecnologia.

                

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-6 min-w-0">

            {/* Biografia */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Coffee className="text-blue-600" size={20} />
                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Sobre a Luiz Sistemas
                </h2>

              </div>

              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                A Luiz Sistemas oferece soluções tecnológicas personalizadas para empresas, profissionais e empreendedores que desejam otimizar processos, fortalecer sua presença digital e aproveitar melhor os recursos da tecnologia.
                {'\n\n'}
              Em um cenário em que ferramentas de inteligência artificial tornam a criação de soluções digitais cada vez mais acessível, contar com conhecimento técnico e orientação especializada continua sendo fundamental. Afinal, não basta criar uma ferramenta: é necessário compreender as necessidades do negócio, definir a solução adequada e garantir que ela atenda aos objetivos propostos.
                {'\n\n'}
              Nossa atuação abrange o desenvolvimento de sistemas web personalizados, criação de sites institucionais, landing pages e automação de processos administrativos e operacionais.
                  {'\n\n'}
              Cada projeto é conduzido a partir do entendimento das necessidades do cliente, considerando funcionalidades, experiência de utilização, organização e viabilidade técnica. O objetivo é entregar soluções que façam sentido na prática, sejam funcionais e contribuam para os resultados do negócio.
              </p>

            </section>

            {/* Serviços */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Coffee className="text-blue-600" size={20} />
                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Serviços oferecidos
                </h2>

              </div>

              <div className="space-y-4">

                {services.map((serv, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-green-600 font-bold">•</span>
                    {serv.name}
                  </p>
                ))}

              </div>

            </section>

            {/* Projetos */}
            <section className="w-full">
              <Projects />
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-6 min-w-0">

            {/* Contato */}
            <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Contato
              </h3>

              <div className="space-y-4">

                {/* WhatsApp */}
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">

                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors shrink-0">
                    <Phone className="text-green-600" size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">
                      Telefone / WhatsApp
                    </p>

                    <p className="font-medium text-gray-800 break-words">
                      +55 (91) 99621-4498
                    </p>
                  </div>

                </div>

                {/* Localização */}
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">

                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors shrink-0">
                    <MapPin className="text-red-600" size={18} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Localização
                    </p>

                    <p className="font-medium text-gray-800">
                      Ananindeua, PA
                    </p>
                  </div>

                </div>

              </div>

            </section>


          </aside>

        </div>

      </div>

    </main>
  );
};

export default DigitalCard;
