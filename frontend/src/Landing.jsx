

import { useState, useEffect } from "react"

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-10 py-5 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-4" : "bg-transparent"}`}>
  <div className="container mx-auto max-w-6xl px-5 flex justify-between items-center">
    <div className="logo flex items-center">
      <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#92400E" />
        <path d="M2 17L12 22L22 17" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h1 className="text-2xl font-bold text-amber-800">BharatDarshan</h1>
    </div>
    <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
      <div className={`w-6 h-0.5 bg-amber-800 mb-1.5 transition-all ${isMenuOpen ? "transform -rotate-45 translate-y-1.5" : ""}`}></div>
      <div className={`w-6 h-0.5 bg-amber-800 mb-1.5 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
      <div className={`w-6 h-0.5 bg-amber-800 transition-all ${isMenuOpen ? "transform rotate-45 -translate-y-1.5" : ""}`}></div>
    </div>
    <nav className={`md:flex md:items-center transition-all ${isMenuOpen ? "fixed top-16 left-0 w-full h-screen bg-white shadow-md" : "hidden"} md:static md:h-auto md:w-auto md:bg-transparent md:shadow-none`}>
      <ul className={`md:flex ${isMenuOpen ? "flex flex-col p-8" : ""}`}>
        <li className="md:ml-8 md:my-0 my-4">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-amber-800 font-medium hover:text-amber-600 transition-colors">Home</a>
        </li>
        <li className="md:ml-8 md:my-0 my-4">
          <a href="#discover" onClick={() => setIsMenuOpen(false)} className="text-amber-800 font-medium hover:text-amber-600 transition-colors">Discover</a>
        </li>
        <li className="md:ml-8 md:my-0 my-4">
          <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-amber-800 font-medium hover:text-amber-600 transition-colors">Features</a>
        </li>
        <li className="md:ml-8 md:my-0 my-4">
          <a href="#tours" onClick={() => setIsMenuOpen(false)} className="text-amber-800 font-medium hover:text-amber-600 transition-colors">Virtual Tours</a>
        </li>
        <li className="md:ml-8 md:my-0 my-4">
          <a href="#community" onClick={() => setIsMenuOpen(false)} className="text-amber-800 font-medium hover:text-amber-600 transition-colors">Community</a>
        </li>
        <li className="md:ml-8 md:my-0 my-4">
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-amber-800 font-medium hover:text-amber-600 transition-colors">Contact</a>
        </li>
      </ul>
      <button className="md:ml-8 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition-colors font-medium my-4 md:my-0">Login</button>
    </nav>
  </div>
      </header>

      {/* Hero Section */}
      <section
  id="home"
  className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white text-center overflow-hidden"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/api/placeholder/1920/1080')",
  }}
>
  {/* Subtle Animated Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/20 to-black/50 animate-gradient-slow"></div>

  {/* Content Container */}
  <div className="container relative z-10 mx-auto max-w-3xl px-6 py-12">
    {/* Heading with Heritage-inspired Typography */}
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-fade-in-up">
      <span className="text-amber-400">Discover</span> India’s Timeless Heritage
    </h1>

    {/* Subheading with Smooth Animation */}
    <p className="text-xl md:text-2xl mb-10 font-light tracking-wide text-amber-100 animate-fade-in-up delay-200">
      A digital journey through India’s cultural wonders and historical legacy
    </p>

    {/* Button Group with Modern Effects */}
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <button className="relative bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
        Explore Now
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-amber-400 rounded-full animate-ping"></span>
      </button>
      <button className="bg-transparent border-2 border-amber-400 hover:bg-amber-400/20 text-amber-200 font-semibold py-4 px-8 rounded-full shadow-md transform hover:scale-105 transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>

  {/* Decorative Heritage Element (Optional) */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-950/50 to-transparent flex justify-center items-end">
    <svg className="w-full max-w-4xl text-amber-700/30" viewBox="0 0 1440 100" fill="currentColor">
      <path d="M0,0 L1440,0 L1440,60 C720,120 360,60 0,60 Z" />
    </svg>
  </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">About BharatDarshan</h2>
            <div className="h-1 w-16 bg-amber-800 mx-auto"></div>
          </div>
          <p className="max-w-2xl mx-auto text-center text-lg">
            BharatDarshan is a comprehensive Heritage Site Management Portal dedicated to showcasing the rich cultural
            and historical heritage of India. This platform serves as a digital gateway for history enthusiasts,
            travelers, and researchers to explore monuments, historical landmarks, UNESCO heritage sites, and cultural
            treasures across the country.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
  id="features"
  className="py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
>
  {/* Subtle Decorative Background */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 300C400 200 800 400 1440 300" stroke="#D97706" strokeWidth="2" strokeDasharray="10 10" />
      <path d="M0 400C400 300 800 500 1440 400" stroke="#D97706" strokeWidth="2" strokeDasharray="10 10" />
    </svg>
  </div>

  <div className="container mx-auto max-w-6xl px-6 relative z-10">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 tracking-tight animate-fade-in">
        What We Offer
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-amber-900 mx-auto rounded-full"></div>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Feature Card 1 */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 group">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-amber-200 transition-colors">
          <span className="text-3xl text-amber-800">🏛️</span>
        </div>
        <h3 className="text-xl font-semibold text-amber-900 mt-8 mb-3">Discover Heritage Sites</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Access detailed information, historical significance, images, and visitor guidelines for India’s treasured monuments.
        </p>
      </div>

      {/* Feature Card 2 */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 group">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-amber-200 transition-colors">
          <span className="text-3xl text-amber-800">🧭</span>
        </div>
        <h3 className="text-xl font-semibold text-amber-900 mt-8 mb-3">Smart Navigation</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Get real-time directions, best travel routes, and estimated travel time using Google Maps integration.
        </p>
      </div>

      {/* Feature Card 3 */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 group">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-amber-200 transition-colors">
          <span className="text-3xl text-amber-800">🏨</span>
        </div>
        <h3 className="text-xl font-semibold text-amber-900 mt-8 mb-3">Nearby Attractions</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Explore accommodations, restaurants, and nearby tourist spots for a complete travel experience.
        </p>
      </div>

      {/* Feature Card 4 */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 group">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-amber-200 transition-colors">
          <span className="text-3xl text-amber-800">🔍</span>
        </div>
        <h3 className="text-xl font-semibold text-amber-900 mt-8 mb-3">Interactive Virtual Tours</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Experience immersive 360° views and guided virtual tours of India’s most iconic heritage sites.
        </p>
      </div>

      {/* Feature Card 5 */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 group">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-amber-200 transition-colors">
          <span className="text-3xl text-amber-800">👥</span>
        </div>
        <h3 className="text-xl font-semibold text-amber-900 mt-8 mb-3">Community Contributions</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Share experiences, reviews, and upload pictures of heritage sites with fellow travelers.
        </p>
      </div>

      {/* Feature Card 6 */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 group">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-amber-200 transition-colors">
          <span className="text-3xl text-amber-800">🌱</span>
        </div>
        <h3 className="text-xl font-semibold text-amber-900 mt-8 mb-3">Preservation & Awareness</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Learn about conservation efforts and initiatives to protect India’s precious heritage.
        </p>
      </div>
    </div>
  </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="py-24 bg-gradient-to-b from-amber-50 to-amber-100 relative overflow-hidden">
  <div className="container mx-auto max-w-6xl px-6">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 tracking-tight animate-fade-in">
        Discover Heritage Sites
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-amber-900 mx-auto rounded-full"></div>
    </div>

    {/* Heritage Sites Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Taj Mahal */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-3">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
        ></div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Taj Mahal</h3>
          <p className="text-gray-700 mb-4">Agra, Uttar Pradesh</p>
          <button className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore
          </button>
        </div>
      </div>

      {/* Qutub Minar */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-3">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629198726015-85b1b648c5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
        ></div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Qutub Minar</h3>
          <p className="text-gray-700 mb-4">Delhi</p>
          <button className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore
          </button>
        </div>
      </div>

      {/* Hampi */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-3">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1597071051418-460c04f53e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
        ></div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Hampi</h3>
          <p className="text-gray-700 mb-4">Karnataka</p>
          <button className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore
          </button>
        </div>
      </div>

      {/* Khajuraho Temples */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-3">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603991431979-82c9b33c6e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
        ></div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-amber-900 mb-2">Khajuraho Temples</h3>
          <p className="text-gray-700 mb-4">Madhya Pradesh</p>
          <button className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore
          </button>
        </div>
      </div>
    </div>

    {/* View More Sites Button */}
    <div className="text-center mt-16">
      <button className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
        View More Sites
      </button>
    </div>
  </div>
</section>

      {/* Virtual Tours Section */}
      <section id="tours" className="py-20">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Interactive Virtual Tours</h2>
            <div className="h-1 w-16 bg-amber-800 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Experience India's Heritage From Anywhere</h3>
              <p className="text-gray-600 mb-6">
                Our immersive 360° virtual tours bring India's most iconic monuments and heritage sites directly to your
                screen. Explore ancient temples, majestic forts, and historical wonders with expert narration and
                interactive elements.
              </p>
              <ul className="mb-8">
                <li className="mb-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-amber-800 before:font-bold">Immersive 360° panoramic views</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-amber-800 before:font-bold">Expert historical narration</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-amber-800 before:font-bold">Interactive hotspots with detailed information</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-amber-800 before:font-bold">Accessible from any device</li>
              </ul>
              <button className="bg-amber-800 hover:bg-amber-900 text-white font-semibold py-3 px-6 rounded transition-colors">Start Virtual Tour</button>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-amber-50 rounded-lg h-64 md:h-80 w-full flex items-center justify-center relative">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">▶️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Join Our Community</h2>
            <div className="h-1 w-16 bg-amber-800 mx-auto"></div>
          </div>
          <div className="text-center">
            <p className="max-w-2xl mx-auto text-lg mb-12">
              Connect with fellow history enthusiasts, travelers, and researchers. Share your experiences, upload
              photos, and contribute to preserving India's rich cultural heritage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <p className="italic">
                    "BharatDarshan helped me plan my entire historical journey across Rajasthan. The detailed
                    information and navigation features were invaluable!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-200 mr-4"></div>
                  <div className="text-left">
                    <h4 className="font-bold text-amber-800">Priya Sharma</h4>
                    <p className="text-gray-600">History Enthusiast</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <p className="italic">
                    "As a researcher, I find the detailed historical information and community contributions extremely
                    valuable for my work on Indian architecture."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-200 mr-4"></div>
                  <div className="text-left">
                    <h4 className="font-bold text-amber-800">Rahul Mehta</h4>
                    <p className="text-gray-600">Architectural Historian</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-amber-800 hover:bg-amber-900 text-white font-semibold py-3 px-6 rounded transition-colors">Join Community</button>
              <button className="bg-amber-50 hover:bg-amber-100 text-amber-800 font-semibold py-3 px-6 rounded transition-colors border border-amber-800">Share Your Story</button>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer id="contact" className="bg-amber-900 text-amber-50 pt-16 pb-6">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">BharatDarshan</h2>
              <p>Your gateway to India's heritage</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-amber-200 transition-colors">Home</a></li>
                <li><a href="#discover" className="hover:text-amber-200 transition-colors">Discover</a></li>
                <li><a href="#features" className="hover:text-amber-200 transition-colors">Features</a></li>
                <li><a href="#tours" className="hover:text-amber-200 transition-colors">Virtual Tours</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-200 transition-colors">Heritage Map</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Travel Guides</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Conservation</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Research</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
              <p className="mb-4">Subscribe to our newsletter for the latest updates on heritage sites and features.</p>
              <div className="flex flex-col sm:flex-row">
                <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 rounded-t sm:rounded-l sm:rounded-r-none mb-2 sm:mb-0" />
                <button className="bg-amber-800 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-b sm:rounded-r sm:rounded-l-none">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-amber-800/30 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} BharatDarshan. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="w-10 h-10 bg-amber-800/30 rounded-full flex items-center justify-center hover:bg-amber-200 hover:text-amber-900 transition-colors">FB</a>
              <a href="#" className="w-10 h-10 bg-amber-800/30 rounded-full flex items-center justify-center hover:bg-amber-200 hover:text-amber-900 transition-colors">TW</a>
              <a href="#" className="w-10 h-10 bg-amber-800/30 rounded-full flex items-center justify-center hover:bg-amber-200 hover:text-amber-900 transition-colors">IG</a>
              <a href="#" className="w-10 h-10 bg-amber-800/30 rounded-full flex items-center justify-center hover:bg-amber-200 hover:text-amber-900 transition-colors">YT</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing