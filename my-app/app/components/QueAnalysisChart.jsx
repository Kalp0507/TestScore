"use client"

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({ correct, total}) => {
    const incorrect = total - correct;

    const data = {
        // labels: ['Correct', 'Incorrect'],
        datasets: [
            {
                label: 'Questions',
                data: [correct, incorrect],
                backgroundColor: ['#4285F4', '#E0E0E0'],
                hoverBackgroundColor: ['#357ae8', '#c6c6c6'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '75%', // Creates the donut hole
        plugins: {
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="relative w-40 h-40 m-auto">
            <Doughnut data={data} options={options} />
            {/* Center Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-4xl">🎯</p>
            </div>
        </div>
    );
};

export default QuestionAnalysis;
