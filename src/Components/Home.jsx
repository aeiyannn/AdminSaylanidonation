import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function Home() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novenber', 'December'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Donation',
        data: 400,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'help Request',
        data: [5000, 300, 500, 5444, 777, 6544, 45666, 754,],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



  return (
    <>
      <div style={{ width: "100%" }} className="flex grid-cols-3">
        <div className=" m-2  w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-center items-center">
            <h5 className="text-xl font-bold leading-none text-blue-900 dark:text-blue-950 pe-1 mb-4 font-mono">Total Users Reg</h5>
          </div>
          <div className="flex justify-between mb-3 h-40">
            <CircularProgressbar value={50} text={`50%`} />;
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <div className="grid grid-cols-2 gap-3 mb-2">
              <dl className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">23</dt>
                <dd className="text-teal-600 dark:text-teal-300 text-sm font-medium">Active</dd>
              </dl>
              <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">12</dt>
                <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium">Block</dd>
              </dl>
            </div>
          </div>

        </div>
        <div className=" m-2 w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-center items-center">
            <h5 className="text-xl font-bold leading-none text-blue-900 dark:text-blue-950 pe-1 mb-4 font-mono">Total Donation Request</h5>
          </div>
          <div className="flex justify-between mb-3 h-40">
            <CircularProgressbar value={50} text={`50%`} />;
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <div className="grid grid-cols-3 gap-3 mb-2">
              <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">12</dt>
                <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium">Reject</dd>
              </dl>
              <dl className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">23</dt>
                <dd className="text-teal-600 dark:text-teal-300 text-sm font-medium">Pending</dd>
              </dl>
              <dl className="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                <dt className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">64</dt>
                <dd className="text-blue-600 dark:text-blue-300 text-sm font-medium">Approved</dd>
              </dl>
            </div>
          </div>

        </div>
        <div className=" m-2  w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-center items-center">
            <h5 className="text-xl font-bold leading-none text-blue-900 dark:text-blue-950 pe-1 mb-4 font-mono">Total Help Request</h5>
          </div>
          <div className="flex justify-between mb-3 h-40">
            <CircularProgressbar value={50} text={`50%`} />;
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <div className="grid grid-cols-3 gap-3 mb-2">
              <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">12</dt>
                <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium">Reject</dd>
              </dl>
              <dl className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">23</dt>
                <dd className="text-teal-600 dark:text-teal-300 text-sm font-medium">Pending</dd>
              </dl>
              <dl className="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                <dt className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">64</dt>
                <dd className="text-blue-600 dark:text-blue-300 text-sm font-medium">Approved</dd>
              </dl>
            </div>
          </div>

        </div>
      </div>
      <div style={{ width: "100%" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
