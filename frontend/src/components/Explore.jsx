import React, { useState } from 'react';
import { SearchIcon, FilterIcon, MapPinIcon, StarIcon, InfoIcon, ArrowRightIcon } from 'lucide-react';

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample heritage sites data
  const heritageSites = [
    {
      id: 1,
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: '/placeholder.svg',
      category: 'unesco',
      rating: 4.9,
      description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.'
    },
    {
      id: 2,
      name: 'Qutub Minar',
      location: 'Delhi',
      image: '/placeholder.svg',
      category: 'monument',
      rating: 4.7,
      description: 'A minaret and victory tower that forms part of the Qutb complex, which lies at the site of Delhi\'s oldest fortified city.'
    },
    {
      id: 3,
      name: 'Ajanta Caves',
      location: 'Aurangabad, Maharashtra',
      image: '/placeholder.svg',
      category: 'unesco',
      rating: 4.8,
      description: 'Buddhist cave monuments dating from the 2nd century BCE to about 480 CE in Aurangabad district of Maharashtra state.'
    },
    {
      id: 4,
      name: 'Hampi',
      location: 'Karnataka',
      image: '/placeholder.svg',
      category: 'archaeological',
      rating: 4.6,
      description: 'The ruins of Hampi represent the remnants of the capital city of the Vijayanagara Empire.'
    },
    {
      id: 5,
      name: 'Khajuraho Group of Monuments',
      location: 'Madhya Pradesh',
      image: '/placeholder.svg',
      category: 'temple',
      rating: 4.7,
      description: 'A group of Hindu and Jain temples famous for their nagara-style architectural symbolism and erotic sculptures.'
    },
    {
      id: 6,
      name: 'Konark Sun Temple',
      location: 'Odisha',
      image: '/placeholder.svg',
      category: 'temple',
      rating: 4.8,
      description: 'A 13th-century CE Sun temple at Konark, in the state of Odisha, India.'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Sites' },
    { id: 'unesco', name: 'UNESCO Sites' },
    { id: 'monument', name: 'Monuments' },
    { id: 'temple', name: 'Temples' },
    { id: 'archaeological', name: 'Archaeological' },
    { id: 'natural', name: 'Natural Heritage' }
  ];

  // Filter sites based on active filter and search query
  const filteredSites = heritageSites.filter(site => {
    const matchesFilter = activeFilter === 'all' || site.category === activeFilter;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          site.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto bg-[#FFF8E1]">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#8B4513]">Explore Heritage Sites</h1>
        <div className="h-1 w-24 bg-[#D4AF37] mt-2 rounded-full"></div>
      </div>
      
      {/* Search and Filter Section */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search heritage sites..." 
              className="w-full py-3 px-5 pl-12 rounded-lg border border-[#D2B48C] bg-white text-[#8B4513] focus:outline-none focus:ring-2 focus:ring-[#8B4513] shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B4513]" size={20} />
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-2 py-3 px-5 rounded-lg border border-[#D2B48C] bg-white text-[#8B4513] shadow-md hover:bg-[#FFF8DC] transition-colors">
              <FilterIcon size={18} />
              <span className="font-medium">Filters</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-[#8B4513] text-white shadow-md'
                  : 'bg-white border border-[#D2B48C] text-[#8B4513] hover:bg-[#FFF8DC]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#8B4513]">
            {filteredSites.length} Heritage Sites
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#A0522D]">Sort by:</span>
            <select className="text-sm border border-[#D2B48C] rounded-md py-1.5 px-3 bg-white text-[#8B4513] focus:outline-none focus:ring-2 focus:ring-[#8B4513]">
              <option>Popularity</option>
              <option>Rating</option>
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
            </select>
          </div>
        </div>
        
        {filteredSites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSites.map(site => (
              <div key={site.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 border border-[#D2B48C]">
                <div className="relative h-48">
                  <img src={site.image || "/placeholder.svg"} alt={site.name} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white text-sm px-4 py-1.5 rounded-full transition-colors font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#D4AF37] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {site.category.charAt(0).toUpperCase() + site.category.slice(1)}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#8B4513] text-lg">{site.name}</h3>
                  <div className="flex items-center text-[#A0522D] text-sm mt-1">
                    <MapPinIcon size={14} className="mr-1" />
                    <span>{site.location}</span>
                  </div>
                  <p className="text-sm text-[#A0522D] mt-3 line-clamp-2">
                    {site.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <StarIcon size={16} className="text-[#D4AF37] mr-1" />
                      <span className="text-sm font-medium">{site.rating}</span>
                    </div>
                    <button className="flex items-center text-xs bg-[#FFF8E1] text-[#8B4513] px-3 py-1.5 rounded-full hover:bg-[#F5DEB3] transition-colors font-medium border border-[#D2B48C]">
                      <InfoIcon size={12} className="mr-1" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center border border-[#D2B48C]">
            <div className="w-16 h-16 mx-auto bg-[#FFF8DC] rounded-full flex items-center justify-center mb-4 border-2 border-[#D2B48C]">
              <SearchIcon size={24} className="text-[#8B4513]" />
            </div>
            <p className="text-[#A0522D] text-lg mb-4">No heritage sites found matching your criteria.</p>
            <button 
              onClick={() => {setActiveFilter('all'); setSearchQuery('');}}
              className="px-6 py-2 bg-[#8B4513] text-white rounded-full hover:bg-[#A0522D] transition-colors font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredSites.length > 0 && (
          <div className="flex justify-center mt-10">
            <div className="flex space-x-1">
              <button className="w-10 h-10 rounded-lg border border-[#D2B48C] flex items-center justify-center text-[#8B4513]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-lg bg-[#8B4513] flex items-center justify-center text-white font-medium">1</button>
              <button className="w-10 h-10 rounded-lg border border-[#D2B48C] flex items-center justify-center text-[#8B4513]">2</button>
              <button className="w-10 h-10 rounded-lg border border-[#D2B48C] flex items-center justify-center text-[#8B4513]">3</button>
              <button className="w-10 h-10 rounded-lg border border-[#D2B48C] flex items-center justify-center text-[#8B4513]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Explore;