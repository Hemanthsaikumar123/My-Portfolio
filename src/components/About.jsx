import { useState, useRef, useEffect } from 'react';
import { skills } from '../data/skills';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Profile + Text (70%) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="relative rounded-full border-2 border-white/30 p-1 hover:border-white hover:border-2 transition-all duration-300">
                  <img
                    src="/images/profile.jpg"
                    alt="Hemanth Sai Kumar"
                    className="rounded-full h-48 w-48 md:h-64 md:w-64 object-cover"
                  />
                </div>

                {/* Social Links on Hover */}
                <div className="absolute inset-0 rounded-full flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80">
                  <a
                    href="https://github.com/Hemanthsaikumar123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/koppu-hemanth-sai-kumar-7562b82a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl text-gray-500 dark:text-gray-300 font-light mb-2">
                  Hi, I'm
                </h2>
                <h1 className="font-black text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent tracking-tighter leading-none italic">
                  Hemanth Sai Kumar Koppu
                </h1>
              </div>

              <p className="text-gray-700 dark:text-gray-100 leading-relaxed text-lg md:text-xl mt-6">
                A passionate developer who transforms <span className="font-semibold text-gray-900 dark:text-white">innovative ideas</span> into 
                <span className="font-semibold italic text-gray-900 dark:text-white"> functional reality</span>, crafting elegant solutions that make a difference.
              </p>

              <div className="flex flex-wrap gap-3 pt-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-lg transition-all duration-300 font-medium shadow-md"
                >
                  See My Work
                </a>

                <a
                  href="/KoppuHemanthSaiKumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-white/20 transition-all duration-300 font-medium inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Resume
                </a>

                <a
                  href="/MyResume.pdf"
                  download
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-white/20 transition-all duration-300 font-medium inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Skills Carousel (30%) */}
          <div className="lg:col-span-5">
            <SkillsCarousel
              skills={skills}
              activeIndex={activeSkillIndex}
              setActiveIndex={setActiveSkillIndex}
              setIsModalOpen={setIsModalOpen}
            />

            {/* Competitive Programming */}
            <div className="mt-6 space-y-4">
              <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Competitive Programming
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://leetcode.com/u/koppuhemanthsaikumar123/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-900 dark:text-white">LeetCode</span>
                    </div>
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a 
                    href="https://www.geeksforgeeks.org/profile/koppuhemanthndk5" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm12.424-1.888H18.67c-.012-.484-.092-.957-.24-1.41a4.76 4.76 0 0 0-.937-1.622 4.04 4.04 0 0 0-1.088-.768c-.396-.196-.817-.338-1.25-.422v7.87a1.989 1.989 0 0 0-.515.05 3.493 3.493 0 0 0-.415.127l-3.762 1.502c.104-1.42.132-2.84.132-4.26V3.428a1.989 1.989 0 0 0-1.278-1.851 1.949 1.949 0 0 0-2.202.597L2.807 8.284a4.759 4.759 0 0 0-.937 1.622 5.038 5.038 0 0 0-.24 1.41H.42c-.028.16-.048.322-.06.484-.014.148-.02.296-.02.445 0 .15.006.297.02.445.012.162.032.324.06.484h1.21c.012.485.092.958.24 1.41.395.986.908 1.41.937 1.622.028.212.736.768 1.088.768.396.196.817.338 1.25.422v7.87c0 .265.105.52.293.707a.997.997 0 0 0 1.414 0l3.762-3.764c.104-1.42.132-2.84.132-4.26h7.354c.028-.16.048-.322.06-.484.014-.148.02-.296.02-.445 0-.15-.006-.297-.02-.445a4.838 4.838 0 0 0-.06-.484z"/>
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-900 dark:text-white">GeeksforGeeks</span>
                    </div>
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a 
                    href="https://www.codechef.com/users/hemanth2327" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-700 dark:text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm-.7 3.15c-.3.05-.6.15-.85.35L6.8 7.6c-.5.4-.65 1-.45 1.6.2.5.65.85 1.2.9l2.45.25c.2 0 .35.15.4.35l.25 2.45c.05.55.4 1 .9 1.2.6.2 1.2.05 1.6-.45l2.6-3.65c.4-.55.4-1.3 0-1.85l-2.6-3.65c-.35-.5-.95-.75-1.55-.7zm.7 4.6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-900 dark:text-white">CodeChef</span>
                    </div>
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Currently Learning
                </h3>
                <p className="text-xs text-gray-700 dark:text-gray-200">
                  Always learning new technologies and frameworks to keep pace with the changing tech world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-gray-200 dark:border-white/20 shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  All My Skills
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto" style={{ maxHeight: '60vh' }}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white hover:border-2 transition-all"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <h4 className="font-medium text-sm text-gray-900 dark:text-white">{skill.name}</h4>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-white/10 border border-blue-200 dark:border-white/20 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Looking for a specific skill?
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Don't see what you're looking for? I'm always happy to learn new technologies! 
                  As a quick learner, I can adapt to new tools and frameworks based on project requirements.
                </p>
                <a
                  href="#contact"
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex items-center text-sm text-blue-600 dark:text-white hover:text-blue-800 dark:hover:text-gray-300 font-medium transition-colors"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Skills Carousel Component
const SkillsCarousel = ({ skills, activeIndex, setActiveIndex, setIsModalOpen }) => {
  const containerRef = useRef(null);
  const lastScrollRef = useRef(0);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = 120;
    const centerOffset = container.offsetWidth / 2;

    const newIndex = Math.round((scrollLeft + centerOffset - itemWidth / 2) / itemWidth);
    const clampedIndex = Math.max(0, Math.min(skills.length - 1, newIndex));

    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
      lastScrollRef.current = scrollLeft;
    }
  };

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const itemWidth = 120;
    const centerOffset = container.offsetWidth / 2;
    const targetScroll = index * itemWidth - centerOffset + itemWidth / 2;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline decoration-dotted underline-offset-4 transition-colors"
        >
          View All
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="relative flex-1 min-h-[280px] flex items-center">

        {/* Skills Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="overflow-x-scroll scrollbar-hide w-full py-8 px-12"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-6 items-center" style={{ width: 'max-content' }}>
            {skills.map((skill, index) => {
              const distance = Math.abs(index - activeIndex);
              const isActive = index === activeIndex;
              const scale = isActive ? 1.2 : Math.max(0.7, 1 - distance * 0.15);
              const opacity = isActive ? 1 : Math.max(0.4, 1 - distance * 0.2);

              return (
                <div
                  key={skill.id}
                  onClick={() => setActiveIndex(index)}
                  className="flex-shrink-0 transition-all duration-300"
                  style={{ 
                    scrollSnapAlign: 'center',
                    transform: `scale(${scale})`,
                    opacity
                  }}
                >
                  <div className={`w-24 p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'border-blue-600 dark:border-white bg-blue-50 dark:bg-white/10 shadow-lg shadow-blue-200 dark:shadow-white/20'
                      : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5'
                  }`}>
                    <div className="flex justify-center mb-3">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className={`text-xs font-medium text-center mb-2 ${
                      isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {skill.name}
                    </h3>
                    <div className="flex justify-center">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                        isActive
                          ? 'border-blue-600 dark:border-white text-blue-700 dark:text-white bg-blue-100 dark:bg-transparent'
                          : 'border-gray-300 dark:border-white/20 text-gray-500'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-2">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-blue-600 dark:bg-white w-4'
                  : 'bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Active Skill Display */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Scroll to explore • <span className="font-medium text-gray-900 dark:text-white">{skills[activeIndex]?.name}</span>
        </p>
      </div>
    </div>
  );
};

export default About;
