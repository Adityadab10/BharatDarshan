import React, { useState, useEffect } from 'react';
import { MapPinIcon, StarIcon, TrashIcon, HeartIcon, EyeIcon, ClockIcon, ShareIcon, FilterIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const SavedPlaces = () => {
  const [activeTab, setActiveTab] = useState('bookmarked');
  const [bookmarkedPlaces, setBookmarkedPlaces] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date'); // 'date', 'name', 'rating'
  const [filterCategory, setFilterCategory] = useState('all');
  const { user } = useAuth();

  // Define tabs configuration
  const tabs = [
    {
      id: 'bookmarked',
      label: 'Bookmarked',
      icon: HeartIcon,
    },
    {
      id: 'recently',
      label: 'Recently Viewed',
      icon: ClockIcon,
    },
    {
      id: 'recommended',
      label: 'Recommended',
      icon: StarIcon,
    }
  ];

  // Sample saved places data
  const initialSavedPlaces = {
    bookmarked: [
      {
        id: 1,
        name: 'Taj Mahal',
        location: 'Agra, Uttar Pradesh',
        image: '/placeholder.svg',
        savedDate: '2 days ago'
      },
      {
        id: 2,
        name: 'Khajuraho Temples',
        location: 'Madhya Pradesh',
        image: '/placeholder.svg',
        savedDate: '1 week ago'
      },
      {
        id: 3,
        name: 'Hampi',
        location: 'Karnataka',
        image: '/placeholder.svg',
        savedDate: '2 weeks ago'
      }
    ],
    recently: [
      {
        id: 4,
        name: 'Qutub Minar',
        location: 'Delhi',
        image: '/placeholder.svg',
        viewedDate: '1 day ago'
      },
      {
        id: 5,
        name: 'Ajanta Caves',
        location: 'Aurangabad, Maharashtra',
        image: '/placeholder.svg',
        viewedDate: '3 days ago'
      }
    ],
    recommended: [
      {
        id: 6,
        name: 'Konark Sun Temple',
        location: 'Odisha',
        image: 'https://i0.wp.com/indiacurrents.com/wp-content/uploads/2022/09/Konark_Temple-Subham9423-CC-BY-SA-4.0.jpg?fit=1200%2C675&ssl=1',
        rating: 4.8
      },
      {
        id: 7,
        name: 'Ellora Caves',
        location: 'Maharashtra',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/31/92/93.jpg',
        rating: 4.7
      },
      {
        id: 8,
        name: 'Meenakshi Temple',
        location: 'Madurai, Tamil Nadu',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/13/cd/65/14.jpg',
        rating: 4.9
      },
      {
        id: 9,
        name: 'Hawa Mahal',
        location: 'Jaipur, Rajasthan',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDD8CIjBDuVukV24jBDSDnW6-DUu3qrzpeQ&s',
        rating: 4.6
      }
    ]
  };

  // Load initial data and handle local storage
  useEffect(() => {
    loadSavedPlaces();
  }, []);

  const loadSavedPlaces = () => {
    // Load bookmarked places from localStorage
    const storedBookmarks = JSON.parse(localStorage.getItem(`bookmarkedPlaces_${user?.email}`) || '[]');
    const storedRecent = JSON.parse(localStorage.getItem(`recentlyViewed_${user?.email}`) || '[]');
    
    setBookmarkedPlaces(storedBookmarks);
    setRecentlyViewed(storedRecent);
    setRecommendedPlaces(initialSavedPlaces.recommended);
  };

  // Filter places based on search query and category
  const filterPlaces = (places) => {
    return places.filter(place => {
      const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          place.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === 'all' || place.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  };

  // Sort places based on selected criteria
  const sortPlaces = (places) => {
    return [...places].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'date':
        default:
          return new Date(b.savedDate || b.viewedDate) - new Date(a.savedDate || a.viewedDate);
      }
    });
  };

  // Remove bookmark and update local storage
  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarkedPlaces.filter(place => place.id !== id);
    setBookmarkedPlaces(updatedBookmarks);
    localStorage.setItem(`bookmarkedPlaces_${user?.email}`, JSON.stringify(updatedBookmarks));
    toast.success('Place removed from bookmarks');
  };

  // Add to bookmarks
  const addToBookmarks = (place) => {
    if (bookmarkedPlaces.some(p => p.id === place.id)) {
      toast.error('Place already bookmarked');
      return;
    }

    const newBookmark = {
      ...place,
      savedDate: new Date().toISOString(),
      category: place.category || 'General'
    };

    const updatedBookmarks = [...bookmarkedPlaces, newBookmark];
    setBookmarkedPlaces(updatedBookmarks);
    localStorage.setItem(`bookmarkedPlaces_${user?.email}`, JSON.stringify(updatedBookmarks));
    toast.success('Place added to bookmarks');
  };

  // Share place
  const sharePlaceHandler = async (place) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: place.name,
          text: `Check out ${place.name} in ${place.location}!`,
          url: window.location.href
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(`${place.name} - ${place.location}`);
        toast.success('Place details copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error('Failed to share');
    }
  };

  // Render place card with enhanced functionality
  const renderPlaceCard = (place, type) => {
    const placeMeta = {
      bookmarked: {
        dateKey: 'savedDate',
        dateIcon: ClockIcon,
        datePrefix: 'Saved',
        buttonText: 'View Details'
      },
      recently: {
        dateKey: 'viewedDate',
        dateIcon: EyeIcon,
        datePrefix: 'Viewed',
        buttonText: 'View Again'
      },
      recommended: {
        dateKey: 'rating',
        dateIcon: StarIcon,
        datePrefix: '',
        buttonText: 'Explore'
      }
    }[type];

    return (
      <div key={place.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-orange-200">
        <div className="relative h-48 group">
          <img 
            src={place.image || "/placeholder.svg"} 
            alt={place.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <button 
                onClick={() => sharePlaceHandler(place)}
                className="p-2 bg-white/90 rounded-full text-[#D2691E] hover:bg-white transition-colors"
              >
                <ShareIcon size={16} />
              </button>
              <button 
                onClick={() => type === 'bookmarked' ? removeBookmark(place.id) : addToBookmarks(place)}
                className="p-2 bg-white/90 rounded-full text-[#D2691E] hover:bg-white transition-colors"
              >
                {type === 'bookmarked' ? <TrashIcon size={16} /> : <HeartIcon size={16} />}
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[#8B4513] text-lg mb-1">{place.name}</h3>
          <div className="flex items-center text-[#8B4513] text-opacity-70 text-sm">
            <MapPinIcon size={14} className="mr-1" />
            <span>{place.location}</span>
          </div>
          {place.category && (
            <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-[#D2691E] text-xs rounded-full">
              {place.category}
            </span>
          )}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center text-xs text-[#8B4513] text-opacity-70">
              {placeMeta.dateIcon && <placeMeta.dateIcon size={12} className="mr-1" />}
              <span>
                {placeMeta.datePrefix} {' '}
                {type === 'recommended' 
                  ? `${place[placeMeta.dateKey]} ★`
                  : new Date(place[placeMeta.dateKey]).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })
                }
              </span>
            </div>
            <button className="text-xs bg-[#D2691E] text-white px-3 py-1.5 rounded-full hover:bg-[#8B4513] transition-colors">
              {placeMeta.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Filter and sort controls
  const renderControls = () => (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search places..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 min-w-[200px] px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#D2691E]"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#D2691E]"
        >
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
          <option value="rating">Sort by Rating</option>
        </select>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#D2691E]"
        >
          <option value="all">All Categories</option>
          <option value="UNESCO World Heritage">UNESCO Sites</option>
          <option value="Historical Monument">Historical Monuments</option>
          <option value="Temple">Temples</option>
          <option value="Archaeological Site">Archaeological Sites</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFF7E6] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-[#8B4513] text-white p-6">
          <h1 className="text-3xl font-bold">My Heritage Journey</h1>
          <p className="text-sm text-orange-100">Discover, Save, and Explore India's Treasures</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-orange-200 bg-[#FFF4E6]">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center py-3 px-4 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#D2691E] text-white'
                  : 'text-[#8B4513] hover:bg-orange-100'
              }`}
            >
              <tab.icon size={16} className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {/* Show controls only if there are items to filter/sort */}
          {((activeTab === 'bookmarked' && bookmarkedPlaces.length > 0) ||
            (activeTab === 'recently' && recentlyViewed.length > 0) ||
            (activeTab === 'recommended' && recommendedPlaces.length > 0)) && renderControls()}

          {/* Bookmarked Places */}
          {activeTab === 'bookmarked' && (
            <div>
              {bookmarkedPlaces.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortPlaces(filterPlaces(bookmarkedPlaces)).map(place => 
                    renderPlaceCard(place, 'bookmarked')
                  )}
                </div>
              ) : (
                <div className="bg-[#FFF4E6] rounded-lg border border-orange-200 p-8 text-center">
                  <HeartIcon size={48} className="mx-auto text-[#D2691E] mb-4" />
                  <h3 className="text-lg font-medium text-[#8B4513] mb-2">No bookmarked places yet</h3>
                  <p className="text-[#8B4513] text-opacity-70 mb-4">
                    Start exploring heritage sites and bookmark your favorites.
                  </p>
                  <button className="px-4 py-2 bg-[#D2691E] hover:bg-[#8B4513] text-white rounded-lg transition-colors">
                    Explore Heritage Sites
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Recently Viewed */}
          {activeTab === 'recently' && (
            <div>
              {recentlyViewed.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortPlaces(filterPlaces(recentlyViewed)).map(place => 
                    renderPlaceCard(place, 'recently')
                  )}
                </div>
              ) : (
                <div className="bg-[#FFF4E6] rounded-lg border border-orange-200 p-8 text-center">
                  <EyeIcon size={48} className="mx-auto text-[#D2691E] mb-4" />
                  <h3 className="text-lg font-medium text-[#8B4513] mb-2">No recently viewed places</h3>
                  <p className="text-[#8B4513] text-opacity-70 mb-4">
                    Browse through our collection of heritage sites to get started.
                  </p>
                  <button className="px-4 py-2 bg-[#D2691E] hover:bg-[#8B4513] text-white rounded-lg transition-colors">
                    Start Exploring
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Recommended Places */}
          {activeTab === 'recommended' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortPlaces(filterPlaces(recommendedPlaces)).map(place => 
                  renderPlaceCard(place, 'recommended')
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedPlaces;