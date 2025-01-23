"use client"

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, annotationPlugin);

const PercentileGraph = ({ dynamicScore = 30, fixedScore = 72 }) => {
    const mockData = [5, 10, 15, 30, 40, 50, 30, 15, 10, 5, 2]; // Example with more points
    const labels = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']; // More points

    const data = {
        labels: labels, // X-axis labels
        datasets: [
            {
                label: 'Percentile Distribution',
                data: mockData,
                borderColor: '#ddb1fa',
                borderWidth: 2,
                pointBackgroundColor: 'white',
                pointBorderColor: '#ddb1fa',
                pointRadius: 4, // Size of the dots
                pointHoverRadius: 6,
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hides the legend
            },
            tooltip: {
                callbacks: {
                    title: (context) => `${context[0].label}`,
                    label: (context) => `Number of Students: ${context.raw}`,
                },
                displayColors: false,
                backgroundColor: 'white',
                borderColor: '#ddb1fa',
                borderWidth: 1,
                bodyColor: '#ddb1fa',
                titleColor: 'black',
                titleFont: {weight: 'bold',size:'20'},
                bodyFont: {weight: 'bold',size:'16'},
                padding: 12,

            },
            annotation: {
                annotations: {
                    dynamicScoreLine: {
                        type: 'line',
                        xMin: (dynamicScore / 10), // Dynamic position on x-axis (scaled to index)
                        xMax: (dynamicScore / 10),
                        borderColor: '#ddb1fa',
                        borderWidth: 2,
                        label: {
                            content: `Your Percentile: ${dynamicScore}`,
                            enabled: true,
                            position: 'start',
                            backgroundColor: 'rgba(255, 99, 132, 0.8)',
                            color: 'white',
                            font: {
                                size: 12,
                            },
                        },
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Percentile',
                    font: { size: 14 },
                },
                ticks: {
                    callback: function (value, index) {
                        // Show only specific labels
                        return ['0', '25', '50', '75', '100'].includes(this.getLabelForValue(value))
                            ? this.getLabelForValue(value)
                            : '';
                    }
                },
            },
            y: {
                display: false, // Hide y-axis
            },
        },
        elements: {
            line: {
                tension: 0.4, // Smooth curve
            },
        },
    };

    return (
        <div className='w-full m-auto max-w-[600px]'>
            <Line data={data} options={options} />
        </div>
    );
};

export default PercentileGraph;
