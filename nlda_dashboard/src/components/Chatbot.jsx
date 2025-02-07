// import React, { useState } from 'react';
// import { useDataset } from './DatasetContext';  // Import the custom hook
// import { useNavigate } from 'react-router-dom';

// const Chatbot = () => {
//   const [input, setInput] = useState('');
//   const [generatedQuery, setGeneratedQuery] = useState('');
//   const [showAnalysisButton, setShowAnalysisButton] = useState(false);

//   const { dataset, jdbcLink } = useDataset();  // Access the dataset and jdbcLink from context
//   const navigate = useNavigate();

//   // Generate SQL query
//   const handleGenerateQuery = () => {
//     if (!dataset && !jdbcLink) {
//       alert('Please upload a dataset or provide a JDBC connection string.');
//       return;
//     }
//     if (!input) {
//       alert('Please enter a query.');
//       return;
//     }

//     let sqlQuery = `SELECT * FROM ${dataset || jdbcLink}`;
//     setGeneratedQuery(sqlQuery);

//     // Show the "Click for Analysis" button after generating the query
//     setShowAnalysisButton(true);
//   };

//   // Handle redirection to the visualization page
//   const handleClickForAnalysis = () => {
//     navigate('/Visualization');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Chatbot for Query Generation</h2>

//         {/* NLP Query Input Section */}
//         <div className="mb-4">
//           <label htmlFor="query-input" className="block text-gray-700 font-medium">Enter your Query</label>
//           <input
//             type="text"
//             id="query-input"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Ask your query..."
//           />
//         </div>

//         {/* Generate Query Button */}
//         <div className="mb-4">
//           <button
//             onClick={handleGenerateQuery}
//             className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200 ease-in-out"
//           >
//             Generate Query
//           </button>
//         </div>

//         {/* Display Generated SQL Query */}
//         {generatedQuery && (
//           <div className="mb-4 p-4 border rounded bg-gray-100">
//             <label className="block text-gray-700 font-semibold">Generated SQL Query:</label>
//             <p className="mt-2 text-gray-800 break-words">{generatedQuery}</p>
//           </div>
//         )}

//         {/* "Click for Analysis" Button */}
//         {showAnalysisButton && (
//           <div className="mb-4">
//             <button
//               onClick={handleClickForAnalysis}
//               className="bg-yellow-500 text-white p-3 rounded w-full hover:bg-yellow-600 transition duration-200 ease-in-out"
//             >
//               Click for Analysis
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chatbot;







// import React, { useState } from 'react';
// import { useDataset } from './DatasetContext';  // Import the custom hook
// import { useNavigate } from 'react-router-dom';

// const Chatbot = () => {
//   const [input, setInput] = useState('');
//   const [generatedQuery, setGeneratedQuery] = useState('');
//   const [showAnalysisButton, setShowAnalysisButton] = useState(false);

//   const { dataset, jdbcLink } = useDataset();  // Access the dataset and jdbcLink from context
//   const navigate = useNavigate();

//   // Generate SQL query
//   const handleGenerateQuery = () => {
//     if (!dataset && !jdbcLink) {
//       alert('Please upload a dataset or provide a JDBC connection string.');
//       return;
//     }
//     if (!input) {
//       alert('Please enter a query.');
//       return;
//     }

//     let sqlQuery = `SELECT * FROM ${dataset || jdbcLink}`;
//     setGeneratedQuery(sqlQuery);

//     // Show the "Click for Analysis" button after generating the query
//     setShowAnalysisButton(true);
//   };

//   // Handle redirection to the visualization page
//   const handleClickForAnalysis = () => {
//     navigate('/Visualization');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Chatbot for Query Generation</h2>

//         {/* NLP Query Input Section */}
//         <div className="mb-4">
//           <label htmlFor="query-input" className="block text-gray-700 font-medium">Enter your Query</label>
//           <input
//             type="text"
//             id="query-input"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Ask your query..."
//           />
//         </div>

//         {/* Generate Query Button */}
//         <div className="mb-4">
//           <button
//             onClick={handleGenerateQuery}
//             className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200 ease-in-out"
//           >
//             Generate Query
//           </button>
//         </div>

//         {/* Display Generated SQL Query */}
//         {generatedQuery && (
//           <div className="mb-4 p-4 border rounded bg-gray-100">
//             <label className="block text-gray-700 font-semibold">Generated SQL Query:</label>
//             <p className="mt-2 text-gray-800 break-words">{generatedQuery}</p>
//           </div>
//         )}

