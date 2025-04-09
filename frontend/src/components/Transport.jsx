import React, { useState, useEffect } from 'react';

// Add these image imports at the top of your file
const transportImages = {
  road: {
    main: "https://www.carsaar.com/wp-content/uploads/2018/08/National-Highway-2.jpg",  // Modern Indian highway
    historic: "https://i.dawn.com/primary/2023/06/647ba9284d4bf.jpg", // Historic Grand Trunk Road
    modern: "https://images.tv9hindi.com/wp-content/uploads/2023/02/delhi-mumbai-expressway-why-it-is-one-of-the-worlds-modern-expressways-5-points-to-know.jpg" // Modern expressway
  },
  rail: {
    main: "https://www.alstom.com/sites/alstom.com/files/2018/07/08/Global/OneAlstomPlus/Railsystems/Pressreleases/2018/20180311--Prima-with-logo--800x500.jpg", // Modern Indian train
    historic: "https://www.american-rails.com/images/2472y119fhavck90760.jpg", // Historic steam engine
    modern: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Vande_Bharat_Express_around_Mumbai.jpg" // Vande Bharat Express
  },
  water: {
    main: "https://www.99notes.in/wp-content/uploads/2023/04/waterways-transport-banner-99notes-upsc.webp", // Modern Indian port
    historic: "https://www.urbantransportnews.com/assets/uploads/gallary/20200909141030.jpg", // Traditional boats
    modern: "https://www.freightwaves.com/wp-content/uploads/2022/10/Maersk-green-methanol-vessel-image-002-1200x673.png" // Modern container ship
  },
  air: {
    main: "https://media.licdn.com/dms/image/v2/D4E12AQEeoROe4WNweA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705085600118?e=2147483647&v=beta&t=xv78AGoo_o4_u3t5KKpDFbm57OHnsXxtQMRBTkINqMw", // Modern airport terminal
    historic: "https://eaavintage.org/wp-content/uploads/2020/11/48553997636_f25293763a_c.jpg", // Vintage aircraft
    modern: "https://www.cdiproducts.com/hubfs/blog-2021/Depositphotos_8842091_l-2015-1.jpeg" // Modern aircraft
  }
};

// Gallery images for each transport type
const galleryImages = {
  road: [
    {
      url: "https://media.licdn.com/dms/image/v2/D4D12AQHy6ZwVvRkUYw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698311490084?e=2147483647&v=beta&t=2ni4c_MEU39CXuBQlgfk6wbFE4kMt_oa1ghTQlmNlVg",
      caption: "Modern Highway Infrastructure"
    },
    {
      url: "https://cdn.britannica.com/16/179816-138-5B0A6539/Overview-Silk-Road.jpg?w=800&h=450&c=crop",
      caption: "Ancient Trade Routes"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1gHQGewMEzzqP21EgLi2BpViYw9PnkJDSg&s",
      caption: "Rural Connectivity"
    }
  ],
  rail: [
    {
       url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmQozCSYelKgLr7RurFWZbEFBMeMNe_y_lg&s" ,
      caption: "Modern Railway Station"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsZ4PMxQxAaDrjlvjSI18qWAf6UE4efpisA&s",
      caption: "Heritage Mountain Railways"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtTGkhQqJmUYUYln0CoJD8a_q_wWjZvVH0Q&s",
      caption: "High-Speed Rail Network"
    }
  ],
  water: [
    {
      url: "https://steantycip.com/wp-content/uploads/2021/01/digitalisation-secteur-maritime.jpg",
      caption: "Modern Port Operations"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY30NYvdwbmR3unLGAkvkNihNn1d81lq6BiA&s",
      caption: "Traditional Water Transport"
    },
    {
      url: "https://guidersacademy.com/_next/image?url=https%3A%2F%2Flmsamediaprodeastasia.blob.core.windows.net%2Fimages%2Ff796091cfe2a44b69b611ffcf55812cc.jpg&w=1920&q=75",
      caption: "Coastal Shipping"
    }
  ],
  air: [
    {
      url: "https://static2.gensler.com/uploads/hero_element/22218/thumb_desktop/thumbs/JFK.Aerial.One.Point.Perspective.Copyright.tmrw_1688596341_1024x576.jpg",
      caption: "Modern Airport Terminal"
    },
    {
      url: "https://www.flightradar24.com/blog/wp-content/uploads/2020/06/77531_1591911460.jpg",
      caption: "Aircraft Fleet"
    },
    {
      url: "https://textiletoday.com.bd/storage/uploads/2021/01/Expediting-regional-cooperation-trade-transport-connectivity.jpg",
      caption: "Regional Connectivity"
    }
  ]
};

const Transport = () => {
  const [activeTab, setActiveTab] = useState('road');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [animateTimeline, setAnimateTimeline] = useState(false);

  // Handle scroll effect for the sticky header and timeline animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Check if timeline section is in viewport for animation
      const timelineElement = document.getElementById('timeline');
      if (timelineElement) {
        const rect = timelineElement.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimateTimeline(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transportTypes = [
    { 
      id: 'road', 
      name: 'Road Transport',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      )
    },
    { 
      id: 'rail', 
      name: 'Railways',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
          <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      id: 'water', 
      name: 'Water Transport',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
          <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      id: 'air', 
      name: 'Air Transport',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      )
    },
  ];

  const transportData = {
    road: {
      title: 'Road Transport in India',
      subtitle: 'From Ancient Pathways to Modern Highways',
      description: 'The evolution of road transport in India spans thousands of years, from ancient trade routes to modern highways, connecting the diverse landscapes of the subcontinent.',
      history: 'Ancient India had well-planned roads like the Grand Trunk Road built by Sher Shah Suri in the 16th century. Bullock carts, horse carriages, and palanquins were the primary modes of transport. The Mauryan Empire (322-185 BCE) developed a sophisticated road network with rest houses and milestones. During British rule, roads were primarily built to connect ports and administrative centers.',
      modern: 'Today, India boasts the second-largest road network globally with over 5.89 million kilometers of roads, including expressways, national highways, and rural roads. Modern vehicles range from auto-rickshaws to luxury cars. The Golden Quadrilateral and North-South, East-West Corridors have revolutionized connectivity between major cities. The Pradhan Mantri Gram Sadak Yojana has significantly improved rural connectivity.',
      innovations: 'India has seen significant innovations in road transport, including electric vehicles, smart highways with IoT integration, and the development of indigenous vehicles like Tata Nano. FASTag electronic toll collection has reduced congestion at toll plazas. Traffic management systems using AI and machine learning are being implemented in smart cities. The government\'s push for electric mobility through FAME schemes is transforming urban transportation.',
      image: 'https://images.unsplash.com/photo-1624821558130-b521fde8e8dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      historicImage: 'https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      galleryImages: galleryImages.road,
      facts: [
        'The Grand Trunk Road, one of Asia\'s oldest roads, spans over 2,500 km from Bangladesh to Afghanistan',
        'India\'s Golden Quadrilateral highway network is the 5th longest highway project in the world',
        'The Mumbai-Pune Expressway, opened in 2002, was India\'s first six-lane concrete, high-speed, access-controlled toll road'
      ],
      heritageConnections: [
        {
          site: 'Taj Mahal, Agra',
          transport: 'Accessible via the Yamuna Expressway from Delhi, or by local auto-rickshaws and cycle-rickshaws within Agra'
        },
        {
          site: 'Khajuraho Temples',
          transport: 'Connected by NH39 and state highways; local transport includes taxis and auto-rickshaws'
        }
      ],
      color: 'orange',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    rail: {
      title: 'Indian Railways',
      subtitle: 'The Lifeline of the Nation',
      description: 'Indian Railways is one of the world\'s largest railway networks and has played a crucial role in India\'s development, connecting its vast and diverse regions.',
      history: 'The first passenger train in India ran between Bombay (Mumbai) and Thane on April 16, 1853, spanning 34 kilometers. By 1900, India had about 40,000 km of railway tracks. The British established railways primarily for administrative and commercial purposes. Post-independence, Indian Railways was nationalized and became a symbol of national unity and progress.',
      modern: 'Today, Indian Railways operates over 22,000 trains daily, covering more than 67,000 km of tracks. Modern additions include the Vande Bharat Express, Metro systems in major cities, and the upcoming bullet train project. The network serves over 23 million passengers daily and transports over 3 million tonnes of freight. Computerized reservation systems and mobile ticketing have revolutionized the passenger experience.',
      innovations: 'Recent innovations include KAVACH (automatic train protection system), solar-powered trains, bio-toilets, and the indigenously developed Train 18 (Vande Bharat Express). The Dedicated Freight Corridors are enhancing cargo capacity. Indian Railways is also implementing RFID tagging for real-time monitoring of rolling stock and exploring hydrogen-powered trains for sustainable transportation.',
      image: 'https://images.unsplash.com/photo-1601629665203-f9f2b8d3f2ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      historicImage: 'https://images.unsplash.com/photo-1601629665117-98a0880d6024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      galleryImages: galleryImages.rail,
      facts: [
        'The Darjeeling Himalayan Railway, known as the "Toy Train", is a UNESCO World Heritage Site operating since 1881',
        'The Vivek Express, running between Dibrugarh and Kanyakumari, covers 4,273 km and is India\'s longest train route',
        'Indian Railways employs over 1.3 million people, making it one of the world\'s largest employers'
      ],
      heritageConnections: [
        {
          site: 'Hampi, Karnataka',
          transport: 'Accessible via Hospet Junction railway station, with connecting local transport to the ruins'
        },
        {
          site: 'Konark Sun Temple, Odisha',
          transport: 'Nearest railway station is Puri, with bus and taxi connections to Konark'
        }
      ],
      color: 'blue',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    water: {
      title: 'Water Transport in India',
      subtitle: 'Navigating Ancient Waters with Modern Vessels',
      description: 'With a coastline of 7,517 km and numerous rivers, water transport has been integral to India\'s trade and connectivity since ancient times.',
      history: 'Ancient maritime trade flourished through ports like Lothal (2400 BCE) and Poompuhar. Traditional boats like the kettuvallam in Kerala and the patia in Odisha served local transportation needs. The Chola dynasty (300 BCE-1279 CE) had a powerful navy and extensive maritime trade networks. Ancient texts like the Arthashastra mention regulations for water transport and port management.',
      modern: 'Modern water transport includes major ports like Mumbai, Chennai, and Kolkata, handling international cargo. National Waterways provide inland water transport on rivers like the Ganga and Brahmaputra. Passenger ferry services operate in coastal areas and between mainland and islands. Modern container terminals and automated cargo handling systems have enhanced efficiency at major ports.',
      innovations: 'Recent developments include the Sagarmala project for port modernization, water metro services in Kochi, and the use of alternative fuels in maritime transport. The Jal Marg Vikas Project is developing the Ganga waterway with multi-modal terminals. Digital port management systems and vessel tracking technologies are improving safety and efficiency. RO-RO (Roll-on/Roll-off) ferry services are reducing road congestion in coastal areas.',
      image: 'https://images.unsplash.com/photo-1584289537662-27851fd5ab5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      historicImage: 'https://images.unsplash.com/photo-1623691752236-a60611d3ac7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      galleryImages: galleryImages.water,
      facts: [
        'The Buckingham Canal, built during British rule, is a 796 km long freshwater navigation canal parallel to the Coromandel Coast',
        'India has 12 major ports and over 200 non-major ports handling approximately 1,400 million tons of cargo annually',
        'The National Waterway 1 on the Ganges is 1,620 km long, connecting Haldia to Allahabad'
      ],
      heritageConnections: [
        {
          site: 'Elephanta Caves, Mumbai',
          transport: 'Accessible by ferry from Gateway of India, Mumbai'
        },
        {
          site: 'Shore Temple, Mahabalipuram',
          transport: 'Located on the coast with boat tours available for viewing from the sea'
        }
      ],
      color: 'teal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    air: {
      title: 'Air Transport in India',
      subtitle: 'Soaring to New Heights',
      description: 'India\'s aviation sector has grown rapidly, connecting remote parts of the country and establishing global connections, making the world more accessible.',
      history: 'The first commercial flight in India operated in 1911 between Allahabad and Naini. Air India (originally Tata Airlines) was founded in 1932 by JRD Tata, pioneering civil aviation in India. Post-independence, the government nationalized air transport with the Air Corporations Act of 1953. For decades, Indian Airlines and Air India operated as government monopolies until liberalization in the 1990s.',
      modern: 'Today, India is the third-largest domestic aviation market globally with over 100 operational airports. Major airlines include Air India, IndiGo, and SpiceJet, connecting metropolitan cities and remote regions. The UDAN (Ude Desh ka Aam Nagrik) scheme has made air travel accessible to tier-2 and tier-3 cities. Modern airports like Delhi T3 and Mumbai T2 feature world-class facilities and technology.',
      innovations: 'Recent innovations include the UDAN scheme for regional connectivity, development of indigenous aircraft like SARAS, and the implementation of DigiYatra for paperless travel using facial recognition. Airports are adopting renewable energy sources and sustainable practices. Air traffic management systems are being modernized with GPS-based navigation. Drone technology is being explored for cargo delivery and surveillance.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      historicImage: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      galleryImages: galleryImages.air,
      facts: [
        'JRD Tata piloted the first commercial flight in India in 1932, carrying mail from Karachi to Bombay via Ahmedabad',
        'The Indira Gandhi International Airport in Delhi is the busiest airport in India, handling over 69 million passengers annually (pre-COVID)',
        'The UDAN scheme has operationalized over 400 routes, connecting more than 60 unserved and underserved airports'
      ],
      heritageConnections: [
        {
          site: 'Khajuraho Temples',
          transport: 'Direct flights to Khajuraho Airport from Delhi and Varanasi'
        },
        {
          site: 'Valley of Flowers, Uttarakhand',
          transport: 'Nearest airport is Dehradun, followed by road journey and trek'
        }
      ],
      color: 'indigo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
  };

  const activeTransport = transportData[activeTab];

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const timelineEvents = {
    road: [
      { year: '300 BCE', event: 'Mauryan Empire establishes extensive road network with rest houses', icon: 'castle' },
      { year: '1540s', event: 'Sher Shah Suri rebuilds the Grand Trunk Road', icon: 'road' },
      { year: '1853', event: 'First metalled road between Calcutta and Delhi', icon: 'construction' },
      { year: '1970s', event: 'National Highway system development begins', icon: 'map' },
      { year: '1999', event: 'Golden Quadrilateral project launched', icon: 'compass' },
      { year: '2000', event: 'Pradhan Mantri Gram Sadak Yojana for rural connectivity', icon: 'home' },
      { year: '2015', event: 'Bharatmala Pariyojana for highway development', icon: 'trending-up' }
    ],
    rail: [
      { year: '1853', event: 'First passenger train runs between Bombay and Thane', icon: 'train' },
      { year: '1881', event: 'Darjeeling Himalayan Railway begins operation', icon: 'mountain' },
      { year: '1925', event: 'First electric train runs between Bombay VT and Kurla', icon: 'zap' },
      { year: '1951', event: 'Railways nationalized into a single unit', icon: 'flag' },
      { year: '1984', event: 'First Shatabdi Express introduced', icon: 'fast-forward' },
      { year: '2002', event: 'First Metro Rail begins in Kolkata', icon: 'map-pin' },
      { year: '2019', event: 'Vande Bharat Express (Train 18) introduced', icon: 'award' }
    ],
    water: [
      { year: '2400 BCE', event: 'Lothal dock constructed during Indus Valley Civilization', icon: 'anchor' },
      { year: '1000 CE', event: 'Chola dynasty establishes maritime trade routes', icon: 'globe' },
      { year: '1700s', event: 'Development of major ports under colonial rule', icon: 'map' },
      { year: '1950s', event: 'Nationalization of major ports post-independence', icon: 'flag' },
      { year: '1986', event: 'Inland Waterways Authority of India established', icon: 'compass' },
      { year: '2016', event: 'Sagarmala project launched for port-led development', icon: 'anchor' },
      { year: '2021', event: 'Kochi Water Metro service inaugurated', icon: 'navigation' }
    ],
    air: [
      { year: '1911', event: 'First commercial flight between Allahabad and Naini', icon: 'send' },
      { year: '1932', event: 'JRD Tata establishes Tata Airlines (later Air India)', icon: 'briefcase' },
      { year: '1953', event: 'Air transport nationalized under Air Corporations Act', icon: 'flag' },
      { year: '1991', event: 'Aviation sector opened to private players', icon: 'unlock' },
      { year: '2003', event: 'Low-cost carriers revolutionize air travel', icon: 'dollar-sign' },
      { year: '2016', event: 'National Civil Aviation Policy and UDAN scheme launched', icon: 'file-text' },
      { year: '2022', event: 'Air India privatized and returned to Tata Group', icon: 'refresh-cw' }
    ]
  };

  // Get color classes based on transport type
  const getColorClasses = (type) => {
    const colors = {
      road: {
        primary: 'from-orange-600 to-amber-500',
        secondary: 'bg-orange-600',
        light: 'bg-orange-100 text-orange-800',
        border: 'border-orange-200',
        text: 'text-orange-800',
        gradient: 'from-orange-50 to-amber-50',
        hover: 'hover:bg-orange-700',
        timeline: 'bg-gradient-to-b from-orange-600 via-orange-500 to-amber-500'
      },
      rail: {
        primary: 'from-blue-600 to-indigo-500',
        secondary: 'bg-blue-600',
        light: 'bg-blue-100 text-blue-800',
        border: 'border-blue-200',
        text: 'text-blue-800',
        gradient: 'from-blue-50 to-indigo-50',
        hover: 'hover:bg-blue-700',
        timeline: 'bg-gradient-to-b from-blue-600 via-blue-500 to-indigo-500'
      },
      water: {
        primary: 'from-teal-600 to-cyan-500',
        secondary: 'bg-teal-600',
        light: 'bg-teal-100 text-teal-800',
        border: 'border-teal-200',
        text: 'text-teal-800',
        gradient: 'from-teal-50 to-cyan-50',
        hover: 'hover:bg-teal-700',
        timeline: 'bg-gradient-to-b from-teal-600 via-teal-500 to-cyan-500'
      },
      air: {
        primary: 'from-indigo-600 to-purple-500',
        secondary: 'bg-indigo-600',
        light: 'bg-indigo-100 text-indigo-800',
        border: 'border-indigo-200',
        text: 'text-indigo-800',
        gradient: 'from-indigo-50 to-purple-50',
        hover: 'hover:bg-indigo-700',
        timeline: 'bg-gradient-to-b from-indigo-600 via-indigo-500 to-purple-500'
      }
    };
    
    return colors[type];
  };

  const colorClasses = getColorClasses(activeTab);

  // Icon mapping for timeline
  const getTimelineIcon = (iconName) => {
    const icons = {
      'castle': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      'road': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      'construction': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      'map': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      'compass': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      ),
      'home': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7m-14 0l2-2" />
        </svg>
      ),
      'trending-up': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      'train': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      'mountain': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      'zap': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      'flag': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      'fast-forward': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
        </svg>
      ),
      'map-pin': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      'award': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      'anchor': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13a5 5 0 007 4.54v-4.54H5v4.54A5 5 0 0012 13zm0 0V3" />
        </svg>
      ),
      'globe': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'navigation': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      'send': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      'briefcase': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      'unlock': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      'dollar-sign': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'file-text': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      'refresh-cw': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    };
    
    return icons[iconName] || (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    );
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen font-sans">
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`font-bold transition-all duration-300 flex items-center ${isScrolled ? 'text-2xl text-orange-800' : 'text-3xl text-orange-700'}`}>
            <span className="bg-orange-600 text-white p-2 rounded-lg mr-3">BT</span>
            Bharat Transport
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {transportTypes.map((type) => (
                <li key={type.id}>
                  <button
                    onClick={() => setActiveTab(type.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center ${
                      activeTab === type.id
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'hover:bg-orange-100 text-gray-700'
                    }`}
                  >
                    {type.icon}
                    {type.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden bg-orange-100 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white shadow-sm mb-6">
        <div className="container mx-auto px-4 py-2 overflow-x-auto">
          <div className="flex space-x-2">
            {transportTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap flex items-center ${
                  activeTab === type.id
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-orange-50 text-gray-700'
                }`}
              >
                {type.icon}
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
          <div className="absolute inset-0">
            <img
              src={transportImages[activeTab]?.main || "/placeholder.jpg"}
              alt={`${activeTransport.title} Transportation`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.primary} opacity-80`}></div>
          </div>
          <div className="relative py-16 px-8 md:py-24 md:px-12 max-w-3xl">
            <span className="inline-block bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-md">
              Fabulous India
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
              {activeTransport.title}
            </h2>
            <p className="text-xl text-white/90 mb-6 drop-shadow-sm">
              {activeTransport.subtitle}
            </p>
            <p className="text-white/80 text-lg max-w-2xl mb-8 drop-shadow-sm">
              {activeTransport.description}
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('timeline');
                element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-orange-700 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-all flex items-center shadow-lg transform hover:translate-y-[-2px]"
            >
              Explore History
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`bg-gradient-to-br ${colorClasses.gradient} rounded-xl p-6 shadow-lg border ${colorClasses.border} transform transition-all duration-300 hover:scale-[1.02]`}>
            <div className="flex items-start">
              <div className={`${colorClasses.light} p-3 rounded-lg mr-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {activeTab === 'road' && "5.89 Million KM"}
                  {activeTab === 'rail' && "67,000+ KM"}
                  {activeTab === 'water' && "7,517 KM"}
                  {activeTab === 'air' && "100+ Airports"}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeTab === 'road' && "Total Road Network"}
                  {activeTab === 'rail' && "Railway Tracks"}
                  {activeTab === 'water' && "Coastline Length"}
                  {activeTab === 'air' && "Operational Airports"}
                </p>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br ${colorClasses.gradient} rounded-xl p-6 shadow-lg border ${colorClasses.border} transform transition-all duration-300 hover:scale-[1.02]`}>
            <div className="flex items-start">
              <div className={`${colorClasses.light} p-3 rounded-lg mr-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {activeTab === 'road' && "1853"}
                  {activeTab === 'rail' && "1853"}
                  {activeTab === 'water' && "2400 BCE"}
                  {activeTab === 'air' && "1911"}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeTab === 'road' && "First Metalled Road"}
                  {activeTab === 'rail' && "First Passenger Train"}
                  {activeTab === 'water' && "Lothal Dockyard"}
                  {activeTab === 'air' && "First Commercial Flight"}
                </p>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br ${colorClasses.gradient} rounded-xl p-6 shadow-lg border ${colorClasses.border} transform transition-all duration-300 hover:scale-[1.02]`}>
            <div className="flex items-start">
              <div className={`${colorClasses.light} p-3 rounded-lg mr-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {activeTab === 'road' && "#2 Globally"}
                  {activeTab === 'rail' && "#4 Globally"}
                  {activeTab === 'water' && "12 Major Ports"}
                  {activeTab === 'air' && "#3 Globally"}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeTab === 'road' && "Road Network Ranking"}
                  {activeTab === 'rail' && "Railway Network Ranking"}
                  {activeTab === 'water' && "Port Infrastructure"}
                  {activeTab === 'air' && "Domestic Aviation Market"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Then & Now Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Then & Now</h2>
            <div className={`ml-4 flex-grow h-0.5 bg-gradient-to-r from-${activeTransport.color}-300 to-transparent`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-orange-100 transition-transform hover:scale-[1.02] duration-300 group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={transportImages[activeTab]?.historic}
                  alt="Historic transportation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2070"; // Fallback image
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full shadow-md">
                    Historical Era
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Traditional Transportation</h3>
                <p className="text-gray-700 leading-relaxed">{activeTransport.history}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-green-100 transition-transform hover:scale-[1.02] duration-300 group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={transportImages[activeTab]?.modern}
                  alt="Modern transportation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1569629743817-70d8db5c6b9d?q=80&w=2071"; // Fallback image
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full shadow-md">
                    Modern Era
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Contemporary Transportation</h3>
                <p className="text-gray-700 leading-relaxed">{activeTransport.modern}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section - Enhanced */}
        <section id="timeline" className="mb-16 scroll-mt-20 py-12 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 relative">
                Evolution Timeline
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-amber-500 to-transparent"></span>
              </h2>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-gradient-to-b ${colorClasses.timeline} shadow-lg`}></div>
              
              {/* Timeline Events */}
              <div className="relative">
                {timelineEvents[activeTab].map((event, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row items-start mb-16 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } ${animateTimeline ? 'animate-fadeIn' : 'opacity-0'}`}
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      opacity: animateTimeline ? 1 : 0,
                      transform: animateTimeline ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div className="flex-1 md:w-1/2"></div>
                    
                    {/* Timeline Node */}
                    <div className="mx-8 md:mx-0 z-10 flex items-center justify-center relative">
                      <div className={`w-16 h-16 rounded-full ${colorClasses.secondary} border-4 border-white shadow-xl 
                        flex items-center justify-center text-white font-bold 
                        transition-all duration-500 hover:scale-110 
                        ${animateTimeline ? 'scale-100' : 'scale-0'}`}
                      >
                        {getTimelineIcon(event.icon)}
                      </div>
                      {/* Connecting Line */}
                      <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-full' : 'right-full'} 
                        w-8 h-[2px] ${colorClasses.timeline} hidden md:block`}></div>
                    </div>

                    {/* Event Content */}
                    <div className={`flex-1 md:w-1/2 bg-white p-8 rounded-2xl shadow-xl 
                      border ${colorClasses.border} ml-8 md:ml-0 
                      transform transition-all duration-300 
                      hover:shadow-2xl hover:scale-[1.02] 
                      ${animateTimeline ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                      backdrop-blur-sm bg-white/90`}
                    >
                      <div className="flex items-center mb-4">
                        <span className={`inline-block ${colorClasses.light} px-4 py-2 
                          rounded-full text-sm font-bold shadow-sm mr-4`}
                        >
                          {event.year}
                        </span>
                        <div className={`h-px flex-grow ${colorClasses.timeline} opacity-30`}></div>
                      </div>
                      <p className="text-gray-800 font-medium text-lg leading-relaxed">
                        {event.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Innovations Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Innovations & Advancements</h2>
            <div className={`ml-4 flex-grow h-0.5 bg-gradient-to-r from-${activeTransport.color}-300 to-transparent`}></div>
          </div>
          
          <div className={`bg-gradient-to-r ${colorClasses.gradient} rounded-xl p-8 shadow-xl border ${colorClasses.border}`}>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-white rounded-full p-5 shadow-lg">
                {activeTransport.icon}
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold ${colorClasses.text} mb-4`}>Cutting-Edge Technologies</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{activeTransport.innovations}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {activeTab === 'road' && (
                    <>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Electric Mobility</h4>
                        </div>
                        <p className="text-sm text-gray-600">India's push for electric vehicles through FAME schemes is transforming urban transportation.</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Smart Highways</h4>
                        </div>
                        <p className="text-sm text-gray-600">IoT-enabled highways with real-time monitoring and automated toll collection systems.</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Indigenous Vehicles</h4>
                        </div>
                        <p className="text-sm text-gray-600">Development of locally designed and manufactured vehicles suited for Indian conditions.</p>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 'rail' && (
                    <>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">KAVACH System</h4>
                        </div>
                        <p className="text-sm text-gray-600">Automatic train protection system to prevent collisions and ensure safety.</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Vande Bharat Express</h4>
                        </div>
                        <p className="text-sm text-gray-600">Indigenously developed semi-high speed train with modern passenger amenities.</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Green Initiatives</h4>
                        </div>
                        <p className="text-sm text-gray-600">Solar-powered trains and stations, bio-toilets, and water recycling systems.</p>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 'water' && (
                    <>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Sagarmala Project</h4>
                        </div>
                        <p className="text-sm text-gray-600">Port-led development initiative to enhance logistics efficiency and coastal community development.</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Water Metro</h4>
                        </div>
                        <p className="text-sm text-gray-600">Modern ferry systems with integrated water transport networks in coastal cities.</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Digital Port Management</h4>
                        </div>
                        <p className="text-sm text-gray-600">Automated cargo handling and vessel traffic management systems for improved efficiency.</p>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 'air' && (
                    <>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">UDAN Scheme</h4>
                        </div>
                        <p className="text-sm text-gray-600">Regional connectivity scheme making air travel accessible to tier-2 and tier-3 cities.</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">DigiYatra</h4>
                        </div>
                        <p className="text-sm text-gray-600">Facial recognition technology for paperless and seamless travel experience at airports.</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${colorClasses.secondary} flex items-center justify-center text-white mr-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">Indigenous Aircraft</h4>
                        </div>
                        <p className="text-sm text-gray-600">Development of SARAS and other locally designed aircraft for regional connectivity.</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Transport Gallery</h2>
            <div className={`ml-4 flex-grow h-0.5 bg-gradient-to-r from-${activeTransport.color}-300 to-transparent`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeTransport.galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-all hover:scale-[1.03] hover:shadow-2xl group"
                onClick={() => openModal(image)}
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`${colorClasses.secondary} p-3 rounded-full shadow-lg`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Heritage Sites Connection */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Heritage Connections</h2>
            <div className={`ml-4 flex-grow h-0.5 bg-gradient-to-r from-${activeTransport.color}-300 to-transparent`}></div>
          </div>
          
          <div className={`bg-gradient-to-r ${colorClasses.gradient} rounded-xl p-8 shadow-xl border ${colorClasses.border}`}>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reaching India's Cultural Treasures</h3>
              <p className="text-gray-700">
                Discover how to reach India's magnificent heritage sites using various transportation options. From ancient temples accessible by traditional boats to remote monuments connected by modern highways, transportation has shaped how we experience India's cultural treasures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {activeTransport.heritageConnections.map((connection, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-orange-200">
                  <div className="flex items-start">
                    <div className={`${colorClasses.light} p-3 rounded-full mr-4`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2 text-lg">{connection.site}</h4>
                      <p className="text-gray-700">{connection.transport}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <button className={`${colorClasses.secondary} ${colorClasses.hover} text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg transform hover:translate-y-[-2px]`}>
                Explore All Heritage Sites
              </button>
            </div>
          </div>
        </section>

        {/* Did You Know Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Did You Know?</h2>
            <div className={`ml-4 flex-grow h-0.5 bg-gradient-to-r from-${activeTransport.color}-300 to-transparent`}></div>
          </div>
          
          <div className={`bg-gradient-to-r ${colorClasses.gradient} rounded-xl p-8 shadow-xl`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeTransport.facts.map((fact, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className={`${colorClasses.light} rounded-full p-3 mr-4 flex-shrink-0`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className={`bg-gradient-to-r ${colorClasses.primary} rounded-xl p-10 shadow-2xl text-white overflow-hidden relative`}>
            <div className="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Experience India's Transport Heritage</h2>
              <p className="text-white/90 mb-8 text-lg">
                From ancient trade routes to modern aviation marvels, India's transportation history is a testament to human ingenuity and cultural exchange. Plan your journey to experience this rich heritage firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-orange-50 font-medium py-3 px-8 rounded-lg transition-all shadow-lg transform hover:translate-y-[-2px]">
                  Plan Your Heritage Journey
                </button>
                <button className={`bg-${activeTransport.color}-700 hover:bg-${activeTransport.color}-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg transform hover:translate-y-[-2px]`}>
                  Explore Interactive Map
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-orange-600 text-white p-2 rounded-lg mr-3">BT</span>
                Bharat Transport
              </h3>
              <p className="text-gray-400 mb-4">
                Exploring India's rich transportation heritage from ancient pathways to modern marvels.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Heritage Sites</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Transport History</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Transport Types</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Road Transport</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Railways</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Water Transport</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Air Transport</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Traditional Vehicles</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on India's transport heritage.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800" />
                <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bharat Transport Heritage. All rights reserved. Part of BharatDarshan - Exploring India's Cultural Treasures.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={modalContent?.url || "/placeholder.svg"} 
                alt={modalContent?.caption} 
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-800 font-medium">{modalContent?.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add some CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .pattern-dots {
          background-image: radial-gradient(currentColor 1px, transparent 1px);
          background-size: calc(10 * 1px) calc(10 * 1px);
        }
      `}</style>
    </div>
  );
};

export default Transport;