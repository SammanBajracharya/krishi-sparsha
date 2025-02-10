import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components required for the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Mock data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'], // months
  datasets: [
    {
      label: 'Sales',
      data: [50, 80, 100, 200, 150, 250], // number of sales
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
      tension: 0.4,
    },
    {
      label: 'Revenue',
      data: [500, 800, 1000, 2000, 1500, 2500], // revenue in dollars
      borderColor: 'rgba(255,99,132,1)',
      fill: false,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Sales vs Revenue',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
};

const SalesRevenueChart: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sales vs Revenue</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesRevenueChart;
