
// import React from 'react';
// import { Line, Bar, Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register the components of Chart.js
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// const Visualization = () => {
//   // Dummy Data for Visualization
//   const timeSeriesData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Sales Trends',
//         data: [300, 400, 350, 500, 700, 800],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: true,
//       },
//     ],
//   };

//   const barChartData = {
//     labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
//     datasets: [
//       {
//         label: 'Sales Comparison',
//         data: [50, 60, 80, 40, 70],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const scatterChartData = {
//     datasets: [
//       {
//         label: 'Sales vs Expected Demand',
//         data: [
//           { x: 30, y: 200 },
//           { x: 50, y: 250 },
//           { x: 60, y: 300 },
//           { x: 80, y: 350 },
//           { x: 100, y: 400 },
//         ],
//         backgroundColor: 'rgba(255, 99, 132, 0.6)',
//       },
//     ],
//   };

//   // Dummy Table Data
//   const tableData = [
//     { product: 'Product A', sales: 500, category: 'Electronics' },
//     { product: 'Product B', sales: 600, category: 'Apparel' },
//     { product: 'Product C', sales: 700, category: 'Grocery' },
//     { product: 'Product D', sales: 800, category: 'Home' },
//   ];

//   return (
//     <div className="visualization-container px-6 py-12">
//       {/* Grid for Sales Trends & Table */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Time Series Chart */}
//         <div className="chart-container bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-600">Sales Trends Over Time</h2>
//           <Line data={timeSeriesData} />
//         </div>

//         {/* Result Table */}
//         <div className="chart-container overflow-x-auto bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-600">Sales Data Table</h2>
//           <table className="min-w-full bg-white border border-gray-300 rounded-lg">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="py-3 px-4 border text-left">Product</th>
//                 <th className="py-3 px-4 border text-left">Sales</th>
//                 <th className="py-3 px-4 border text-left">Category</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((row, index) => (
//                 <tr key={index} className="border hover:bg-gray-50">
//                   <td className="py-2 px-4 border">{row.product}</td>
//                   <td className="py-2 px-4 border">{row.sales}</td>
//                   <td className="py-2 px-4 border">{row.category}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Grid Layout for Bar and Scatter Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//         {/* Bar Chart */}
//         <div className="chart-container bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-600">Product Sales Comparison</h2>
//           <Bar data={barChartData} />
//         </div>

//         {/* Scatter Plot */}
//         <div className="chart-container bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-600">Sales vs Expected Demand</h2>
//           <Scatter data={scatterChartData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Visualization;





import React from 'react';
import { Line, Bar, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components of Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Visualization = () => {
  // Dummy Data for Visualization
  const timeSeriesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Trends',
        data: [300, 400, 350, 500, 700, 800],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
      {
        label: 'Sales Comparison',
        data: [50, 60, 80, 40, 70],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const scatterChartData = {
    datasets: [
      {
        label: 'Sales vs Expected Demand',
        data: [
          { x: 30, y: 200 },
          { x: 50, y: 250 },
          { x: 60, y: 300 },
          { x: 80, y: 350 },
          { x: 100, y: 400 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const tableData = [
    { product: 'Product A', sales: 500, category: 'Electronics' },
    { product: 'Product B', sales: 600, category: 'Apparel' },
    { product: 'Product C', sales: 700, category: 'Grocery' },
    { product: 'Product D', sales: 800, category: 'Home' },
  ];

  // Sales Growth and Insights
  const salesGrowth = ((timeSeriesData.datasets[0].data[5] - timeSeriesData.datasets[0].data[0]) / timeSeriesData.datasets[0].data[0]) * 100;
  const highestMonthIndex = timeSeriesData.datasets[0].data.indexOf(Math.max(...timeSeriesData.datasets[0].data));
  const highestMonth = timeSeriesData.labels[highestMonthIndex];
  
  const highestSellingProduct = tableData.reduce((max, row) => (row.sales > max.sales ? row : max), tableData[0]);
  const lowestSellingProduct = tableData.reduce((min, row) => (row.sales < min.sales ? row : min), tableData[0]);

  const maxSales = Math.max(...barChartData.datasets[0].data);
  const minSales = Math.min(...barChartData.datasets[0].data);
  const bestSellingProductIndex = barChartData.datasets[0].data.indexOf(maxSales);
  const worstSellingProductIndex = barChartData.datasets[0].data.indexOf(minSales);
  const bestSellingProduct = barChartData.labels[bestSellingProductIndex];
  const worstSellingProduct = barChartData.labels[worstSellingProductIndex];

  const outlierPoints = scatterChartData.datasets[0].data.filter((point) => point.y > 350); // Example threshold for high sales

  return (
    <div className="visualization-container px-6 py-12">

      {/* Visualizations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="chart-container bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Sales Trends Over Time</h2>
          <Line data={timeSeriesData} />
        </div>

        <div className="chart-container overflow-x-auto bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Sales Data Table</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border text-left">Product</th>
                <th className="py-3 px-4 border text-left">Sales</th>
                <th className="py-3 px-4 border text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border hover:bg-gray-50">
                  <td className="py-2 px-4 border">{row.product}</td>
                  <td className="py-2 px-4 border">{row.sales}</td>
                  <td className="py-2 px-4 border">{row.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="chart-container bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Product Sales Comparison</h2>
          <Bar data={barChartData} />
        </div>

        <div className="chart-container bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Sales vs Expected Demand</h2>
          <Scatter data={scatterChartData} />
        </div>
      </div>

      {/* Insights */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4
        ">Key Insights</h2>
        <ul className="list-disc pl-6">
          <li><strong>Sales Growth:</strong> Sales have grown by {salesGrowth.toFixed(2)}% from January to June, with the highest sales occurring in {highestMonth}.</li>
          <li><strong>Best and Worst Selling Products:</strong> The highest-selling product is {highestSellingProduct.product} with {highestSellingProduct.sales} units sold, while the lowest-selling product is {lowestSellingProduct.product} with {lowestSellingProduct.sales} units sold.</li>
          <li><strong>Top and Bottom Performing Products:</strong> The best-performing product is {bestSellingProduct}, while the worst-performing product is {worstSellingProduct}.</li>
          <li><strong>Sales Anomalies:</strong> There are {outlierPoints.length} points where actual sales exceeded expected demand, indicating potential opportunities for restocking or promotions.</li>
        </ul>
      </div>
    </div>
  );
};

export default Visualization;