//         {/* "Click for Analysis" Button */}
//         {showAnalysisButton && (
//           <div className="mb-4">
//             <button
//               onClick={handleClickForAnalysis}
//               className="bg-yellow-500 text-white p-3 rounded w-full hover:bg-yellow-600 transition duration-200 ease-in-out"
//             >
//               Click for Analysis
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [dataset, setDataset] = useState(null);
//   const [jdbcLink, setJdbcLink] = useState('');
//   const [generatedQuery, setGeneratedQuery] = useState('');
//   const [showAnalysisButton, setShowAnalysisButton] = useState(false);

//   const navigate = useNavigate();

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === 'text/csv') {
//       setDataset(file.name);
//       alert(`Dataset ${file.name} uploaded successfully.`);
//     } else {
//       alert('Please upload a valid CSV file.');
//     }
//   };

//   // Generate SQL query
//   const handleGenerateQuery = () => {
//     if (!dataset && !jdbcLink) {
//       alert('Please upload a dataset or provide a JDBC connection string.');
//       return;
//     }
//     if (!input) {
//       alert('Please enter a query.');
//       return;
//     }

//     let sqlQuery = `SELECT * FROM ${dataset || jdbcLink}`;
//     setGeneratedQuery(sqlQuery);

//     // Show the "Click for Analysis" button after generating the query
//     setShowAnalysisButton(true);
//   };

//   // Copy the generated SQL query to clipboard
//   const handleCopyQuery = () => {
//     navigator.clipboard.writeText(generatedQuery);
//     alert('SQL query copied to clipboard!');
//   };

//   // Handle redirection to the visualization page
//   const handleClickForAnalysis = () => {
//     navigate('/Visualization');
//   };

//   const handleSaveQuery = () => {
//     const savedQueries = JSON.parse(localStorage.getItem('savedQueries')) || [];
//     const queryData = {
//       query: generatedQuery,
//       date: new Date().toLocaleString(), // Current timestamp for when the query was saved
//       dataset: dataset || jdbcLink, // Use either dataset or jdbcLink
//     };
//     savedQueries.push(queryData);
//     localStorage.setItem('savedQueries', JSON.stringify(savedQueries));
//     alert('Query saved successfully!');
//   };

//   const handleSaveQuery1 = () => {
//     const savedQueries = JSON.parse(localStorage.getItem('savedQueries')) || [];
//     const queryData = {
//       userPrompt: input,  // Save the user input as part of the query data
//       query: generatedQuery,
//       date: new Date().toLocaleString(),
//       dataset: dataset || jdbcLink,
//     };
//     savedQueries.push(queryData);
//     localStorage.setItem('savedQueries', JSON.stringify(savedQueries));
//     alert('Query saved successfully!');
//   };
  
  
  

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Chatbot for Query Generation</h2>

//         {/* Upload Dataset Section */}
//         <div className="mb-4">
//           <label htmlFor="dataset-upload" className="block text-gray-700 font-medium">Upload Dataset (CSV only)</label>
//           <input
//             type="file"
//             id="dataset-upload"
//             accept=".csv"  // Restrict file type to CSV
//             className="mt-2 p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleFileUpload}
//           />
//           {dataset && <p className="mt-2 text-green-500">Dataset: {dataset}</p>}
//         </div>

//         {/* JDBC Link Section */}
//         <div className="mb-4">
//           <label htmlFor="jdbc-link" className="block text-gray-700 font-medium">JDBC Link/Connection String</label>
//           <input
//             type="text"
//             id="jdbc-link"
//             value={jdbcLink}
//             onChange={(e) => setJdbcLink(e.target.value)}
//             className="mt-2 p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter JDBC connection string"
//           />
//         </div>

//         {/* NLP Query Input Section */}
//         <div className="mb-4">
//           <label htmlFor="query-input" className="block text-gray-700 font-medium">Enter your Query</label>
//           <input
//             type="text"
//             id="query-input"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Ask your query..."
//           />
//         </div>

//         {/* Generate Query Button */}
//         <div className="mb-4">
//           <button
//             onClick={handleGenerateQuery}
//             className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200 ease-in-out"
//           >
//             Generate Query
//           </button>
//         </div>

//         {/* Display Generated SQL Query */}
//         {generatedQuery && (
//           <div className="mb-4 p-4 border rounded bg-gray-100">
//             <label className="block text-gray-700 font-semibold">Generated SQL Query:</label>
//             <p className="mt-2 text-gray-800 break-words">{generatedQuery}</p>
//             <button
//               onClick={handleCopyQuery}
//               className="mt-2 bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition duration-200 ease-in-out"
//             >
//               Copy Query
//             </button>
//             {/* Save Query Button */}
//             <button
//               onClick={handleSaveQuery}
//               className="mt-2 bg-purple-500 text-white p-2 rounded w-full hover:bg-purple-600 transition duration-200 ease-in-out"
//             >
//               Save Query
//             </button>
//           </div>
//         )}

//         {/* "Click for Analysis" Button */}
//         {showAnalysisButton && (
//           <div className="mb-4">
//             <button
//               onClick={handleClickForAnalysis}
//               className="bg-yellow-500 text-white p-3 rounded w-full hover:bg-yellow-600 transition duration-200 ease-in-out"
//             >
//               Click for Analysis
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [dataset, setDataset] = useState(null);
  const [jdbcLink, setJdbcLink] = useState('');
  const [generatedQuery, setGeneratedQuery] = useState('');
  const [showAnalysisButton, setShowAnalysisButton] = useState(false);

  const navigate = useNavigate();

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'text/csv') {
      setDataset(file.name);
      alert(`Dataset ${file.name} uploaded successfully.`);
    } else {
      alert('Please upload a valid CSV file.');
    }
  };

  // Generate SQL query
  const handleGenerateQuery = () => {
    if (!dataset && !jdbcLink) {
      alert('Please upload a dataset or provide a JDBC connection string.');
      return;
    }
    if (!input) {
      alert('Please enter a query.');
      return;
    }

    let sqlQuery = `SELECT * FROM ${dataset || jdbcLink}`;
    setGeneratedQuery(sqlQuery);

    // Show the "Click for Analysis" button after generating the query
    setShowAnalysisButton(true);
  };

  // Copy the generated SQL query to clipboard
  const handleCopyQuery = () => {
    navigator.clipboard.writeText(generatedQuery);
    alert('SQL query copied to clipboard!');
  };

  // Handle redirection to the visualization page
  const handleClickForAnalysis = () => {
    navigate('/Visualization');
  };

  // New function to save the user prompt and generated query
  const handleSaveUserPrompt = () => {
    const savedQueries = JSON.parse(localStorage.getItem('savedQueries')) || [];
    const queryData = {
      userPrompt: input,  // Save the user input (prompt)
      query: generatedQuery,
      date: new Date().toLocaleString(),
      dataset: dataset || jdbcLink,  // Save the dataset or jdbcLink
    };
    savedQueries.push(queryData);
    localStorage.setItem('savedQueries', JSON.stringify(savedQueries));
    alert('Query saved successfully!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Chatbot for Query Generation</h2>

        {/* Upload Dataset Section */}
        <div className="mb-4">
          <label htmlFor="dataset-upload" className="block text-gray-700 font-medium">Upload Dataset (CSV only)</label>
          <input
            type="file"
            id="dataset-upload"
            accept=".csv"  // Restrict file type to CSV
            className="mt-2 p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFileUpload}
          />
          {dataset && <p className="mt-2 text-green-500">Dataset: {dataset}</p>}
        </div>

        {/* JDBC Link Section */}
        <div className="mb-4">
          <label htmlFor="jdbc-link" className="block text-gray-700 font-medium">JDBC Link/Connection String</label>
          <input
            type="text"
            id="jdbc-link"
            value={jdbcLink}
            onChange={(e) => setJdbcLink(e.target.value)}
            className="mt-2 p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter JDBC connection string"
          />
        </div>

        {/* NLP Query Input Section */}
        <div className="mb-4">
          <label htmlFor="query-input" className="block text-gray-700 font-medium">Enter your Query</label>
          <input
            type="text"
            id="query-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask your query..."
          />
        </div>

        {/* Generate Query Button */}
        <div className="mb-4">
          <button
            onClick={handleGenerateQuery}
            className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            Generate Query
          </button>
        </div>

        {/* Display Generated SQL Query */}
        {generatedQuery && (
          <div className="mb-4 p-4 border rounded bg-gray-100">
            <label className="block text-gray-700 font-semibold">Generated SQL Query:</label>
            <p className="mt-2 text-gray-800 break-words">{generatedQuery}</p>
            <button
              onClick={handleCopyQuery}
              className="mt-2 bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition duration-200 ease-in-out"
            >
              Copy Query
            </button>
            {/* Save Query Button */}
            <button
              onClick={handleSaveUserPrompt}  // Updated function name
              className="mt-2 bg-purple-500 text-white p-2 rounded w-full hover:bg-purple-600 transition duration-200 ease-in-out"
            >
              Save Query
            </button>
          </div>
        )}

        {/* "Click for Analysis" Button */}
        {showAnalysisButton && (
          <div className="mb-4">
            <button
              onClick={handleClickForAnalysis}
              className="bg-yellow-500 text-white p-3 rounded w-full hover:bg-yellow-600 transition duration-200 ease-in-out"
            >
              Click for Analysis
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
