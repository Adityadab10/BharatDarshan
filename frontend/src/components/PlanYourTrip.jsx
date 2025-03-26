import React, { useState } from 'react';
import { 
  MapPinIcon, 
  PlaneIcon, 
  TrainIcon, 
  BusIcon, 
  CarIcon, 
  ClockIcon,
  CloudIcon 
} from 'lucide-react';

const PlanYourTrip = () => {
  const [selectedSite, setSelectedSite] = useState('');
  const [transportMode, setTransportMode] = useState('car');
  const [fromLocation, setFromLocation] = useState('Mumbai');
  
  // Sample heritage sites data with distances from Mumbai
  const heritageSites = [
    { 
      id: 'taj', 
      name: 'Taj Mahal', 
      location: 'Agra, Uttar Pradesh', 
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3548203415017!2d78.04236527455764!3d27.17497072984066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747785dd6d5bbf%3A0x4a0a6c4defbca1ef!2sTaj%20Mahal!5e0!3m2!1sen!2sus!4v1709129289414!5m2!1sen!2sus',
      distances: {
        car: { distance: '1,342 km', time: '22h 30m' },
        train: { distance: '1,375 km', time: '24h' },
        bus: { distance: '1,360 km', time: '25h' },
        plane: { distance: '1,300 km', time: '2h' }
      }
    },
    { 
      id: 'qutub', 
      name: 'Qutub Minar', 
      location: 'Delhi', 
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.486918421413!2d77.18533607457842!3d28.524645682459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e07d4d30e09%3A0x66da563e553c2cfb!2sQutub%20Minar!5e0!3m2!1sen!2sus!4v1709129330989!5m2!1sen!2sus',
      distances: {
        car: { distance: '1,401 km', time: '23h 40m' },
        train: { distance: '1,420 km', time: '25h' },
        bus: { distance: '1,410 km', time: '26h' },
        plane: { distance: '1,350 km', time: '2h 15m' }
      }
    },
    { 
      id: 'ajanta', 
      name: 'Ajanta Caves', 
      location: 'Aurangabad, Maharashtra', 
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.3395355555643!2d75.70201617432233!3d20.55324838627669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba1a4ba7aacb7%3A0x30bc62a1289eaa7!2sAjanta%20Caves!5e0!3m2!1sen!2sus!4v1709129365358!5m2!1sen!2sus',
      distances: {
        car: { distance: '410 km', time: '7h 30m' },
        train: { distance: '420 km', time: '8h' },
        bus: { distance: '400 km', time: '9h' },
        plane: { distance: '380 km', time: '1h' }
      }
    },
    { 
      id: 'hampi', 
      name: 'Hampi', 
      location: 'Karnataka', 
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.565225171445!2d76.46012742349882!3d15.335014300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb43e90d1279025%3A0xcde125ab15341e89!2sHampi!5e0!3m2!1sen!2sus!4v1709129401389!5m2!1sen!2sus',
      distances: {
        car: { distance: '836 km', time: '14h' },
        train: { distance: '850 km', time: '15h' },
        bus: { distance: '840 km', time: '16h' },
        plane: { distance: '800 km', time: '1h 30m' }
      }
    },
    { 
      id: 'khajuraho', 
      name: 'Khajuraho', 
      location: 'Madhya Pradesh', 
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14569.506351310193!2d79.91904302367632!3d24.85185199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3980a320a3be4615%3A0xccf004c79a4e7eec!2sKhajuraho%20Group%20of%20Monuments!5e0!3m2!1sen!2sus!4v1709129434869!5m2!1sen!2sus',
      distances: {
        car: { distance: '1,108 km', time: '19h' },
        train: { distance: '1,120 km', time: '20h' },
        bus: { distance: '1,100 km', time: '21h' },
        plane: { distance: '1,060 km', time: '2h' }
      }
    },
    { 
      id: 'konark', 
      name: 'Konark Sun Temple', 
      location: 'Odisha', 
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.9615383369197!2d86.09275997432953!3d19.887651686667994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c560a0a9ce2f1%3A0xa48e44ae4aa2a50!2sKonark%20Sun%20Temple!5e0!3m2!1sen!2sus!4v1709129467074!5m2!1sen!2sus',
      distances: {
        car: { distance: '1,600 km', time: '27h' },
        train: { distance: '1,620 km', time: '28h' },
        bus: { distance: '1,610 km', time: '29h' },
        plane: { distance: '1,550 km', time: '2h 30m' }
      }
    }
  ];
  
  // Sample travel info (unchanged)
  const travelInfo = {
    taj: {
      airports: ['Agra Airport (AGR) - 7 km', 'Delhi Airport (DEL) - 230 km'],
      trainStations: ['Agra Cantt Railway Station - 5 km', 'Agra Fort Railway Station - 3 km'],
      busStops: ['ISBT Agra - 6 km'],
      weather: 'Sunny, 32°C',
      bestTime: 'October to March',
      travelTime: {
        car: '3 hours from Delhi',
        train: '2 hours from Delhi (Gatimaan Express)',
        bus: '4 hours from Delhi',
        plane: '1 hour from Delhi'
      },
      nearbyAccommodation: [
        { name: 'The Oberoi Amarvilas', distance: '0.6 km' },
        { name: 'Taj Hotel & Convention Centre', distance: '1.2 km' },
        { name: 'Crystal Sarovar Premiere', distance: '2.5 km' }
      ]
    }
  };

  return (
    <div className="bg-[#FFF7E6] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-[#8B4513] text-white p-6">
          <h1 className="text-3xl font-bold">Plan Your Heritage Trip</h1>
          <p className="text-sm text-orange-100">Explore India's Magnificent Heritage Sites</p>
        </div>
        
        <div className="p-8">
          {/* Trip Planner */}
          <div className="bg-[#FFF4E6] rounded-lg p-6 mb-8 border border-orange-200">
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-6">Trip Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#8B4513] mb-2">
                  From Location
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    placeholder="Enter your location" 
                    className="w-full py-3 px-4 pl-10 rounded-lg border border-orange-300 bg-white text-[#8B4513] focus:ring-2 focus:ring-[#D2691E]"
                  />
                  <MapPinIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D2691E]" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#8B4513] mb-2">
                  Heritage Site
                </label>
                <select 
                  className="w-full py-3 px-4 rounded-lg border border-orange-300 bg-white text-[#8B4513] focus:ring-2 focus:ring-[#D2691E]"
                  value={selectedSite}
                  onChange={(e) => setSelectedSite(e.target.value)}
                >
                  <option value="">Select a heritage site</option>
                  {heritageSites.map(site => (
                    <option key={site.id} value={site.id}>{site.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="col-span-full">
                <label className="block text-sm font-medium text-[#8B4513] mb-2">
                  Mode of Transport
                </label>
                <div className="flex space-x-2">
                  {[
                    { id: 'car', icon: CarIcon, label: 'Car' },
                    { id: 'train', icon: TrainIcon, label: 'Train' },
                    { id: 'bus', icon: BusIcon, label: 'Bus' },
                    { id: 'plane', icon: PlaneIcon, label: 'Plane' }
                  ].map(mode => {
                    // Get travel time for selected site and mode
                    const travelTime = selectedSite 
                      ? heritageSites.find(site => site.id === selectedSite)?.distances[mode.id]?.time 
                      : null;

                    return (
                      <button
                        key={mode.id}
                        onClick={() => setTransportMode(mode.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg flex-1 transition-colors relative ${
                          transportMode === mode.id
                            ? 'bg-[#D2691E] text-white'
                            : 'bg-[#FFF4E6] text-[#8B4513] hover:bg-orange-100'
                        }`}
                      >
                        <mode.icon size={20} />
                        <span className="text-xs mt-1">{mode.label}</span>
                        {travelTime && (
                          <div className="absolute -top-2 -right-2 bg-[#8B4513] text-white rounded-full px-2 py-1 text-[10px] flex items-center">
                            <ClockIcon size={10} className="mr-1" />
                            {travelTime}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <button className="mt-6 w-full py-3 px-4 bg-[#D2691E] hover:bg-[#8B4513] text-white font-medium rounded-lg transition-colors">
              Explore Route
            </button>
          </div>
          
          {/* Map Section */}
          <div className="bg-[#FFF4E6] rounded-lg p-6 mb-8 border border-orange-200">
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Route Map</h2>
            {selectedSite ? (
              <div className="bg-white border border-orange-200 rounded-lg overflow-hidden">
                <iframe
                  src={heritageSites.find(site => site.id === selectedSite)?.mapSrc}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            ) : (
              <div className="bg-white border border-orange-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-[#8B4513] text-opacity-70">
                  Select a heritage site to view the route map
                </p>
              </div>
            )}
          </div>
          
          {/* Travel Information */}
          {selectedSite === 'taj' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Transportation */}
              <div className="bg-[#FFF4E6] rounded-lg p-6 border border-orange-200">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Transportation</h2>
                
                <div className="space-y-4">
                  {/* Transportation details remain the same, with color updates */}
                  <div>
                    <div className="flex items-center mb-2">
                      <PlaneIcon size={18} className="text-[#D2691E] mr-2" />
                      <h3 className="font-medium text-[#8B4513]">Nearest Airports</h3>
                    </div>
                    <ul className="ml-6 space-y-1 text-sm text-[#8B4513] text-opacity-80">
                      {travelInfo.taj.airports.map((airport, index) => (
                        <li key={index}>{airport}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Weather and Accommodation */}
              <div className="bg-[#FFF4E6] rounded-lg p-6 border border-orange-200">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Visit Information</h2>
                
                <div className="space-y-6">
                  {/* Weather details */}
                  <div>
                    <div className="flex items-center mb-2">
                      <CloudIcon size={18} className="text-[#D2691E] mr-2" />
                      <h3 className="font-medium text-[#8B4513]">Weather</h3>
                    </div>
                    <p className="ml-6 text-sm text-[#8B4513] text-opacity-80">{travelInfo.taj.weather}</p>
                  </div>

                  {/* Best Time to Visit */}
                  <div>
                    <div className="flex items-center mb-2">
                      <ClockIcon size={18} className="text-[#D2691E] mr-2" />
                      <h3 className="font-medium text-[#8B4513]">Best Time to Visit</h3>
                    </div>
                    <p className="ml-6 text-sm text-[#8B4513] text-opacity-80">{travelInfo.taj.bestTime}</p>
                  </div>

                  {/* Nearby Accommodation */}
                  <div>
                    <div className="flex items-center mb-3">
                      <MapPinIcon size={18} className="text-[#D2691E] mr-2" />
                      <h3 className="font-medium text-[#8B4513]">Nearby Accommodation</h3>
                    </div>
                    <div className="space-y-2">
                      {travelInfo.taj.nearbyAccommodation.map((hotel, index) => (
                        <div 
                          key={index}
                          className="ml-6 p-3 bg-white rounded-lg border border-orange-200"
                        >
                          <h4 className="font-medium text-[#8B4513]">{hotel.name}</h4>
                          <p className="text-xs text-[#8B4513] text-opacity-70">
                            Distance: {hotel.distance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Travel Times */}
                  <div>
                    <div className="flex items-center mb-3">
                      <ClockIcon size={18} className="text-[#D2691E] mr-2" />
                      <h3 className="font-medium text-[#8B4513]">Travel Times</h3>
                    </div>
                    <div className="ml-6 grid grid-cols-2 gap-2">
                      {Object.entries(travelInfo.taj.travelTime).map(([mode, time]) => (
                        <div 
                          key={mode}
                          className="p-2 bg-white rounded-lg border border-orange-200"
                        >
                          <div className="flex items-center space-x-2">
                            {mode === 'car' && <CarIcon size={14} className="text-[#D2691E]" />}
                            {mode === 'train' && <TrainIcon size={14} className="text-[#D2691E]" />}
                            {mode === 'bus' && <BusIcon size={14} className="text-[#D2691E]" />}
                            {mode === 'plane' && <PlaneIcon size={14} className="text-[#D2691E]" />}
                            <span className="text-xs text-[#8B4513]">{time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {!selectedSite && (
            <div className="bg-[#FFF4E6] rounded-lg p-6 text-center border border-orange-200">
              <p className="text-[#8B4513] text-opacity-70">
                Select a heritage site to view detailed travel information.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;