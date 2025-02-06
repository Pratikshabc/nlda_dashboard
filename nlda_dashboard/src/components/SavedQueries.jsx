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


import React, { useState, useEffect } from 'react';

const SavedQueries = () => {
  const [savedQueries, setSavedQueries] = useState([]);

  useEffect(() => {
    // Fetch saved queries from local storage
    const queries = JSON.parse(localStorage.getItem('savedQueries')) || [];
    setSavedQueries(queries);
  }, []);

  const handleDeleteQuery = (index) => {
    // Delete query from local storage and update state
    const updatedQueries = savedQueries.filter((_, i) => i !== index);
    localStorage.setItem('savedQueries', JSON.stringify(updatedQueries));
    setSavedQueries(updatedQueries);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Saved Queries</h2>
        <div>
          {savedQueries.length === 0 ? (
            <p className="text-gray-500">No saved queries yet.</p>
          ) : (
            <ul>
              {savedQueries.map((query, index) => (
                <li key={index} className="border-b py-2">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-gray-800 font-semibold">{query.query}</p>
                      <p className="text-gray-500">Dataset: {query.dataset}</p>
                      <p className="text-gray-500">Saved on: {query.date}</p>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleDeleteQuery(index)} // Corrected function name
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedQueries;
