const express = require('express');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const productRouter = require('./routes/productRoute');
const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const billingRouter = require('./routes/billingRoute');
const cartRouter = require("./routes/cartRoute"); // Import cartRouter
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require('./routes/userRoutes');



const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
// app.use(cors({ origin: 'https://autopricesystem.netlify.app' }));
// Database connection
dbConnect();

// Middleware to parse incoming JSON and URL-encoded payload
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cookie parser middleware
app.use(cookieParser());


// Routes
app.use('/api/products', productRouter);
app.use("/api/user", authRouter);
app.use("/api/billing", billingRouter);
app.use("/api/cart", cartRouter); // Use cartRouter
app.use('/', userRoutes); 
app.use("/api/orders", orderRoutes);
// app.use('/api/products', billingRouter);
app.use((req, res, next) => {
    res.status(404).send("Not Found");
});


// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});



const puppeteer = require("puppeteer");

const getQuotes = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will be in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "https://www.walmart.com/search/?q=phone" website
  // - wait until the DOM content is loaded (HTML is ready)
  await page.goto("https://www.walmart.com/search/?q=furniture", {
    waitUntil: "domcontentloaded",
  });

  // Get page data
  const products = await page.evaluate(() => {
    const items = [];
    // Use vanilla JavaScript to select the elements and extract data
    document.querySelectorAll('div.mb0.ph0-xl.pt0-xl.bb.b--near-white.w-25.pb3-m.ph1').forEach((element) => {
      const name = element.querySelector('span.normal.dark-gray.mb0.mt1.lh-title.f6.f5-l.lh-copy')?.innerText.trim();
      const price = element.querySelector('span.f2')?.innerText.trim();
      if (name && price) {
        items.push({ Name: name, Price: price });
      }
    });
    return items;
  });

  // Display the products
  console.log(products);

  // Close the browser
  await browser.close();
};

getQuotes();



const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// Create a client for the API
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    private_key: process.env.GOOGLE_PRIVATE_KEY,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
  },
});
async function fetchRealTimePages() {
  try {
    
    const response = await analyticsDataClient.runRealtimeReport({
      property: 'properties/467698068', 
      dateRanges: [
        {
          startDate: '7daysAgo',
          endDate: 'today',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
     
    });
    
    console.log('Real-Time Website User count:', response[0].rows[0].metricValues[0].value)
  } catch (error) {
    console.error('Error fetching real-time data:', error)
  }
}

fetchRealTimePages();

const onnxruntime = require('onnxruntime-node');
const fs = require('fs')
   async function runInference() {
    const session = await onnxruntime.InferenceSession.create('./model.onnx');
 

       const scalerParams = JSON.parse(fs.readFileSync('scaler_params.json'));

       // Input data (replace this with the actual input you want to standardize)
       const inputData = [1, 10, 7, -50];
   
       // Standardize the input data using the scaler parameters
       const standardizedInput = inputData.map((value, index) => {
           return (value - scalerParams.mean[index]) / scalerParams.scale[index];
       });

   
       // Create the input tensor for the model
       const tensor = new onnxruntime.Tensor('float32', new Float32Array(standardizedInput), [1, 4]);


       // Run inference
       const outputs = await session.run({ input: tensor });

       // Access the output
       console.log(outputs.variable.cpuData[0]);
   }

   runInference();