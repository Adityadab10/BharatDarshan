import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, SearchIcon, MapPinIcon, BookmarkIcon, ScrollIcon, UserIcon, LogOutIcon, MenuIcon, XIcon, Camera, Compass } from 'lucide-react';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useAuth();
  
  const navItems = [
    { id: 'home', path: '/home', title: 'Home', icon: HomeIcon, description: 'Overview of top heritage sites' },
    { id: 'explore', path: '/explore', title: 'Explore', icon: Compass, description: 'Browse and search for heritage sites' },
    { id: 'plan', path: '/plan', title: 'Plan Your Trip', icon: MapPinIcon, description: 'Travel routes & How to Reach' },
    { id: 'saved', path: '/saved', title: 'Saved Places', icon: BookmarkIcon, description: 'Bookmark favorite heritage locations' },
    { id: 'insights', path: '/insights', title: 'Cultural Insights', icon: ScrollIcon, description: 'Learn about history & traditions' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close sidebar on mobile after navigation
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Get current path to highlight active item
  const currentPath = location.pathname;

  return (
    <div className="flex h-screen">
      {/* Mobile sidebar toggle */}
      <button 
        onClick={toggleSidebar} 
        className="lg:hidden fixed z-50 bottom-4 right-4 bg-[#8B4513] text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative z-40 w-64 h-full transition-transform duration-300 ease-in-out bg-[#FFF8E1] border-r border-[#D2B48C] shadow-lg lg:shadow-none`}
      >
        {/* Logo and Brand */}
        <div className="flex items-center justify-between p-4 border-b border-[#D2B48C]">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-[#8B4513] flex items-center justify-center text-white font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-[#8B4513]">BharatDarshan</span>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden text-[#8B4513]">
            <XIcon size={20} />
          </button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-[#D2B48C] bg-[#FFF8DC]">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-[#F5DEB3] border-2 border-[#D2B48C] overflow-hidden">
              <img 
                src={user?.photoURL || "/placeholder.svg"}
                alt="User" 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-[#8B4513]">{user?.displayName}</p>
              <p className="text-xs text-[#A0522D]">Discover India's Treasures</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm transition-all ${
                    currentPath === item.path
                      ? 'bg-[#8B4513] text-white shadow-md'
                      : 'text-[#8B4513] hover:bg-[#F5DEB3]'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Links */}
        <div className="px-4 py-3 mt-4">
          <h3 className="text-xs font-semibold text-[#A0522D] uppercase tracking-wider mb-2 px-2">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2">
            <button className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-[#D2B48C] text-[#8B4513] hover:bg-[#F5DEB3] transition-colors">
              <Camera size={18} />
              <span className="text-xs mt-1">Virtual Tours</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-[#D2B48C] text-[#8B4513] hover:bg-[#F5DEB3] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 6.1H3"></path>
                <path d="M21 12.1H3"></path>
                <path d="M15.1 18H3"></path>
              </svg>
              <span className="text-xs mt-1">Community</span>
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="absolute bottom-0 w-full p-4 border-t border-[#D2B48C] bg-[#FFF8DC]">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm bg-white border border-[#D2B48C] text-[#8B4513] hover:bg-[#F5DEB3] transition-colors"
          >
            <LogOutIcon size={18} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;