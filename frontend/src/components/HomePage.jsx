import React, { useState, useEffect } from 'react';
import { MapPinIcon, CalendarIcon, StarIcon, SearchIcon, ArrowRightIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // Assuming you have an auth context

const HomePage = () => {
  // Add user state
  const { user } = useAuth(); // Get user from auth context
  const [greeting, setGreeting] = useState('');

  // Generate appropriate greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  // Sample featured sites data with updated image URLs
  const featuredSites = [
    {
      id: 1,
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: 'data:image/jpeg;base64,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',
      rating: 4.9,
      category: 'UNESCO World Heritage'
    },
    {
      id: 2,
      name: 'Qutub Minar',
      location: 'Delhi',
      image: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/143BF/production/_124897828_gettyimages-541363304-170667a.jpg.webp',
      rating: 4.7,
      category: 'Historical Monument'
    },
    {
      id: 3,
      name: 'Ajanta Caves',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwNniA7sbaNXgcZeALkTZRWWMULrAa96USA&s',
      location: 'Aurangabad, Maharashtra',
      rating: 4.8,
      category: 'UNESCO World Heritage'
    },
    {
      id: 4,
      name: 'Hampi',
      location: 'Karnataka',
      image: 'https://www.stayvista.com/blog/wp-content/uploads/2024/09/Hampi_karnataka.jpg',
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
      {/* Hero Section - Updated with user info */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden h-96 mb-6">
          <img 
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Indian Heritage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/80 to-transparent flex flex-col justify-center p-8">
            {/* User Profile Section */}
            <div className="flex items-center mb-6">
              <div className="relative">
                {user?.photoURL ? (
                  <img 
                    src={user.photoURL}
                    alt="Profile"
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">
                      {user?.displayName?.[0]?.toUpperCase() || '?'}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-4">
                <div className="text-white/80 text-lg font-medium">{greeting},</div>
                <h1 className="text-4xl font-bold text-white">
                  {user?.displayName}
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-white/90 mb-8 max-w-md">
              Continue your journey through India's rich cultural heritage
            </p>
            
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

      {/* Featured Sites - Updated card styling for better image display */}
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
            <div key={site.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={site.image} 
                  alt={site.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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