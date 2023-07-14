import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface Props {
    diffs: Number[];
  }

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Difference Between Primes',
        },
    },
};

const labels:Number[] = [];
for (let i=0; i<1000; i++){
    labels.push(i)
}

export function DiffsAreaChart(props:Props) {

    const data = {
        labels,
        datasets: [
            {
                fill: false,
                label: 'Difference Between Primes',
                data: props.diffs,
                borderColor: 'rgb(9, 121, 105)',
                borderWidth: 1,
                pointBorderWidth: 3
                      },
        ],
    };
    
    return <Line options={options} data={data} />;
}
