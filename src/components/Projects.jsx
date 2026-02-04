import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "CodeCollab",
      description: "A real-time collaborative code editor application enabling multiple users to write and edit code simultaneously in shared rooms.",
      image: "/images/projects/codecollab.png",
      techStack: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "Socket.IO", "Monaco Editor"],
      githubLink: "https://github.com/Hemanthsaikumar123/CodeCollab",
      keyLearnings: [
        "Real-time synchronization with Socket.IO",
        "Monaco Editor integration",
        "Room-based collaboration system"
      ]
    },
    {
      id: 2,
      name: "MediFi - Medicine Finder",
      description: "Smart healthcare assistant web application with symptom checker, medicine information, and medical chatbot.",
      image: "/images/projects/medifi.png",
      techStack: ["Node.js", "Express.js", "EJS", "PostgreSQL", "Infermedica API", "MedlinePlus", "OpenFDA"],
      githubLink: "https://github.com/Hemanthsaikumar123/medifi-v2",
      keyLearnings: [
        "Healthcare API integration",
        "Medical data processing",
        "Rule-based chatbot development"
      ]
    },
    {
      id: 3,
      name: "AI Resume Analyser & Cover Letter Generator",
      description: "AI-driven application that optimizes resumes, identifies skill gaps, and generates personalized cover letters.",
      image: "/images/projects/ai-resume.png",
      techStack: ["React", "Vite", "Node.js", "Express.js", "Google Gemini AI", "Puter.js", "PDF-Parse"],
      githubLink: "https://github.com/Hemanthsaikumar123/AI_ResumeAnalyser_CoverLetterGenerator",
      keyLearnings: [
        "AI integration with Google Gemini",
        "PDF processing and generation",
        "Career guidance algorithms"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="h-1 w-24 bg-gray-300 dark:bg-white/30 rounded-full mb-12"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="flex flex-col h-full overflow-hidden border border-gray-200 dark:border-white/20 rounded-lg hover:border-2 hover:border-gray-400 dark:hover:border-white transition-all duration-300 bg-white dark:bg-black">
        <div className="p-0 flex flex-col h-full">
          <div className="relative overflow-hidden group h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white text-center px-4 z-10">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4 flex-grow">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Key Learnings:
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                {project.keyLearnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black border-2 border-gray-900 dark:border-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;