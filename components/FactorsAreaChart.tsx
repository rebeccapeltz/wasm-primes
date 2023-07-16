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
    factors: Number[];
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
            text: 'Number of Prime Factors for 1st 10,000,000 Integers',
        },
    },
};

const labels:Number[] = [];
for (let i=1; i<=29; i++){
    labels.push(i)
}

export function FactorsAreaChart(props:Props) {

    const data = {
        labels,
        datasets: [
            {
                fill: false,
                label: '# of Prime Factors',
                data: props.factors,
                borderColor: 'rgb(138,43,226)',
                backgroundColor: 'rgb(138,43,226)',
                borderWidth: 1,
                pointBorderWidth: 3
                      },
        ],
    };
    
    return <Line options={options} data={data} />;
}
