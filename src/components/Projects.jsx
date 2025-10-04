const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CodeCollab",
      description: "A real-time collaborative code editor application enabling multiple users to write and edit code simultaneously in shared rooms. Features live code synchronization using Socket.IO, syntax highlighting with Monaco Editor, and dynamic room-based collaboration.",
      image: "/images/projects/codecollab.png", // Add your project screenshot here
      logo: "👨‍💻",
      techStack: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "Socket.IO", "Monaco Editor"],
      githubUrl: "https://github.com/Hemanthsaikumar123/CodeCollab",
      demoUrl: "https://codecollab-demo.vercel.app",
      duration: "2025-Ongoing",
      type: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "MediFi - Medicine Finder",
      description: "Medify is a smart, user-friendly healthcare assistant web application that allows users to input symptoms and receive personalized diagnoses, treatment options, and drug recommendations. Features include Symptom Checker, Medicine Information, Rule-based Medical Chatbot, and Medical History Tracking.",
      image: "/images/projects/medifi.png", // Add your project screenshot here
      logo: "🏥",
      techStack: ["Node.js", "Express.js", "EJS", "PostgreSQL", "JavaScript", "HTML", "CSS", "Infermedica API", "MedlinePlus", "OpenFDA"],
      githubUrl: "https://github.com/Hemanthsaikumar123/medifi-v2",
      demoUrl: "https://medifi-demo.vercel.app",
      duration: "2024",
      type: "Full Stack",
      featured: true
    },
    {
      id: 3,
      title: "AI Resume Analyser & Cover Letter Generator",
      description: "A smart, AI-driven web application that helps job seekers optimize their resumes by analyzing them against job descriptions, identifying skill gaps, and generating personalized cover letters with professional PDF export. Features AI-Powered Resume Analysis, Job Description Matching, Skill Gap Identification, Career Recommendations, Cover Letter Generation, PDF Export, Real-time Feedback, and Technical Chatbot (Puter Integration).",
      image: "/images/projects/ai-resume.png", // Add your project screenshot here
      logo: "🤖",
      techStack: ["React", "Vite", "Node.js", "Express.js", "Google Gemini AI", "Puter.js", "Multer", "PDF-Parse", "HTML-PDF-Node", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Hemanthsaikumar123/AI_ResumeAnalyser_CoverLetterGenerator",
      demoUrl: "https://ai-resume-analyzer-demo.vercel.app",
      duration: "2024",
      type: "Full Stack",
      featured: true
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects - Larger Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to gradient background with emoji if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.fallback-bg').style.display = 'flex';
                  }}
                />
                <div className="fallback-bg hidden absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 items-center justify-center">
                  <div className="text-8xl opacity-80">{project.logo}</div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white bg-opacity-90 text-gray-800">
                    {project.duration}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-400 text-yellow-900">
                    ⭐ Featured
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  {/* <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Other Projects
              </h3>
              <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Smaller Project Image */}
                  <div className="h-40 relative overflow-hidden bg-gradient-to-br from-gray-400 to-gray-600">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to gradient background with emoji if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.fallback-bg').style.display = 'flex';
                      }}
                    />
                    <div className="fallback-bg hidden absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 items-center justify-center">
                      <div className="text-5xl opacity-80">{project.logo}</div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-medium rounded bg-white bg-opacity-90 text-gray-800">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {project.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack - Limit to 3 items */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                      {/* <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects