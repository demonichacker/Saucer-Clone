import React from 'react';

const collaborators = [
  { id: 1, image: '/images/collab/3.png', name: 'Team 1', link: 'https://team1.com' },
  { id: 2, image: '/images/collab/4.png', name: 'Team 2', link: 'https://team2.com' },
  { id: 3, image: '/images/collab/5.png', name: 'Team 3', link: 'https://team3.com' },
  { id: 4, image: '/images/collab/10.png', name: 'Team 4', link: 'https://team4.com' },
  { id: 5, image: '/images/collab/9.png', name: 'Team 5', link: 'https://team5.com' },
  { id: 6, image: '/images/collab/5.png', name: 'Team 6', link: 'https://team6.com' },
  { id: 7, image: '/images/collab/4.png', name: 'Team 7', link: 'https://team7.com' },
  { id: 8, image: '/images/collab/3.png', name: 'Team 8', link: 'https://team8.com' },
  { id: 9, image: '/images/collab/9.png', name: 'Team 9', link: 'https://team9.com' },
  { id: 10, image: '/images/collab/10.png', name: 'Team 10', link: 'https://team10.com' },
];

const Collaborations = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-opacity duration-700"
        style={{
          backgroundImage: 'url(/images/down.webp)',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Collaborators</h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex space-x-6 sm:space-x-12 md:space-x-24 mr-6 sm:mr-12 md:mr-24">
              {collaborators.map((collab) => (
                <div key={collab.id} className="inline-block w-16 sm:w-24 md:w-48 flex-shrink-0">
                  <a 
                    href={collab.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={collab.image}
                      alt={collab.name}
                      className="w-full h-auto object-contain hover:brightness-125 transition-all duration-300"
                    />
                  </a>
                </div>
              ))}
            </div>
            <div className="flex space-x-6 sm:space-x-12 md:space-x-24">
              {collaborators.map((collab) => (
                <div key={`${collab.id}-duplicate`} className="inline-block w-16 sm:w-24 md:w-48 flex-shrink-0">
                  <a 
                    href={collab.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={collab.image}
                      alt={collab.name}
                      className="w-full h-auto object-contain hover:brightness-125 transition-all duration-300"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
