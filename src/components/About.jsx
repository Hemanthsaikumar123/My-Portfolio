const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Hello! I'm Hemanth, a passionate Computer Science student
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                I'm pursuing my B.Tech in Computer Science and Engineering at Velagapudi 
                Ramakrishna Siddhartha Engineering College, Vijayawada (CGPA: 9.43). 
                I’m passionate about building full-stack applications and solving 
                real-world problems through code.
              </p>
              <p>
                I’ve developed innovative projects like <strong>CodeCollab</strong> 
                ( a real-time collaborative code editor application) and <strong>AI Resume Analyser & Cover Letter Generator</strong> 
                (an AI based resume analyser and cover letter generator). Alongside development, I’ve solved 
                450+ problems on LeetCode and 100+ on GeeksforGeeks, showcasing my 
                strong foundation in algorithms and problem-solving.
              </p>
              <p>
                Beyond coding, I actively contribute as an NSS Co-ordinator and 
                participate in hackathons, which have sharpened my leadership, 
                teamwork, and communication skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
