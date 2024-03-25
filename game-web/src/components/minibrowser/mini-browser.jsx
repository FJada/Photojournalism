// import React from 'react';
// import './styles.css'; 

// const MiniBrowser = ({ children }) => {
//     return (
//         <div className="container mx-auto">
//           <div className="border rounded shadow-lg overflow-hidden bg-white mini-browser">
//             <div className="bg-gray-200 p-2 flex items-center justify-between browser-bar">
//               <div className="buttons flex">
//                 <div className="button close w-3 h-3 rounded-full bg-red-500 mr-1"></div>
//                 <div className="button minimize w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
//                 <div className="button maximize w-3 h-3 rounded-full bg-green-500"></div>
//               </div>
//               <div className="address-bar">
//                 <span className="text-xs">https://Geography</span>
//               </div>
//             </div>
//             <div className="browser-content p-4">
//               {children}
//             </div>
//           </div>
//         </div>
//       );
//     };
//   export default MiniBrowser;

import React, { useState } from 'react';
import './styles.css';  

const MiniBrowser = ({ children }) => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 3, title: 'Contact', url: '/contact' },
  ]);

  const openTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto">
      <div className="border rounded shadow-lg overflow-hidden bg-white mini-browser">
        <div className="bg-gray-200 p-2 flex items-center justify-between browser-bar">
          <div className="buttons flex">
            <div className="button close w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <div className="button minimize w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
            <div className="button maximize w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="nav-bar">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => openTab(tab.url)}>{tab.title}</button>
            ))}
          </div>
        </div>
        <div className="browser-content p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MiniBrowser;