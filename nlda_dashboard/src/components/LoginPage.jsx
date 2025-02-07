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
import { auth, provider, signInWithPopup } from '../firebase'; // Import Firebase auth

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle Manual Login (Username/Password)
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

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Store user details in localStorage
      localStorage.setItem('user', JSON.stringify({ username: user.displayName, email: user.email }));
      onLogin({ username: user.displayName }); // Update authentication state
      navigate('/'); // Redirect to chatbot
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Login</h2>

        {/* Manual Login Form */}
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

        {/* OR Separator */}
        <div className="text-center text-gray-500 mb-4">OR</div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="bg-red-500 text-white p-3 rounded w-full hover:bg-red-600 transition duration-200 flex items-center justify-center"
        >
          <img 
    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
    alt="Google Logo" 
    className="w-6 h-6 mr-2 bg-white rounded-full"
  />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;


// 
//added Google sign in

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, provider, signInWithPopup } from '../firebase'; // Import Firebase auth

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Handle Manual Login
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username.trim() === '' || password.trim() === '') {
//       alert('Username and password are required.');
//       return;
//     }

//     localStorage.setItem('user', JSON.stringify({ username }));
//     onLogin({ username });
//     navigate('/'); // Redirect to chatbot
//   };

//   // Handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       localStorage.setItem('user', JSON.stringify({ username: user.displayName, email: user.email }));
//       onLogin({ username: user.displayName });
//       navigate('/'); // Redirect to chatbot
//     } catch (error) {
//       console.error('Google Sign-In Error:', error);
//     }
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

//         {/* OR Divider */}
//         <div className="flex items-center justify-center my-4">
//           <span className="text-gray-500">OR</span>
//         </div>

//         {/* Google Sign-In Button */}
//         <div className="mb-4">
//           <button
//             onClick={handleGoogleSignIn}
//             className="bg-red-500 text-white p-3 rounded w-full hover:bg-red-600 transition duration-200 flex items-center justify-center"
//           >
//             <svg
//               className="w-5 h-5 mr-2"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 48 48"
//             >
//               <path
//                 fill="#4285F4"
//                 d="M24 9.5c3.85 0 7.17 1.32 9.85 3.9l7.26-7.26C36.74 2.18 30.74 0 24 0 14.62 0 6.54 5.84 2.54 14.32l8.58 6.66C13.16 14.02 18.2 9.5 24 9.5z"
//               />
//               <path
//                 fill="#34A853"
//                 d="M46.1 24.5c0-1.5-.14-2.98-.41-4.4H24v9.3h12.9c-.57 3.14-2.38 5.84-5.02 7.64l7.58 5.88c4.42-4.12 6.94-10.2 6.94-17.42z"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M11.13 28.86c-1.64-1.22-2.92-2.94-3.62-4.86l-8.58 6.66C3.1 38.16 12.26 44 24 44c6.74 0 12.74-2.18 17.1-5.86l-7.58-5.88C30.52 34.98 27.52 36 24 36c-4.64 0-8.64-3.14-10.68-7.14z"
//               />
//               <path
//                 fill="#EA4335"
//                 d="M3.16 14.98C2.42 17.26 2 19.72 2 22.34c0 2.62.42 5.08 1.16 7.36l8.58-6.66c-.56-1.36-.88-2.84-.88-4.36 0-1.5.32-2.98.88-4.36L3.16 14.98z"
//               />
//             </svg>
//             Sign in with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
