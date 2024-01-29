import pro1 from "../assets/project1.jpg";
import pro2 from "../assets/project2.jpg";
import pro3 from "../assets/project3.jpg";

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Digital Recipe Book",
    text: "The Digital Recipe Book is a web-based platform designed to organize and manage recipes digitally.Users can explore a collection of recipes, search for specific dishes, and save their favorites. The frontend is built using a combination of HTML, CSS, and JavaScript, with React.js handling the dynamic and interactive user interface. On the backend, Node.js and Express.js manage server-side operations, while MongoDB stores recipe data. User authentication is implemented using Passport.js, ensuring secure access. The platform also supports features like meal planning and generating shopping lists. Hosting is done on platforms like Heroku, providing users with a seamless and enjoyable recipe browsing experience.",
    view: "https://unsplash.com/photos/five-gray-spoons-filled-with-assorted-color-powders-near-chilli-vA1L1jRTM70",
  },
  {
    imgsrc: pro2,
    title: "E-Commerce and Online Shopping",
    text: "The E-commerce and Online Shopping platform is designed for seamless buying and selling experiences. Its frontend, developed using HTML, CSS, and JavaScript with React.js or Angular.js, provides users with an engaging interface for product browsing and purchasing. On the backend, Node.js, Express.js, or Django manage server-side logic, and databases such as MySQL or MongoDB store product and user information securely. Payment transactions are handled through integration with services like Stripe or PayPal, ensuring a secure checkout process. User authentication, powered by Passport.js or Firebase Authentication, adds an extra layer of security.The application is hosted on platforms like AWS or Heroku, offering a scalable and reliable online shopping experience.",
    view: "https://unsplash.com/photos/five-gray-spoons-filled-with-assorted-color-powders-near-chilli-vA1L1jRTM70",
  },
  {
    imgsrc: pro3,
    title: "Weather app",
    text: "The Weather App provides users with real-time weather information and forecasts for specific locations. Built with HTML, CSS, and JavaScript, the frontend utilizes React.js to create a responsive and visually appealing interface. For backend functionality, Node.js and Express.js or serverless AWS Lambda functions handle data processing. The app integrates with OpenWeatherMap API for live weather data and may use Google Maps Geocoding API for location-based search. Hosting options include Netlify, Vercel, or AWS to ensure accessibility. The Weather App offers users a straightforward and intuitive way to check the current weather conditions and forecasts with ease.",
    view: "https://unsplash.com/photos/five-gray-spoons-filled-with-assorted-color-powders-near-chilli-vA1L1jRTM70",
  },
];

export default ProjectCardData;
