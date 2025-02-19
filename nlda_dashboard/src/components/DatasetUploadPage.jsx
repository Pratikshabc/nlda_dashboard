// import React, { useState } from 'react';

// const DatasetUploadPage = () => {
//   const [dataset, setDataset] = useState('');
//   const [jdbcLink, setJdbcLink] = useState('');

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

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Dataset Upload and JDBC Connection</h2>

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
//       </div>
//     </div>
//   );
// };

// export default DatasetUploadPage;


// import React from 'react';
// import { useDataset } from './DatasetContext';  // Import the custom hook

// const DatasetUploadPage = () => {
//   const { setDataset, setJdbcLink } = useDataset();  // Access the context methods

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === 'text/csv') {
//       setDataset(file.name);  // Update the dataset context
//       alert(`Dataset ${file.name} uploaded successfully.`);
//     } else {
//       alert('Please upload a valid CSV file.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Dataset Upload and JDBC Connection</h2>

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
//         </div>

//         {/* JDBC Link Section */}
//         <div className="mb-4">
//           <label htmlFor="jdbc-link" className="block text-gray-700 font-medium">JDBC Link/Connection String</label>
//           <input
//             type="text"
//             id="jdbc-link"
//             onChange={(e) => setJdbcLink(e.target.value)}  // Update JDBC link in context
//             className="mt-2 p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter JDBC connection string"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DatasetUploadPage;

import React, { useState } from "react";
import Papa from "papaparse";
import { useDataset } from "./DatasetContext"; // Import the custom hook

const DatasetUploadPage = () => {
  const { setDataset, setJdbcLink } = useDataset(); // Access the context methods
  const [tableData, setTableData] = useState([]); // State to store parsed CSV data

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      setDataset(file.name); // Update the dataset context

      const reader = new FileReader();
      reader.onload = ({ target }) => {
        Papa.parse(target.result, {
          complete: (result) => {
            const data = result.data.slice(0, 10); // Extract top 10 rows
            setTableData(data);
          },
          header: true, // Treat first row as headers
          skipEmptyLines: true,
        });
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Dataset Upload and JDBC Connection
        </h2>

        {/* Upload Dataset Section */}
        <div className="mb-4">
          <label htmlFor="dataset-upload" className="block text-gray-700 font-medium">
            Upload Dataset (CSV only)
          </label>
          <input
            type="file"
            id="dataset-upload"
            accept=".csv"
            className="mt-2 p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFileUpload}
          />
        </div>

        {/* JDBC Link Section */}
        <div className="mb-4">
          <label htmlFor="jdbc-link" className="block text-gray-700 font-medium">
            JDBC Link/Connection String
          </label>
          <input
            type="text"
            id="jdbc-link"
            onChange={(e) => setJdbcLink(e.target.value)}
            className="mt-2 p-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter JDBC connection string"
          />
        </div>

        {/* Display Table if Data Exists */}
        {tableData.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Top 10 Rows Preview:</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    {Object.keys(tableData[0]).map((key) => (
                      <th key={key} className="border p-2 text-left">{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border">
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex} className="border p-2">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatasetUploadPage;