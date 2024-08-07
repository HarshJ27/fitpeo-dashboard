import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Activity = () => {
    const data = {
        labels: ['5', '9', '11', '13', '15', '16', '19', '21', '23', '25', '27' , '29' , '31' , '33' , '36' ],
        datasets: [
            {
                data: [12000, 4000, 800, 9500, 3200, 13000, 11000, 9000, 2000 ,11000 ,800, 9500, 3200, 13000, 11000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                borderRadius: { topLeft: 10, topRight: 10 }, // rounded top corners
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: false, // Disable legend
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: '#ffffff' // x-axis label color
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // x-axis grid line color
                }
            },
            y: {
                stacked: true,
                ticks: {
                    callback: (value) => `${value / 1000}k`, // format y-axis labels to show in 'k'
                    color: '#ffffff', // y-axis label color
                    stepSize: 5000, // step size for y-axis
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // y-axis grid line color
                },
                max: 15000, // Ensure the y-axis goes up to 15k
            },
        },
    };

    return (
        <div className="bg-gray-800 mt-8 p-4 rounded-lg flex-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Activity</h3>
            <div className="h-[200px] w-full  overflow-hidden rounded-lg">
                <div className='h-full ' >
                <Bar data={data} options={options} />
                </div>
                
            </div>
        </div>
    );
};

export default Activity;
