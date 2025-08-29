import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Instagram, ExternalLink, Menu, X, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const fullText = "Creating intuitive digital experiences";
  
  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.47 10.65c-1.69 0-2.92 1.1-2.92 2.91 0 1.8 1.23 2.9 2.92 2.9 1.55 0 2.67-.82 2.89-2.06h-1.46c-.14.51-.61.88-1.42.88-.89 0-1.43-.57-1.49-1.39h4.43c.02-.14.02-.27.02-.4 0-1.58-.98-2.84-3.01-2.84zm-1.52 2.25c.09-.72.64-1.2 1.45-1.2.83 0 1.38.48 1.45 1.2zm-4.62-1.87c-.22-.27-.48-.49-.77-.67-.29-.18-.62-.32-1-.42-.38-.1-.8-.15-1.26-.15H6v7.06h3.63c.47 0 .9-.05 1.3-.17.4-.11.74-.28 1.03-.5.29-.22.52-.5.68-.83.16-.33.24-.72.24-1.16 0-.52-.13-.96-.39-1.34-.26-.38-.64-.67-1.14-.82.38-.18.67-.42.87-.73.2-.31.3-.69.3-1.14 0-.39-.07-.72-.22-1.01zM7.46 10.5h1.79c.35 0 .64.1.87.3.23.2.35.48.35.83 0 .37-.12.67-.35.89-.23.22-.53.33-.9.33H7.46zm2.07 4.86H7.46v-2.05h2.01c.41 0 .73.1.96.31.23.21.34.5.34.86 0 .77-.41 1.15-1.24 1.15zM14.25 7.5h4.5v1.2h-4.5z" />
  </svg>
);
  const projects = [
    {
      id: 1,
      title: "AI Brand Generator",
      category: "Website Design",
      description: "An AI-powered platform that helps businesses create consistent branding by generating logos, color palettes, and typography systems tailored to their identity.",
      image: "/media/aibrandgenerator.png",
      link:"https://www.behance.net/gallery/232896467/AI-brand-Generator",
      tags: ["AI", "Branding", "Web App", "Prototyping"]
    },
    {
      id: 2,
      title: "Student Career Dashboard",
      category: "Website Design",
      description: "A personalized dashboard for students to track academic progress, explore career paths, and access curated learning resources for skill growth.",
      image: "/media/dashboard.png",
      link:"https://www.behance.net/gallery/223144881/Career-Student-Dashboard-UI-Design",
      tags: ["Web", "Dashboard", "Enterprise", "Data Visualization"]
    },
    {
      id: 3,
      title: "Kindergarten Landing Page",
      category: "Landing Page",
      description: "A playful and user-friendly landing page designed for a kindergarten, focusing on clear navigation for parents and engaging visuals for children.",
      image: "/media/kindergarten.png",
      link:"https://www.behance.net/gallery/232646125/Kinder-Garten-Landing-page",
      tags: ["Education", "Mobile", "Web", "Accessibility"]
    },
    {
      id: 4,
      title: "Skinn-Minimal Skincare App" ,
      category: "App Design",
      description: "A minimalistic skincare app that allows users to track routines, receive personalized recommendations, and explore dermatology-backed skincare tips.",
      image: "/media/skynn.png",
      link:"https://www.behance.net/gallery/231417171/SKYNN-Minimal-Skincare-App-UI",
      tags: ["Skincare", "Web", "Mobile", "User Research"]
    },
    {
      id: 5,
      title: "Anavrin: a jewellery website",
      category: "Landing Page",
      description: "An elegant jewelry e-commerce platform showcasing collections with immersive visuals, personalized browsing, and a seamless shopping experience.",
      image: "/media/Anavrin.png",
      link:"https://www.behance.net/gallery/223143217/Anavrin-Minimalist-Jewelry-Store-Landing-Page",
      tags: ["E-commerce", "Mobile", "Web", "Conversion Optimization"]
    },
    {
      id: 6,
      title: "Quook: your E library",
      category: "Landing Page",
      description: "A digital library app designed to make reading smarter, offering AI-powered book recommendations, personalized collections, and seamless access across devices.",
      image: "/media/library.png",
      link:"https://www.behance.net/gallery/223142835/QuOOK-Your-Digital-Library-Experience",
      tags: ["Edtech", "AI", "Mobile", "Landing Page"]
    }
  ];

  const skills = [
    { category: "Design Tools", items: ["Figma", "Adobe XD", "AI Tools", "Framer", "Principle"] },
    { category: "Research Methods", items: ["User Interviews", "Usability Testing", "Journey Mapping"] },
    { category: "Prototyping", items: ["Interactive Prototypes", "Wireframing", "User Flows", "Information Architecture"] },
    { category: "Technical", items: ["HTML/CSS", "JavaScript", "React Basics", "Design Systems", "Responsive Design"] }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-300/5"></div>
        <div 
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50 transition-all duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-orange-400 animate-fade-in-left">
              <span className="inline-block hover:scale-110 transition-transform duration-300">Navendu Nitya</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8 animate-fade-in-right">
                <button onClick={() => scrollToSection('hero')} className="relative group hover:text-orange-400 transition-all duration-300">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('about')} className="relative group hover:text-orange-400 transition-all duration-300">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('projects')} className="relative group hover:text-orange-400 transition-all duration-300">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('skills')} className="relative group hover:text-orange-400 transition-all duration-300">
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="relative group hover:text-orange-400 transition-all duration-300">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 hover:text-orange-400 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:translate-x-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 hover:text-orange-400 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:translate-x-2">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 hover:text-orange-400 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:translate-x-2">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 hover:text-orange-400 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:translate-x-2">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 hover:text-orange-400 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:translate-x-2">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className={`text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-orange-400 mr-4 animate-spin-slow" size={32} />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-orange-400 animate-gradient-text">
            Navendu Nitya
            </h1>
            <Sparkles className="text-orange-400 ml-4 animate-spin-slow-reverse" size={32} />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-8 animate-fade-in-up delay-300">
            {typewriterText}<span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-500">
            UI/UX Designer with 1 year of hands-on practice and freelance experience. Passionate about crafting user-centered mobile apps, web platforms, and design solutions that deliver real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center"
            >
              Let's Connect
              <Zap className="ml-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={32} className="text-orange-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-16 text-center animate-fade-in-up">
            <span className="inline-block hover:scale-110 transition-transform duration-300">About Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-6 flex items-center">
                <Target className="mr-3 animate-pulse" size={28} />
                Design Philosophy
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                I believe great design is invisible – it solves problems so elegantly that users don't even notice it's there. 
                My approach combines user research, data-driven insights, and creative innovation to create experiences that 
                truly resonate with people.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                With a background in both visual design and user research, I bridge the gap between what looks good 
                and what works well. Every pixel has a purpose, every interaction tells a story.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-300">Human-centered design approach</span>
                </div>
                <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-300">Data-driven decision making</span>
                </div>
                <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-300">Collaborative design process</span>
                </div>
                <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-300">Accessibility-first mindset</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-300/20 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 transform hover:scale-105">
                <h4 className="text-xl font-bold text-orange-400 mb-4">Experience Highlights</h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-orange-400 pl-4 hover:border-l-4 transition-all duration-300 group">
                    <h5 className="font-semibold text-white">Freelancer Designer</h5>
                    <p className="text-gray-300 text-sm">Freelancer • 2024 - Present</p>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">Led design for 3 Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-16 text-center animate-fade-in-up">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 group hover:shadow-2xl hover:shadow-orange-500/20 border border-gray-700 hover:border-orange-500/30 animate-fade-in-up" style={{ animationDelay: `${project.id * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                      <ExternalLink size={20} />
                  </a>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="text-orange-400 text-sm font-semibold mb-2 group-hover:text-orange-300 transition-colors duration-300">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-16 text-center animate-fade-in-up">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Skills & Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700 transition-all duration-500 border border-gray-700 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-bold text-orange-400 mb-4 hover:text-orange-300 transition-colors duration-300">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-150 group-hover:bg-orange-300 transition-all duration-300"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-8 animate-fade-in-up">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Let's Create Something Amazing</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed animate-fade-in-up delay-300">
            Ready to bring your next project to life? I'm always excited to collaborate on innovative designs 
            that make a real impact. Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 relative z-10">
                    {/* Contact button */}
                    <a 
                      href="mailto:nitya0304@gmail.com" 
                      className="group flex items-center bg-gradient-to-r from-orange-500 to-orange-600 
                                hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg 
                                text-lg font-semibold transition-all duration-300 transform hover:scale-105 
                                hover:shadow-2xl hover:shadow-orange-500/25"
                    >
                      <Mail size={20} className="mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
                      Get In Touch
                    </a>

                    {/* Resume download button */}
                    <a
                      href="/Resume.pdf"
                      download="My_Resume.pdf"
                      className="group flex items-center border-2 border-orange-500 text-orange-400 
                                hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg text-lg 
                                font-semibold transition-all duration-300 ease-in-out 
                                hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105"
                    >
                      <ArrowRight
                        size={20}
                        className="mr-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                      />
                      Download Resume
                    </a>
                      </div>


          
          <div className="flex justify-center space-x-8 animate-fade-in-up delay-700">
            <a href="https://www.linkedin.com/in/navendu-nitya-55821632b/" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Linkedin size={28} />
            </a>
                      <a
              href="https://behance.net/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:-rotate-12"
            >
              <BehanceIcon className="w-10 h-10" /> {/* 👈 bump up size */}
            </a>


            <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © 2025 Navendu Nitya. Crafted with passion and attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;