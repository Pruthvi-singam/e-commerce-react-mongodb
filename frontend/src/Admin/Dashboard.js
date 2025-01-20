import React from 'react';
import axios from "axios";
import { useOffer } from '../contexts/OfferContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const AdminDashBoard = () => {
    const [product, setProduct] = React.useState({});
    const [currentMonthIndex, setCurrentMonthIndex] = React.useState(new Date().getMonth()); // Track current month (0-11)
    const [salesData, setSalesData] = React.useState(null); // Store the sales data for the current month
    const [allProducts, setAllProducts] = React.useState([]);
    const {toggleOffer, Offer} = useOffer()

    React.useEffect(() => {
        // Fetch all products
        axios.get("http://localhost:5000/api/products/getAllProducts")
            .then((res) => setAllProducts(res.data.data))
            .catch((error) => console.error("Error fetching all products:", error));

        // Fetch product details
        axios.post("http://localhost:5000/api/products/getSingleProduct", {
            product_id: '67039f5ca3a5bfc4bb947c14'
        })
            .then((res) => setProduct(res.data.data))
            .catch((error) => console.error("Error fetching single product:", error));
    }, []);

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const getSalesDataForMonth = (month) => {
        if (!product.sales_history) return { days: [], sales: [] };

        const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);  // Days 1 to 30
        const dailySales = new Array(30).fill(0);  // Initialize daily sales to 0

        product.sales_history.forEach((sale) => {
            const saleDate = new Date(sale.date);
            if (saleDate.getMonth() === month) {
                const day = saleDate.getDate();
                const saleValue = sale.quantity * sale.price;
                dailySales[day - 1] += saleValue;  // Sum up sales for each day
            }
        });

        return { days: daysInMonth, sales: dailySales };
    };

    // Fetch sales data every time the month changes
    React.useEffect(() => {
        const { days, sales } = getSalesDataForMonth(currentMonthIndex);
        setSalesData({ days, sales });
    }, [currentMonthIndex, product.sales_history]); // Trigger on month or product data change

    // Chart data configuration
    const chartData = {
        labels: salesData ? salesData.days : [],  // x-axis: days of the month
        datasets: [
            {
                label: 'Sales History',
                data: salesData ? salesData.sales : [],  // y-axis: daily sales
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            }
        ]
    };

    // Chart options
    const chartOptions = {
        scales: {
            x: {
                title: { display: true, text: 'Day of the Month' },
            },
            y: {
                title: { display: true, text: 'Sales Value ($)' },
                min: 0,
                max: 10000,
            }
        }
    };

    // Handle month toggle
    const toggleMonth = (increment) => {
        setCurrentMonthIndex(prevMonthIndex => (prevMonthIndex + increment + 12) % 12);
    };

    const averagePercentageDifference = product.sales_history && product.Original_Price
        ? product.sales_history.reduce((sum, sales) => {
            const percentageDifference = ((sales.price - product.Original_Price) / product.Original_Price) * 100;
            return sum + percentageDifference;
        }, 0) / product.sales_history.length
        : null;
    
    
    return (
        <div>
          
            <h1>Product Sales</h1>
            <img src={product.Image} alt={product.Title} />
            <h4>{product.Title}</h4>
            <p>${product.Original_Price}</p>
            {averagePercentageDifference !== null ? (
                <p>Profit / Loss Percentage: {averagePercentageDifference.toFixed(2)}%</p>
            ) : (
                <p>Loading sales history or original price...</p>
            )}
            <p>Current Month: {months[currentMonthIndex]}</p>

            {/* Month Toggle Buttons */}
            <div>
                <button onClick={() => toggleMonth(-1)}>&lt; Previous</button>
                <button onClick={() => toggleMonth(1)}>Next &gt;</button>
            </div>

            {/* Sales data chart */}
            {salesData && (
                <Line data={chartData} options={chartOptions} />
            )}

<div>
        <button onClick={()=>toggleOffer()}>Toggle Season Offer</button>
        <p>Season Offer: {Offer ? "Yes" : "No"}</p>

        
        </div>
        </div>
    );
};

export default AdminDashBoard;
