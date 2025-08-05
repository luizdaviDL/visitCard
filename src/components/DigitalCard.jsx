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
  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Python', level: 80, color: 'bg-blue-600' },
    { name: 'PostgreSQL', level: 85, color: 'bg-purple-500' },
    { name: 'AWS', level: 75, color: 'bg-orange-500' }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      tech: 'React • Node.js • PostgreSQL',
      description: 'Plataforma completa de e-commerce com painel administrativo'
    },
    {
      title: 'API RESTful',
      tech: 'Express • MongoDB • JWT',
      description: 'API robusta para aplicação de gerenciamento de tarefas'
    },
    {
      title: 'Dashboard Analytics',
      tech: 'React • D3.js • JavaScript',
      description: 'Interface para visualização de dados em tempo real'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho Principal */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-2xl">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Conteúdo do Header */}
            <div className="relative z-10 px-8 py-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="relative group">
                  <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-105">
                    <Code size={48} className="text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Informações Principais */}
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Luiz Programador
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
                    Desenvolvedor de Sistemas
                  </p>
                  <p className="text-white/90 max-w-2xl leading-relaxed">
                    Desenvolvedor e estudante de TI, com 3 anos de experiência em desenvolvimento de sistemas web e automações envolvendo arquivos (Excel, relatórios, PDFs). 
                    Tenho como objetivo transformar ideias complexas em soluções simples, úteis e acessíveis, que realmente agreguem valor ao dia a dia do usuário.
                  </p>
                </div>
              </div>

              {/* Botões de Ação 
              <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Mail size={18} />
                  Entrar em Contato
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300 border border-white/30">
                  <Download size={18} />
                  Download CV
                </button>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sobre Mim */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Coffee className="text-blue-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Sobre Mim</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Desenvolvedor com mais de 5 anos de experiência criando aplicações web robustas e escaláveis. 
                Especializado em tecnologias modernas como React, JavaScript e Node.js.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sempre em busca de novos desafios e oportunidades para crescer profissionalmente, 
                mantendo-me atualizado com as últimas tendências do desenvolvimento web.
              </p>
            </div>

            {/* Habilidades 
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Star className="text-green-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Habilidades</h2>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>*/}

            {/* Projetos Recentes */}
            <Projects/>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Informações de Contato */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">seu@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Phone className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <p className="font-medium text-gray-800">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <MapPin className="text-red-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Localização</p>
                    <p className="font-medium text-gray-800">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sociais */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Redes Sociais</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Github className="text-white" size={18} />
                  </div>
                  <span className="font-medium text-gray-800 group-hover:text-gray-900">GitHub</span>
                  <ExternalLink size={16} className="ml-auto text-gray-400 group-hover:text-gray-600 transition-colors" />
                </a>
                
                <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <Linkedin className="text-white" size={18} />
                  </div>
                  <span className="font-medium text-gray-800 group-hover:text-gray-900">LinkedIn</span>
                  <ExternalLink size={16} className="ml-auto text-gray-400 group-hover:text-gray-600 transition-colors" />
                </a>
                
                <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
                    <Globe className="text-white" size={18} />
                  </div>
                  <span className="font-medium text-gray-800 group-hover:text-gray-900">Portfólio</span>
                  <ExternalLink size={16} className="ml-auto text-gray-400 group-hover:text-gray-600 transition-colors" />
                </a>
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-800">Disponível para trabalho</span>
              </div>
              <p className="text-green-700 text-sm">
                Estou aberto a novas oportunidades e projetos interessantes. 
                Vamos conversar sobre como posso ajudar seu projeto!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;