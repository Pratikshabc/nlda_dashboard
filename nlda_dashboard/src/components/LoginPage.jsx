// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username.trim() === '' || password.trim() === '') {
//       alert('Username and password are required.');
//       return;
//     }

//     localStorage.setItem('user', JSON.stringify({ username }));
//     onLogin({ username }); // Update authentication state
//     navigate('/'); // Redirect to chatbot after login
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="mt-2 p-2 border rounded w-full text-gray-800"
//               placeholder="Enter your username"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-2 p-2 border rounded w-full text-gray-800"
//               placeholder="Enter your password"
//             />
//           </div>

//           <div className="mb-4">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required.');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ username }));
    onLogin({ username }); // Update authentication state
    navigate('/'); // Redirect to chatbot after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 p-2 border rounded w-full text-gray-800"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-2 border rounded w-full text-gray-800"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
