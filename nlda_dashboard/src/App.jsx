// // // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Chatbot from './components/Chatbot';
// import SavedQueries from './components/SavedQueries';
// import Visualization from './components/Visualization';

// const App = () => {
//   return (
//     <Router>
//       <nav className="p-4 bg-blue-600 text-white">
//         <ul className="flex space-x-6">
//           <li>
//             <Link to="/" className="hover:underline">Chatbot</Link>
//           </li>
//           <li>
//             <Link to="/saved-queries" className="hover:underline">Saved Queries</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Chatbot />} />
//         <Route path="/saved-queries" element={<SavedQueries />} />
//         <Route path="/visualization" element={<Visualization />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import SavedQueries from './components/SavedQueries';
import Visualization from './components/Visualization';

const App = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white">
         <ul className="flex space-x-6">
           <li>
             <Link to="/" className="hover:underline">Chatbot</Link>
           </li>
           <li>
             <Link to="/saved-queries" className="hover:underline">Saved Queries</Link>
           </li>
         </ul>
       </nav>

      <Routes>
        <Route path="/" element={<Chatbot />} />
        <Route path="/saved-queries" element={<SavedQueries />} />
        <Route path="/visualization" element={<Visualization />} />
      </Routes>
    </Router>
  );
};

export default App;
