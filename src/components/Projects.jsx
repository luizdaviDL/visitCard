import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Modal } from './Modal';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedScreenshots, setSelectedScreenshots] = useState([]);

  const openModal = (screenshots) => {
    setSelectedScreenshots(screenshots);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedScreenshots([]);
  };

  const projects = [
    {
      title: "AjusteFAST",
      description: "Aplicação desktop para extração, tratamento e organização de dados de PDFs, com exportação para planilhas e interface gráfica desenvolvida com PyWebView, HTML, CSS e JavaScript. Por se tratar de um sistema interno de uma empresa na qual atuei, a demonstração pública não está disponível.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",    
      status: "done", // concluído
      show: true,
      showProject: true,   
      screenshots: [
        "/ajusteFast/AjusteStart.png",
        "/ajusteFast/Ajuste01.png",
        "/ajusteFast/Ajuste02.png",
        "/ajusteFast/Ajuste03.png",
        "/ajusteFast/Ajuste05.png",
        "/ajusteFast/Ajuste06.png",        
      ]         
    },
    {
      title: "FraseMe",
      description: "Aplicativo de gerenciamento de aprendizado de idiomas para autodidatas",
      image: "../fraseMe.png",
      status: "done-updating",
      show: true,
      showProject: true,       
      screenshots: [
        "/fraseme/fraseLogin.png",
        "../fraseme/fraseMe02.png",
        "../fraseme/fraseMe03.png",
        "../fraseme/fraseMe04.png",
      ]
    },
 
    // outros projetos...
  ];

  return (
    <section id="projetos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Sistemas já Desenvolvidos
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6" style={{ background: "#fafafaff", height: "100%" }}>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <span
                    style={{
                      backgroundColor:
                        project.status === "done"
                          ? "#22c55e"
                          : project.status === "development"
                          ? "#facc15"
                          : "#3b82f6",
                      color: project.status === "development" ? "#000" : "#fff",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      display: "inline-block",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {project.status === "done"
                      ? "Sistema Desktop: Automoção"
                      : project.status === "development"
                      ? "Em Desenvolvimento"
                      : "Sistema Web"}
                  </span>

                  {project.show && (
                    <div className="flex space-x-4">
                      {project.showProject && (
                        <button
                          onClick={() => openModal(project.screenshots || [])}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <ExternalLink size={20} />
                          <span>Ver mais</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        screenshots={selectedScreenshots}
        />

    </section>
  );
};

// Modal Component (coloque abaixo ou em outro arquivo)


export default Projects;
