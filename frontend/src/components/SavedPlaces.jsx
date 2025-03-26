import React, { useState, useEffect } from 'react';
import { MapPinIcon, StarIcon, TrashIcon, HeartIcon, EyeIcon, ClockIcon } from 'lucide-react';

const SavedPlaces = () => {
  const [activeTab, setActiveTab] = useState('bookmarked');
  const [bookmarkedPlaces, setBookmarkedPlaces] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);

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
        image: '/placeholder.svg',
        rating: 4.8
      },
      {
        id: 7,
        name: 'Ellora Caves',
        location: 'Maharashtra',
        image: '/placeholder.svg',
        rating: 4.7
      },
      {
        id: 8,
        name: 'Meenakshi Temple',
        location: 'Madurai, Tamil Nadu',
        image: '/placeholder.svg',
        rating: 4.9
      },
      {
        id: 9,
        name: 'Hawa Mahal',
        location: 'Jaipur, Rajasthan',
        image: '/placeholder.svg',
        rating: 4.6
      }
    ]
  };

  // Load initial data and handle local storage
  useEffect(() => {
    // Check local storage for saved places
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedPlaces') || '[]');
    setBookmarkedPlaces(storedBookmarks.length > 0 ? storedBookmarks : initialSavedPlaces.bookmarked);
    
    // Set recently viewed and recommended places
    setRecentlyViewed(initialSavedPlaces.recently);
    setRecommendedPlaces(initialSavedPlaces.recommended);
  }, []);

  const tabs = [
    { id: 'bookmarked', label: 'Bookmarked', icon: HeartIcon },
    { id: 'recently', label: 'Recently Viewed', icon: EyeIcon },
    { id: 'recommended', label: 'Recommended', icon: StarIcon }
  ];

  // Remove bookmark and update local storage
  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarkedPlaces.filter(place => place.id !== id);
    setBookmarkedPlaces(updatedBookmarks);
    localStorage.setItem('bookmarkedPlaces', JSON.stringify(updatedBookmarks));
  };

  // Add to bookmarks from recommended or recently viewed
  const addToBookmarks = (place) => {
    // Check if place is already bookmarked
    const isBookmarked = bookmarkedPlaces.some(p => p.id === place.id);
    
    if (!isBookmarked) {
      const newBookmark = { 
        ...place, 
        savedDate: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        }) 
      };
      
      const updatedBookmarks = [...bookmarkedPlaces, newBookmark];
      setBookmarkedPlaces(updatedBookmarks);
      localStorage.setItem('bookmarkedPlaces', JSON.stringify(updatedBookmarks));
    }
  };

  // Render place card with consistent styling
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
      <div key={place.id} className="bg-[#FFF4E6] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-orange-200">
        <div className="relative h-48">
          <img src={place.image || "/placeholder.svg"} alt={place.name} className="w-full h-full object-cover" />
          <button 
            onClick={() => 
              type === 'bookmarked' 
                ? removeBookmark(place.id) 
                : addToBookmarks(place)
            }
            className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-[#D2691E] hover:bg-white hover:text-[#8B4513] transition-colors"
          >
            {type === 'bookmarked' ? <TrashIcon size={16} /> : <HeartIcon size={16} />}
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[#8B4513]">{place.name}</h3>
          <div className="flex items-center text-[#8B4513] text-opacity-70 text-sm mt-1">
            <MapPinIcon size={14} className="mr-1" />
            <span>{place.location}</span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center text-xs text-[#8B4513] text-opacity-70">
              {placeMeta.dateIcon && <placeMeta.dateIcon size={12} className="mr-1" />}
              <span>
                {placeMeta.datePrefix} {place[placeMeta.dateKey]}
              </span>
            </div>
            <button className="text-xs bg-[#D2691E] text-white px-2 py-1 rounded hover:bg-[#8B4513] transition-colors">
              {placeMeta.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };

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
          {/* Bookmarked Places */}
          {activeTab === 'bookmarked' && (
            <div>
              {bookmarkedPlaces.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookmarkedPlaces.map(place => renderPlaceCard(place, 'bookmarked'))}
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
                  {recentlyViewed.map(place => renderPlaceCard(place, 'recently'))}
                </div>
              ) : (
                <div className="bg-[#FFF4E6] rounded-lg border border-orange-200 p-8 text-center">
                  <EyeIcon size={48} className="mx-auto text-[#D2691E] mb-4" />
                  <h3 className="text-lg font-medium text-[#8B4513] mb-2">No recently viewed places</h3>
                  <p className="text-[#8B4513] text-opacity-70">
                    Start exploring heritage sites to see your history here.
                  </p>
                </div>
              )}
            </div>
          )}
          
          {/* Recommended */}
          {activeTab === 'recommended' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedPlaces.map(place => renderPlaceCard(place, 'recommended'))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedPlaces;