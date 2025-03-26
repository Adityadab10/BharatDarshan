import React, { useState, useEffect } from 'react';
import { 
  BookOpenIcon, 
  InfoIcon, 
  MusicIcon, 
  PaletteIcon, 
  LandmarkIcon, 
  MapIcon, 
  ChevronRightIcon,
  ArrowUpRightIcon
} from 'lucide-react';

const CulturalInsights = () => {
  const [activeCategory, setActiveCategory] = useState('history');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  // Add fun facts data
  const funFacts = [
    "India has the world's largest postal network with over 155,000 post offices",
    "The game of Snakes & Ladders originated in India as 'Mokshapat'",
    "India is the birthplace of chess, known originally as 'Chaturanga'",
    "The world's first university, Takshashila (now Taxila), was established in 700 BC",
    "Yoga has its origins in India and is over 5,000 years old",
    "The Taj Mahal was built using materials from over 20 countries"
  ];

  // Categories data (if not already defined)
  const categories = [
    { id: 'history', label: 'History', icon: BookOpenIcon },
    { id: 'traditions', label: 'Traditions', icon: LandmarkIcon },
    { id: 'arts', label: 'Arts', icon: PaletteIcon },
    { id: 'music', label: 'Music', icon: MusicIcon },
    { id: 'heritage', label: 'Heritage', icon: MapIcon }
  ];

  // Cultural data (if not already defined)
  const culturalData = {
    history: [
      {
        id: 1,
        title: "Ancient Indian Civilizations",
        excerpt: "Discover the rich history of Indus Valley and other ancient civilizations...",
        fullContent: "The Indus Valley Civilization was one of the world's oldest urban civilizations, spanning much of what is now Pakistan and parts of India...",
        image: "/images/indus-valley.jpg",
        readTime: "5 min read"
      },
      // Add more history articles...
    ],
    traditions: [
      // Add tradition articles...
    ],
    arts: [
      // Add arts articles...
    ],
    music: [
      // Add music articles...
    ],
    heritage: [
      // Add heritage articles...
    ]
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubscriptionStatus('Please enter a valid email address');
      return;
    }
    
    setSubscriptionStatus('Thank you for subscribing!');
    setEmail('');
    
    setTimeout(() => {
      setSubscriptionStatus('');
    }, 3000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-[#FFF7E9] text-[#5D3A00]">
      {/* Modal for Article Details */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-[#FFF7E9] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#8B4513]">{selectedArticle.title}</h2>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="text-[#5D3A00] hover:text-[#8B4513]"
                >
                  ✕
                </button>
              </div>
              <img 
                src={selectedArticle.image || "/placeholder.svg"} 
                alt={selectedArticle.title} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-[#5D3A00] mb-4">{selectedArticle.fullContent}</p>
              <span className="text-sm text-[#8B4513]">{selectedArticle.readTime}</span>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-4xl font-bold text-[#8B4513] mb-6">Cultural Insights</h1>
      
      {/* Fun Facts Section */}
      <section className="mb-10">
        <div className="bg-[#FFE4C4] rounded-lg p-6">
          <div className="flex items-center mb-4">
            <InfoIcon size={24} className="text-[#8B4513] mr-2" />
            <h2 className="text-xl font-semibold text-[#5D3A00]">Did You Know?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <div 
                key={index} 
                className="bg-[#FFF7E9] p-4 rounded-lg shadow-sm border border-[#8B4513]/20 hover:shadow-md transition-all"
              >
                <p className="text-[#5D3A00] text-sm flex items-start">
                  <ChevronRightIcon size={16} className="mr-2 text-[#8B4513] flex-shrink-0 mt-1" />
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-[#8B4513] text-[#FFF7E9]'
                : 'bg-[#FFE4C4] text-[#5D3A00] hover:bg-[#FFC583]'
            }`}
          >
            <category.icon size={16} className="mr-2" />
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {culturalData[activeCategory].map(article => (
          <div 
            key={article.id} 
            className="bg-[#FFF7E9] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
            onClick={() => handleArticleClick(article)}
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={article.image || "/placeholder.svg"} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#8B4513] text-lg mb-2">{article.title}</h3>
              <p className="text-[#5D3A00] text-sm mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8B4513]">{article.readTime}</span>
                <button className="text-[#8B4513] hover:text-[#5D3A00] text-sm font-medium flex items-center">
                  Read More <ArrowUpRightIcon size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter Subscription */}
      <div className="mt-12 bg-[#FFF7E9] rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#8B4513] mb-2">Stay Updated</h2>
        <p className="text-[#5D3A00] mb-4">
          Subscribe to our newsletter to receive the latest cultural insights and heritage stories.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address" 
            className="flex-grow py-2 px-4 rounded-lg border border-[#8B4513]/30 bg-white text-[#5D3A00] focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
          <button 
            type="submit"
            className="py-2 px-6 bg-[#8B4513] hover:bg-[#5D3A00] text-[#FFF7E9] font-medium rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
        {subscriptionStatus && (
          <p className={`mt-2 text-sm ${
            subscriptionStatus.includes('Thank you') 
              ? 'text-green-600' 
              : 'text-red-600'
          }`}>
            {subscriptionStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default CulturalInsights;