//Added functionality to the query history
import React, { useState, useEffect } from "react";
import { useDataset } from "./DatasetContext";
import { useNavigate } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [queryHistory, setQueryHistory] = useState([]);
  const { dataset, jdbcLink } = useDataset();
  const navigate = useNavigate();

  useEffect(() => {
    const savedQueries = JSON.parse(localStorage.getItem("savedQueries")) || [];
    setQueryHistory(savedQueries);
  }, []);

  const handleGenerateQuery = () => {
    if (!dataset && !jdbcLink) {
      alert("Please upload a dataset or provide a JDBC connection string.");
      return;
    }

    if (!input) {
      alert("Please enter a query.");
      return;
    }

    let sqlQuery = `SELECT * FROM ${dataset || jdbcLink}`;
    const newMessage = { user: true, text: input };
    const responseMessage = { user: false, text: sqlQuery };

    setMessages([...messages, newMessage, responseMessage]);
    setQueryHistory([...queryHistory, { userPrompt: input, query: sqlQuery }]);

    localStorage.setItem(
      "savedQueries",
      JSON.stringify([...queryHistory, { userPrompt: input, query: sqlQuery }])
    );
    setInput("");
  };

  const handleClickForAnalysis = (query) => {
    localStorage.setItem("selectedQuery", query);
    navigate("/visualization");
  };

  const handleHistoryClick = (query) => {
    setMessages([...messages, { user: true, text: query.userPrompt }, { user: false, text: query.query }]);
  };

  return (
    <div className="flex h-screen bg-white text-gray-900">
      {/* Sidebar - 30% width */}
      <div className="w-1/3 bg-gray-100 p-4 border-r overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Query History</h2>
        <div className="space-y-2">
          {queryHistory.map((query, index) => (
            <div
              key={index}
              className="p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
              onClick={() => handleHistoryClick(query)}
            >
              <p className="text-sm font-medium">{query.userPrompt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area - 70% width */}
      <div className="w-2/3 flex flex-col h-full">
        {/* Chat Header */}
        <div className="p-4 bg-gray-300 text-center text-lg font-semibold text-gray-700 border-b">
          Chatbot for Query Generation
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-fit ${
                msg.user
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {msg.text}
              {!msg.user && (
                <button
                  onClick={() => handleClickForAnalysis(msg.text)}
                  className="ml-4 bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600"
                >
                  Analyze
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="p-4 border-t bg-white flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your query..."
          />
          <button
            onClick={handleGenerateQuery}
            className="ml-3 bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition"
          >
            <FaPaperPlane className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;



//Edited the color
// import React, { useState, useEffect } from "react";
// import { useDataset } from "./DatasetContext";
// import { useNavigate } from "react-router-dom";
// import { FaPaperPlane } from "react-icons/fa";

// const Chatbot = () => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [queryHistory, setQueryHistory] = useState([]);
//   const { dataset, jdbcLink } = useDataset();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedQueries = JSON.parse(localStorage.getItem("savedQueries")) || [];
//     setQueryHistory(savedQueries);
//   }, []);

//   const handleGenerateQuery = () => {
//     if (!dataset && !jdbcLink) {
//       alert("Please upload a dataset or provide a JDBC connection string.");
//       return;
//     }

//     if (!input) {
//       alert("Please enter a query.");
//       return;
//     }

//     let sqlQuery = `SELECT * FROM ${dataset || jdbcLink}`;
//     const newMessage = { user: true, text: input };
//     const responseMessage = { user: false, text: sqlQuery };

//     setMessages([...messages, newMessage, responseMessage]);
//     setQueryHistory([...queryHistory, { userPrompt: input, query: sqlQuery }]);

//     localStorage.setItem(
//       "savedQueries",
//       JSON.stringify([...queryHistory, { userPrompt: input, query: sqlQuery }])
//     );
//     setInput("");
//   };

//   const handleClickForAnalysis = (query) => {
//     localStorage.setItem("selectedQuery", query);
//     navigate("/visualization");
//   };

//   return (
//     <div className="flex h-screen bg-white text-gray-900">
//       {/* Sidebar - 30% width */}
//       <div className="w-1/3 bg-gray-100 p-4 border-r overflow-y-auto">
//         <h2 className="text-lg font-semibold mb-4">Query History</h2>
//         <div className="space-y-2">
//           {queryHistory.map((query, index) => (
//             <div
//               key={index}
//               className="p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
//             >
//               <p className="text-sm font-medium">{query.userPrompt}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Chat Area - 70% width */}
//       <div className="w-2/3 flex flex-col h-full">
//         {/* Chat Header */}
//         <div className="p-4 bg-gray-300 text-center text-lg font-semibold text-gray-700 border-b">
//           Chatbot for Query Generation
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`p-3 rounded-lg max-w-fit ${
//                 msg.user
//                   ? "bg-blue-500 text-white self-end"
//                   : "bg-gray-300 text-black self-start"
//               }`}
//             >
//               {msg.text}
//               {!msg.user && (
//                 <button
//                   onClick={() => handleClickForAnalysis(msg.text)}
//                   className="ml-4 bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600"
//                 >
//                   Analyze
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Input Section */}
//         <div className="p-4 border-t bg-white flex items-center">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="flex-1 p-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Type your query..."
//           />
//           <button
//             onClick={handleGenerateQuery}
//             className="ml-3 bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition"
//           >
//             <FaPaperPlane className="text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



// import React, { useState } from "react";
// import { useDataset } from "./DatasetContext";
// import { useNavigate } from "react-router-dom";
// import { FaPaperPlane } from "react-icons/fa";

// const Chatbot = () => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [generatedQuery, setGeneratedQuery] = useState("");
//   const [showAnalysisButton, setShowAnalysisButton] = useState(false);
//   const { dataset, jdbcLink } = useDataset();
//   const navigate = useNavigate();

//   const handleGenerateQuery = () => {
//     if (!dataset && !jdbcLink) {
//       alert("Please upload a dataset or provide a JDBC connection string.");
//       return;
//     }

//     if (!input) {
//       alert("Please enter a query.");
//       return;
//     }

//     let sqlQuery = `SELECT * FROM ${dataset || jdbcLink}`;
//     setGeneratedQuery(sqlQuery);
//     setShowAnalysisButton(true);

//     setMessages([...messages, { user: true, text: input }, { user: false, text: sqlQuery }]);

//     const savedQueries = JSON.parse(localStorage.getItem("savedQueries")) || [];
//     const newQuery = {
//       userPrompt: input,
//       query: sqlQuery,
//       dataset: dataset || jdbcLink,
//       date: new Date().toLocaleString(),
//     };
//     savedQueries.push(newQuery);
//     localStorage.setItem("savedQueries", JSON.stringify(savedQueries));
//     setInput("");
//   };

//   const handleClickForAnalysis = () => {
//     navigate("/visualization");
//   };

//   return (
//     <div className="flex flex-col h-screen bg-white text-gray-900">
//       {/* Chat Header */}
//       <div className="p-4 bg-blue-600 text-center text-lg font-semibold text-white border-b">
//         Chatbot for Query Generation
//       </div>
      
//       {/* Chat Messages Container */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-3 rounded-lg max-w-2xl ${
//               msg.user ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black mr-auto"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>
      
//       {/* Display Generated SQL Query */}
//       {generatedQuery && (
//         <div className="p-4 bg-gray-100 border-t">
//           <label className="block font-semibold text-gray-700">Generated SQL Query:</label>
//           <p className="mt-2 break-words text-gray-800">{generatedQuery}</p>
//         </div>
//       )}

//       {/* Click for Analysis Button */}
//       {showAnalysisButton && (
//         <div className="p-4 bg-gray-100">
//           <button
//             onClick={handleClickForAnalysis}
//             className="bg-yellow-500 text-white p-3 rounded-lg w-full hover:bg-yellow-600 transition"
//           >
//             Click for Analysis
//           </button>
//         </div>
//       )}
      
//       {/* Input Section */}
//       <div className="p-4 border-t bg-white flex items-center">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 p-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Type your query..."
//         />
//         <button
//           onClick={handleGenerateQuery}
//           className="ml-3 bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition"
//         >
//           <FaPaperPlane className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



// import React, { useState } from "react";
// import { useDataset } from "./DatasetContext";
// import { useNavigate } from "react-router-dom";
// import { FaPaperPlane } from "react-icons/fa";

// const Chatbot = () => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const { dataset, jdbcLink } = useDataset();
//   const navigate = useNavigate();

//   const handleGenerateQuery = () => {
//     if (!dataset && !jdbcLink) {
//       alert("Please upload a dataset or provide a JDBC connection string.");
//       return;
//     }

//     if (!input) {
//       alert("Please enter a query.");
//       return;
//     }

//     let sqlQuery = `SELECT * FROM ${dataset || jdbcLink}`;
//     setMessages([...messages, { user: true, text: input }, { user: false, text: sqlQuery }]);

//     // Save the query to localStorage
//     const savedQueries = JSON.parse(localStorage.getItem("savedQueries")) || [];
//     const newQuery = {
//       userPrompt: input,
//       query: sqlQuery,
//       dataset: dataset || jdbcLink,
//       date: new Date().toLocaleString(),
//     };
//     savedQueries.push(newQuery);
//     localStorage.setItem("savedQueries", JSON.stringify(savedQueries));
//     setInput("");
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-900 text-white">
//       {/* Chat Header */}
//       <div className="p-4 bg-gray-800 text-center text-lg font-semibold border-b border-gray-700">
//         Chatbot for Query Generation
//       </div>
      
//       {/* Chat Messages Container */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-3 rounded-lg max-w-2xl ${
//               msg.user ? "bg-blue-600 ml-auto" : "bg-gray-700 mr-auto"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>
      
//       {/* Input Section */}
//       <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Type your query..."
//         />
//         <button
//           onClick={handleGenerateQuery}
//           className="ml-3 bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition"
//         >
//           <FaPaperPlane className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

// import React, { useState } from 'react';
// import { useDataset } from './DatasetContext';
// import { useNavigate } from 'react-router-dom';

// const Chatbot = () => {
//   const [input, setInput] = useState('');
//   const [generatedQuery, setGeneratedQuery] = useState('');
//   const [showAnalysisButton, setShowAnalysisButton] = useState(false);

//   const { dataset, jdbcLink } = useDataset();
//   const navigate = useNavigate();

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
//     setShowAnalysisButton(true);
  
//     // Save the query to localStorage
//     const savedQueries = JSON.parse(localStorage.getItem('savedQueries')) || [];
//     const newQuery = {
//       userPrompt: input,
//       query: sqlQuery,
//       dataset: dataset || jdbcLink,
//       date: new Date().toLocaleString(),
//     };
  
//     savedQueries.push(newQuery);
//     localStorage.setItem('savedQueries', JSON.stringify(savedQueries));
//   };
  

//   // Handle redirection to the visualization page
//   const handleClickForAnalysis = () => {
//     navigate('/visualization');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
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
// import { useDataset } from './DatasetContext';
// import { useNavigate } from 'react-router-dom';

// const Chatbot = () => {
//   const [input, setInput] = useState('');
//   const [generatedQuery, setGeneratedQuery] = useState('');
//   const [showAnalysisButton, setShowAnalysisButton] = useState(false);

//   const { dataset, jdbcLink } = useDataset();
//   const navigate = useNavigate();

//   // Function to handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem('user');  // Remove user data
//     navigate('/login');  // Redirect to login page
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
//     setShowAnalysisButton(true);
//   };

//   // Handle redirection to the visualization page
//   const handleClickForAnalysis = () => {
//     navigate('/visualization');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//       {/* Logout Button */}
//       <div className="w-full max-w-xl flex justify-end mb-4">
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
//         >
//           Logout
//         </button>
//       </div>

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

//   // New function to save the user prompt and generated query
//   const handleSaveUserPrompt = () => {
//     const savedQueries = JSON.parse(localStorage.getItem('savedQueries')) || [];
//     const queryData = {
//       userPrompt: input,  // Save the user input (prompt)
//       query: generatedQuery,
//       date: new Date().toLocaleString(),
//       dataset: dataset || jdbcLink,  // Save the dataset or jdbcLink
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
//               onClick={handleSaveUserPrompt}  // Updated function name
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
