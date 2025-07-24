🛠️ Project Development Steps – GameZone
This section describes the full development journey of the GameZone project, from setup to final implementation. Each step is outlined to help others understand how the application was built.

📁 1. Project Initialization
✅ Frontend Setup (React)
bash
Copy
Edit
npx create-react-app Client-side
cd Client-side
Removed unnecessary files (App.test.js, logo.svg, etc.)

Cleaned up App.js and index.css for custom styling

✅ Backend Setup (Express.js)
bash
Copy
Edit
mkdir Server-side
cd Server-side
npm init -y
npm install express mongoose cors dotenv
Created a basic Express server in index.js

Enabled CORS and .env for environment variables

Connected to MongoDB using Mongoose

🌐 2. RAWG API Integration
Signed up at RAWG.io and generated an API key

Fetched games using the RAWG API in the frontend using fetch() or axios

Stored and rendered the API data in components

Implemented filtering by genre, platform, and search query

🎨 3. Designing the UI
Used CSS Flexbox and Grid for layout

Created reusable components like:

Navbar

GameCard

GenreDropdown

Footer

AllGames

Coursel

Sidebar

Serach

Userdetails

Added hover-based dropdowns for genres using CSS and React state

Designed a responsive layout for desktop and mobile

🛍️ 4. Cart Functionality
Built a Cart Context using React Context API

Implemented:

Add to Cart

Remove from Cart

View Cart Summary

Stored cart items in local state (optional: consider using localStorage)

📦 5. Backend – MongoDB Integration
Connected Express server to MongoDB Compass

Created basic schemas (e.g., Usersdetails)

Set up RESTful API routes for:

GET/POST games

POST user cart/order data

Used Postman to test all API routes

🔗 6. Connecting Frontend & Backend
Used axios to make HTTP requests to the Express server

Configured .env for both frontend and backend:

Frontend: REACT_APP_API_BASE_URL=http://localhost:3001

Backend: PORT, MONGO_URI, etc.

📋 7. Routing and Navigation
Installed React Router:

bash
Copy
Edit
npm install react-router-dom
Set up routes for:

/ – Home

/game/:id – Game Details

/cart – Cart Page

/Login - For Login

/SignUp - For SignUp(JWT,BCRYPT,JOI)
🧪 8. Testing and Debugging
Used browser dev tools and console logs to test functionality

Fixed common issues like:

CORS errors

Incorrect API responses

Routing and UI glitches

☁️ 9. Deployment (Optional)
If you deployed the project, include:

Frontend: Vercel or Netlify

Backend: Render or Railway

📚 10. Final Touches
Cleaned up unused code and comments

Added favicon and project title

Uploaded screenshots in the README

Wrote a detailed project description for GitHub
