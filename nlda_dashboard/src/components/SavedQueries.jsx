// import React, { useState, useEffect } from 'react';

// const SavedQueries = () => {
//   const [savedQueries, setSavedQueries] = useState([]);

//   useEffect(() => {
//     // Fetch saved queries from local storage
//     const queries = JSON.parse(localStorage.getItem('savedQueries')) || [];
//     setSavedQueries(queries);
//   }, []);

//   const handleDeleteQuery = (index) => {
//     // Delete query from local storage and update state
//     const updatedQueries = savedQueries.filter((_, i) => i !== index);
//     localStorage.setItem('savedQueries', JSON.stringify(updatedQueries));
//     setSavedQueries(updatedQueries);
//   };

//   return (
//     <div className="min-h-screen p-4 bg-gray-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Saved Queries</h2>
//         <div>
//           {savedQueries.length === 0 ? (
//             <p className="text-gray-500">No saved queries yet.</p>
//           ) : (
//             <ul>
//               {savedQueries.map((query, index) => (
//                 <li key={index} className="border-b py-2">
//                   <div className="flex justify-between items-center">
//                     <p className="text-gray-800">{query.query}</p> {/* Displaying the query */}
//                     <div className="flex space-x-4">
//                       <button
//                         onClick={() => handleDeleteQuery(index)} // Corrected function name
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SavedQueries;


// import React, { useState, useEffect } from 'react';

// const SavedQueries = () => {
//   const [savedQueries, setSavedQueries] = useState([]);

//   useEffect(() => {
//     // Fetch saved queries from local storage
//     const queries = JSON.parse(localStorage.getItem('savedQueries')) || [];
//     setSavedQueries(queries);
//   }, []);

//   const handleDeleteQuery = (index) => {
//     // Delete query from local storage and update state
//     const updatedQueries = savedQueries.filter((_, i) => i !== index);
//     localStorage.setItem('savedQueries', JSON.stringify(updatedQueries));
//     setSavedQueries(updatedQueries);
//   };

//   return (
//     <div className="min-h-screen p-4 bg-gray-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Saved Queries</h2>
//         <div>
//           {savedQueries.length === 0 ? (
//             <p className="text-gray-500">No saved queries yet.</p>
//           ) : (
//             <ul>
//               {savedQueries.map((query, index) => (
//                 <li key={index} className="border-b py-2">
//                   <div className="flex justify-between items-center">
//                     <div className="flex-1">
//                     <p className="text-gray-800 font-semibold">User Query: {query.userPrompt}</p> {/* Displaying the user input */}
//                       <p className="text-gray-800 font-semibold">SQL Query: {query.query}</p>
//                       <p className="text-gray-500">Dataset: {query.dataset}</p>
//                       <p className="text-gray-500">Saved on: date {query.date}</p>
//                     </div>
//                     <div className="flex space-x-4">
//                       <button
//                         onClick={() => handleDeleteQuery(index)} // Corrected function name
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SavedQueries;
// Adding Remove button

import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const SavedQueries = () => {
  const [savedQueries, setSavedQueries] = useState([]);

  useEffect(() => {
    // Fetch saved queries from localStorage
    const queries = JSON.parse(localStorage.getItem('savedQueries')) || [];
    setSavedQueries(queries);
  }, []);

  // Function to remove a query
  const handleRemoveQuery = (index) => {
    const updatedQueries = savedQueries.filter((_, i) => i !== index);
    setSavedQueries(updatedQueries);
    localStorage.setItem('savedQueries', JSON.stringify(updatedQueries));
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl min-h-[80vh]">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Saved Queries</h2>

        {/* Display saved queries */}
        {savedQueries.length === 0 ? (
          <p className="text-center text-gray-500">No saved queries yet.</p>
        ) : (
          savedQueries.map((query, index) => (
            <div key={index} className="flex justify-between items-center p-4 mb-4 border rounded bg-gray-100">
              <div>
                <h3 className="font-medium text-gray-700">Query {index + 1}</h3>
                <p><strong>User Prompt:</strong> {query.userPrompt}</p>
                <p><strong>SQL Query:</strong> {query.query}</p>
                <p><strong>Dataset/Connection:</strong> {query.dataset}</p>
                <p><strong>Date Saved:</strong> {query.date}</p>
              </div>
              <IconButton onClick={() => handleRemoveQuery(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedQueries;
