const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "NSS (National Service Scheme)",
      position: "NSS Co-Ordinator",
      duration: "2023 - Present",
      location: "VRSEC, Vijayawada",
      type: "Volunteer",
      logo: "🤝",
      responsibilities: [
        "Coordinated and led social service activities including community outreach programs",
        "Organized awareness campaigns focusing on social issues and community development",
        "Managed team of volunteers for various social service initiatives",
        "Developed leadership and organizational skills through community service projects"
      ],
      technologies: ["Leadership", "Community Service", "Project Management", "Team Coordination"],
      featured: true
    },
    {
      id: 2,
      company: "Various Hackathons",
      position: "Volunteer Organizer",
      duration: "2022 - Present",
      location: "Multiple Venues",
      type: "Volunteer",
      logo: "🏆",
      responsibilities: [
        "Assisted in organizing and coordinating hackathon events for smooth execution",
        "Managed technical setup and infrastructure for coding competitions",
        "Mentored participants in problem-solving and project development",
        "Facilitated networking between participants, judges, and sponsors"
      ],
      technologies: ["Event Management", "Technical Coordination", "Mentoring", "Problem Solving"],
      featured: true
    },
    {
      id: 3,
      company: "Personal Development",
      position: "Competitive Programmer",
      duration: "2021 - Present",
      location: "Online Platforms",
      type: "Self-Learning",
      logo: "⚡",
      responsibilities: [
        "Solved 450+ problems on LeetCode demonstrating strong algorithmic thinking",
        "Completed 100+ problems on GeeksforGeeks across various data structures",
        "Achieved multiple certifications from Cisco, Infosys, Google Cloud, and AWS",
        "Continuously learning new technologies and programming paradigms"
      ],
      technologies: ["Data Structures", "Algorithms", "Problem Solving", "Competitive Programming"],
      featured: false
    }
  ]

  const featuredExperiences = experiences.filter(exp => exp.featured)
  const otherExperiences = experiences.filter(exp => !exp.featured)

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my skills
          </p>
        </div>

        {/* Featured Experiences */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredExperiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{exp.logo}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                  </div>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="mr-4">{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                    exp.type === 'Full-time' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Experiences */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Other Notable Experiences
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherExperiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">{exp.logo}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h4>
                </div>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {exp.company}
                </p>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="mr-3">{exp.duration}</span>
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-1 mb-4">
                  {exp.responsibilities.slice(0, 2).map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-3 h-3 mr-2 mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 text-xs">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                  {exp.responsibilities.length > 2 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      +{exp.responsibilities.length - 2} more
                    </span>
                  )}
                </ul>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {exp.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                      +{exp.technologies.length - 3}
                    </span>
                  )}
                </div>

                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  exp.type === 'Full-time' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {exp.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
