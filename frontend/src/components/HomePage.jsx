import React from 'react';
import { MapPinIcon, CalendarIcon, StarIcon, SearchIcon, ArrowRightIcon } from 'lucide-react';

const HomePage = () => {
  // Sample featured sites data
  const featuredSites = [
    {
      id: 1,
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: '/placeholder.svg',
      rating: 4.9,
      category: 'UNESCO World Heritage'
    },
    {
      id: 2,
      name: 'Qutub Minar',
      location: 'Delhi',
      image: '/placeholder.svg',
      rating: 4.7,
      category: 'Historical Monument'
    },
    {
      id: 3,
      name: 'Ajanta Caves',
      location: 'Aurangabad, Maharashtra',
      image: '/placeholder.svg',
      rating: 4.8,
      category: 'UNESCO World Heritage'
    },
    {
      id: 4,
      name: 'Hampi',
      location: 'Karnataka',
      image: '/placeholder.svg',
      rating: 4.6,
      category: 'Archaeological Site'
    }
  ];

  // Sample categories
  const categories = [
    { id: 'unesco', name: 'UNESCO Sites', count: 42, icon: '🏛️' },
    { id: 'forts', name: 'Forts & Palaces', count: 87, icon: '🏰' },
    { id: 'temples', name: 'Temples', count: 124, icon: '🕍' },
    { id: 'natural', name: 'Natural Heritage', count: 56, icon: '🏞️' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-[#FFF8E1]">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden h-96 mb-6">
          <img 
            src="/placeholder.svg" 
            alt="Indian Heritage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/80 to-transparent flex flex-col justify-center p-8">
            <h1 className="text-5xl font-bold text-white mb-3">Namaste, Explorer!</h1>
            <p className="text-xl text-white/90 mb-8 max-w-md">Discover the rich cultural heritage of India through BharatDarshan</p>
            
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="Search heritage sites..." 
                className="w-full py-4 px-6 pr-12 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8B4513] shadow-lg"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B4513]">
                <SearchIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sites Carousel */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#8B4513]">Featured Heritage Sites</h2>
            <div className="h-1 w-24 bg-[#D4AF37] mt-2 rounded-full"></div>
          </div>
          <button className="text-[#8B4513] hover:text-[#A0522D] text-sm font-medium flex items-center">
            View All <ArrowRightIcon size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSites.map(site => (
            <div key={site.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="relative h-48">
                <img src={site.image || "/placeholder.svg"} alt={site.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-[#D4AF37] text-white text-xs px-3 py-1 rounded-full font-medium">
                  {site.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#8B4513] text-lg">{site.name}</h3>
                <div className="flex items-center text-[#A0522D] text-sm mt-1">
                  <MapPinIcon size={14} className="mr-1" />
                  <span>{site.location}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <StarIcon size={16} className="text-[#D4AF37] mr-1" />
                    <span className="text-sm font-medium">{site.rating}</span>
                  </div>
                  <button className="text-sm bg-[#FFF8E1] text-[#8B4513] px-3 py-1.5 rounded-full hover:bg-[#F5DEB3] transition-colors font-medium border border-[#D2B48C]">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#8B4513]">Explore Indian Heritage</h2>
            <div className="h-1 w-24 bg-[#D4AF37] mt-2 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(category => (
            <div 
              key={category.id}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#D2B48C] transform hover:-translate-y-1 duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-[#FFF8DC] rounded-full flex items-center justify-center text-3xl mb-4 border-2 border-[#D2B48C]">
                {category.icon}
              </div>
              <h3 className="font-bold text-[#8B4513] text-lg mb-2">{category.name}</h3>
              <p className="text-sm text-[#A0522D]">{category.count} sites</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#8B4513]">Your Recent Activity</h2>
            <div className="h-1 w-24 bg-[#D4AF37] mt-2 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 border border-[#D2B48C]">
          <div className="flex flex-col items-center justify-center h-48 text-[#A0522D]">
            <div className="w-16 h-16 rounded-full bg-[#FFF8DC] flex items-center justify-center mb-4 border-2 border-[#D2B48C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B4513]">
                <path d="M12 8v4l3 3"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <p className="text-lg mb-3">You haven't explored any sites yet.</p>
            <button className="px-6 py-2.5 bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-full transition-colors font-medium">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
    </div>
  );
};

export default HomePage;