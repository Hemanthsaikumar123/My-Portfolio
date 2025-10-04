import { useState } from 'react';

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

  const certificationCategories = {
    // "Cloud & AI": [
    //   {
    //     name: "AWS Academy Data Engineering",
    //     issuer: "Amazon Web Services (AWS) Training and Certification",
    //     date: "2024",
    //     image: "/images/certificates/aws-data-engineering.png"
    //   },
    //   {
    //     name: "Prompt Design in Vertex AI",
    //     issuer: "Google Cloud",
    //     date: "2024",
    //     image: "/images/certificates/google-vertex-ai.png"
    //   }
    // ],
    "Course Completion": [
      {
        name: "Back End Development and APIs",
        issuer: "freeCodeCamp",
        date: "September 11 2025",
        image: "/images/certificates/backend_apis.png"
      },
      {
        name: "PCAP-Programming Essentials in Python",
        issuer: "Cisco Networking Academy",
        date: "September 06 2024",
        image: "/images/certificates/cisco-python.png"
      },
      {
        name: "Java Programming Fundamentals",
        issuer: "Infosys Springboard",
        date: "November 03 2024",
        image: "/images/certificates/infosys-java.png"
      },
      {
        name: "Linux Essentials",
        issuer: "Cisco Networking Academy",
        date: "April 16 2025",
        image: "/images/certificates/cisco-linux.png"
      },
      {
        name:" UiPath Academy Automation Explorer Training",
        issuer: "UiPath",
        date: "July 23 2024",
        image: "/images/certificates/uipath.png"
      },
      {
        name:"Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "August 24 2024",
        image: "/images/certificates/cisco-cybersecurity.png"
      },
      {
        name: "AWS Academy Data Engineering",
        issuer: "AWS acedemy",
        date: "September 2024",
        image: "/images/certificates/aws-de.png"
      },
      {
        name: "Prompt Design in Vertex AI-Skill Badge",
        issuer: "Google Cloud",
        date: "2024",
        image: "/images/certificates/googlebadge.jpg"
      },
      {
        name: "Data	Analytics	Job	Simulation",
        issuer: "Deloitte-Forage",
        date: "July 2025",
        image: "/images/certificates/deloitte-dajs.png"
      }

      
    ],
    "NPTEL": [
      {
        name: "Programming in Modern C++",
        issuer: "Nptel",
        date: "November 2024",
        badge: "🌐",
        image: "/images/certificates/nptel-cpp.png"
      }
    ]
  }

  const [expandedCert, setExpandedCert] = useState(null);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{edu.logo}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
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

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Certifications & Achievements
          </h3>
          
          {/* Certification Categories */}
          <div className="space-y-12">
            {Object.entries(certificationCategories).map(([category, certs]) => (
              <div key={category} className="mb-12">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {category}
                  </h4>
                  <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
                </div>
                
                {/* Certificates Grid */}
                <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-100">
                  {certs.map((cert, index) => (
                    <div
                      key={index}
                      className="min-w-[300px] max-w-xs group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden relative"
                    >
                      {/* Certificate Image or Header */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                          onClick={() => setExpandedCert(cert.image)}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                      </div>
                      
                      {/* Certificate Content */}
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          {/* <span className="text-2xl mr-3">{cert.badge}</span> */}
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {cert.name}
                          </h4>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{cert.date}</div>
                        <div className="flex items-center mb-4">
                          <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                        
                        {/* Verification Badge */}
                        {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Achievements Summary */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">LeetCode Problems</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-1">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">GeeksforGeeks Problems</div>
              </div>
              {/* <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600 mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professional Certificates</div>
              </div> */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-orange-600 mb-1">9.43</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for expanded certificate */}
      {expandedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setExpandedCert(null)}>
          <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-3xl w-full flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
              onClick={() => setExpandedCert(null)}
              title="Close"
            >
              &times;
            </button>
            <img src={expandedCert} alt="Certificate" className="w-full h-auto max-h-[70vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Education
