const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Photo Left */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2">
              <img
                src="/images/profile.jpg" // <-- Update this path to your actual image
                alt="Koppu Hemanth Sai Kumar"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move drop-shadow-lg">
              Hi, I'm Hemanth Sai Kumar Koppu
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6">
              Full-Stack Developer • Problem Solver
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
              Computer Science Engineering student passionate about creating innovative web applications. 
              {/* Experienced in React, Node.js, and building collaborative real-time solutions with 450+ LeetCode problems solved. */}
              I turn problems into products, and error logs into late-night learning sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a
                href="/MyResume.pdf"
                download
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a
                href="/KoppuHemanthSaiKumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Resume
              </a>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

// Add this to the file (or your global CSS):
// @keyframes gradient-move {
//   0%, 100% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
// }
// .animate-gradient-move {
//   background-size: 200% 200%;
//   animation: gradient-move 3s ease-in-out infinite;
// }
