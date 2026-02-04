

const Education = () => {
  const education = [
    {
      id: 1,
      institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2023 - 2027 (Expected)",
      location: "Vijayawada, Andhra Pradesh",
      gpa: "9.43/10.0",
      logo: "🎓",
      // highlights: [
      //   "Excellent academic performance with 9.43 CGPA",
      //   "Active volunteer as NSS Co-Ordinator and literary club member",
      //   "Participated in multiple hackathons and coding competitions",
      //   "Developed innovative projects"
      // ],
      // coursework: [
      //   "Data Structures & Algorithms",
      //   "Database Management Systems",
      //   "Software Engineering",
      //   "Web Technologies",
      //   "Computer Networks",
      //   "Operating Systems",
      //   "Machine Learning",
      //   "Object Oriented Programming"
      // ]
    },
    // {
    //   id: 2,
    //   institution: "Chaitanya Junior College",
    //   degree: "Intermediate (12th Grade)",
    //   duration: "2019 - 2021",
    //   location: "Andhra Pradesh",
    //   gpa: "97.9%",
    //   logo: "�",
    //   highlights: [
    //     "Achieved outstanding 97.9% in Intermediate examinations",
    //     "Strong foundation in Mathematics, Physics, and Chemistry",
    //     "Developed early interest in computer programming",
    //     "Participated in various academic competitions"
    //   ],
    //   coursework: [
    //     "Mathematics",
    //     "Physics", 
    //     "Chemistry",
    //     "Computer Science Fundamentals"
    //   ]
    // },
    // {
    //   id: 3,
    //   institution: "Vijayarani English Medium High School",
    //   degree: "Secondary School Certificate (10th Grade)",
    //   duration: "2018 - 2019",
    //   location: "Andhra Pradesh",
    //   gpa: "100%",
    //   logo: "🏫",
    //   highlights: [
    //     "Perfect 100% score in SSC examinations",
    //     "Demonstrated exceptional academic excellence",
    //     "Strong foundation in core subjects",
    //     "Leadership qualities in school activities"
    //   ],
    //   coursework: [
    //     "Mathematics",
    //     "Science",
    //     "Social Studies",
    //     "English",
    //     "Telugu"
    //   ]
    // }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Education
          </h2>
          <div className="h-1 w-24 bg-gray-900 dark:bg-white rounded-full"></div>
        </div>

        {/* Education */}
        <div>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-xl shadow-lg p-8 hover:border-gray-400 dark:hover:border-white hover:border-2 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{edu.logo}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center mr-6 mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l.01.01M8 7l-.01.01M16 7l.01.01m-7.01 6.99h6m2 0a2 2 0 002-2V9a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center mr-6 mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center mb-2">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Highlights
                        </h5>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div> */}

                      {/* <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
