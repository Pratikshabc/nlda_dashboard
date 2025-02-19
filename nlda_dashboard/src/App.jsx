// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import Chatbot from './components/Chatbot';
// import SavedQueries from './components/SavedQueries';
// import Visualization from './components/Visualization';
// import DatasetUploadPage from './components/DatasetUploadPage';
// import { DatasetProvider } from './components/DatasetContext';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if user is already logged in (by checking localStorage)
//     const user = localStorage.getItem('user');
//     setIsAuthenticated(!!user); // Update authentication state based on localStorage
//   }, []);

//   // Function to handle login success
//   const handleLogin = (user) => {
//     localStorage.setItem('user', JSON.stringify(user));  // Save user to localStorage
//     setIsAuthenticated(true);  // Update the authentication state
//   };

//   return (
//     <DatasetProvider>
//       <Router>
//         <AuthWrapper isAuthenticated={isAuthenticated}>
//           <Routes>
//             {/* If user is authenticated, navigate to Chatbot page */}
//             <Route path="/" element={isAuthenticated ? <Chatbot /> : <Navigate to="/login" />} />
//             <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//             <Route path="/saved-queries" element={isAuthenticated ? <SavedQueries /> : <Navigate to="/login" />} />
//             <Route path="/visualization" element={isAuthenticated ? <Visualization /> : <Navigate to="/login" />} />
//             <Route path="/connections" element={isAuthenticated ? <DatasetUploadPage /> : <Navigate to="/login" />} />
//           </Routes>
//         </AuthWrapper>
//       </Router>
//     </DatasetProvider>
//   );
// };

// // Component to conditionally render the Navbar based on authentication state
// const AuthWrapper = ({ isAuthenticated, children }) => {
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/login";

//   return (
//     <>
//       {!isLoginPage && isAuthenticated && (
//         <nav className="p-4 bg-blue-600 text-white">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:underline">Chatbot</Link></li>
//             <li><Link to="/saved-queries" className="hover:underline">Saved Queries</Link></li>
//             <li><Link to="/connections" className="hover:underline">Connections</Link></li>
//           </ul>
//         </nav>
//       )}
//       {children}
//     </>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import Chatbot from './components/Chatbot';
// import SavedQueries from './components/SavedQueries';
// import Visualization from './components/Visualization';
// import DatasetUploadPage from './components/DatasetUploadPage';
// import { DatasetProvider } from './components/DatasetContext';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     setIsAuthenticated(!!user); // Update authentication state based on localStorage
//   }, []);

//   const handleLogin = (user) => {
//     localStorage.setItem('user', JSON.stringify(user));
//     setIsAuthenticated(true);
//   };

//   return (
//     <DatasetProvider>
//       <Router>
//         <AuthWrapper isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>
//           <Routes>
//             <Route path="/" element={isAuthenticated ? <Chatbot /> : <Navigate to="/login" />} />
//             <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//             <Route path="/saved-queries" element={isAuthenticated ? <SavedQueries /> : <Navigate to="/login" />} />
//             <Route path="/visualization" element={isAuthenticated ? <Visualization /> : <Navigate to="/login" />} />
//             <Route path="/connections" element={isAuthenticated ? <DatasetUploadPage /> : <Navigate to="/login" />} />
//           </Routes>
//         </AuthWrapper>
//       </Router>
//     </DatasetProvider>
//   );
// };

// // Component to render Navbar and Logout button
// const AuthWrapper = ({ isAuthenticated, setIsAuthenticated, children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isLoginPage = location.pathname === "/login";

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setIsAuthenticated(false);
//     navigate('/login');
//   };

//   return (
//     <>
//       {!isLoginPage && isAuthenticated && (
//         <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
//           {/* Navigation Links */}
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:underline">Chatbot</Link></li>
//             <li><Link to="/saved-queries" className="hover:underline">Saved Queries</Link></li>
//             <li><Link to="/connections" className="hover:underline">Connections</Link></li>
//           </ul>

//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-200"
//           >
//             Logout
//           </button>
//         </nav>
//       )}
//       {children}
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Chatbot from './components/Chatbot';
import SavedQueries from './components/SavedQueries';
import Visualization from './components/Visualization';
import DatasetUploadPage from './components/DatasetUploadPage';
import { DatasetProvider } from './components/DatasetContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user); // Update authentication state based on localStorage
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsAuthenticated(true);
  };

  return (
    <DatasetProvider>
      <Router>
        <AuthWrapper isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Chatbot /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/saved-queries" element={isAuthenticated ? <SavedQueries /> : <Navigate to="/login" />} />
            <Route path="/visualization" element={isAuthenticated ? <Visualization /> : <Navigate to="/login" />} />
            <Route path="/connections" element={isAuthenticated ? <DatasetUploadPage /> : <Navigate to="/login" />} />
          </Routes>
        </AuthWrapper>
      </Router>
    </DatasetProvider>
  );
};

// Component to render Navbar and Logout button
const AuthWrapper = ({ isAuthenticated, setIsAuthenticated, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login";

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <>
      {!isLoginPage && isAuthenticated && (
        <nav className="w-full p-4 bg-blue-600 text-white flex justify-between items-center">
          {/* Navigation Links - Centered */}
          <ul className="flex space-x-6 mx-auto">
            <li><Link to="/" className="hover:underline">Chatbot</Link></li>
            <li><Link to="/saved-queries" className="hover:underline">Saved Queries</Link></li>
            <li><Link to="/connections" className="hover:underline">Connections</Link></li>
          </ul>

          {/* Logout Button - Positioned at the Top Right */}
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </nav>
      )}
      {children}
    </>
  );
};

export default App;













// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Button } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Chatbot from './components/Chatbot';
// import SavedQueries from './components/SavedQueries';
// import Visualization from './components/Visualization';
// import DatasetUploadPage from './components/DatasetUploadPage';

// const App = () => {
//   const [open, setOpen] = useState(false);

//   const toggleDrawer = (open) => {
//     setOpen(open);
//   };

//   return (
//     <Router>
//       <AppBar position="sticky" color="primary">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)} aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Button color="inherit" component={Link} to="/" className="ml-auto">
//             Home
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer (Hamburger Menu) */}
//       <Drawer
//         anchor="left"
//         open={open}
//         onClose={() => toggleDrawer(false)}
//       >
//         <List>
//           <ListItem button onClick={() => toggleDrawer(false)} component={Link} to="/">
//             <ListItemText primary="Chatbot" />
//           </ListItem>
//           <ListItem button onClick={() => toggleDrawer(false)} component={Link} to="/saved-queries">
//             <ListItemText primary="Saved Queries" />
//           </ListItem>
//           <ListItem button onClick={() => toggleDrawer(false)} component={Link} to="/visualization">
//             <ListItemText primary="Visualization" />
//           </ListItem>
//           <ListItem button onClick={() => toggleDrawer(false)} component={Link} to="/upload-dataset">
//             <ListItemText primary="Upload Dataset" />
//           </ListItem>
//         </List>
//       </Drawer>

//       <Routes>
//         <Route path="/" element={<Chatbot />} />
//         <Route path="/saved-queries" element={<SavedQueries />} />
//         <Route path="/visualization" element={<Visualization />} />
//         <Route path="/visualization" element={<Visualization />} />
//         <Route path="/upload-dataset" element={<DatasetUploadPage />} /> 
//       </Routes>
//     </Router>
//   );
// };

// export default App;
