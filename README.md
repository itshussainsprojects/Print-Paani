**PrintPaani **
**📖 Table of Contents**
•	Project Overview
•	Key Features
•	Technology Stack
•	Installation Guide
•	Configuration
•	Running the Application
•	Backend Setup
•	Contributing
•	License
. Update the README file with the following content:
________________________________________
Rag with supabase
**🚀 Project Overview**
PrintPaani is a comprehensive web application designed to provide custom water bottles while promoting water conservation. The platform allows users to customize water bottles, track the environmental impact of their orders, and get real-time support through AI-powered chatbots. It integrates a backend for data management, real-time analytics, and a dynamic frontend.
The project utilizes Next.js, React 18.2.0, MongoDB, Supabase, and Gemini 1.5 Flash API for real-time customer support and seamless data flow.
**✨ Key Features**
1.	Custom Design & Quotation System:
o	User-friendly quote form for personalized water bottle requests.
o	Interactive design interface for easy bottle customization.
2.	Order Management & Processing:
o	MongoDB integration for order tracking.
o	Real-time status management of orders (pending, approved, completed).
3.	Environmental Impact Tracking:
o	Track metrics like plastic reduction and CO2 savings.
o	Dynamic, real-time data visualizations.
4.	AI-Powered Customer Support System:
o	AquaBot provides intelligent chat support with Gemini 1.5 Flash API.
o	Knowledge base integration for quicker customer support responses.
5.	Admin Dashboard:
o	Manage quotes, orders, and track environmental impact.
o	Detailed performance analytics for sales, customer activity, and more.
6.	Business Analytics:
o	Real-time sales tracking, customer data analysis, and performance metrics.
________________________________________
**🛠 Technology Stack**
**Frontend:**
•	Next.js 15.1.0 (React-based framework)
•	React 18.2.0
•	TypeScript for type safety
•	Tailwind CSS for modern styling
•	Framer Motion for animations
•	Lucide React for icons
•	Radix UI for accessible UI components
**Backend & Database:**
•	Supabase for real-time database and authentication
•	MongoDB (using Mongoose ORM) for order and customer data management
•	Next.js API Routes for backend integration
Environmental & Data Visualization:
•	Chart.js, React-Chartjs-2, and Recharts for impact visualizations
**Customer Support:**
•	Gemini 1.5 Flash API for real-time AI-powered chatbot responses
**Form Handling:**
•	React Hook Form for form management
•	Zod for form validation
________________________________________
**🛠 Installation Guide**
To set up and run PrintPaani locally, follow these steps:
1.	Clone the Repository:

**git clone https://github.com/hak-j/Fyp-Print-paani.git
cd Fyp-Print-paani**

**2.	Install Dependencies:**
Ensure Node.js and npm are installed, then run the following command in both the frontend and backend directories:
**npm install**

**3. Set Up Environment Variables:**
Create a .env.local file in the root of your project and add the following environment variables:
**NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
MONGODB_URI=your_mongo_db_connection_uri
GEMINI_API_KEY=your_gemini_api_key**

**🖥 Running the Application**
**1. Run the Frontend:**
In the root directory of the project:
**npm run dev**
**The application will be available at http://localhost:3000.**
**2. Run the Backend:**
To start the backend, navigate to the backend directory and run:
**cd backend
npm run dev**
The backend API will be available for handling requests and interactions with the database.
**🛠 Backend Setup**
Ensure the backend is properly set up by following these steps:
1.	Navigate to the backend directory.
2.	Install dependencies using npm install.
3.	Configure the .env.local file in the backend directory with the necessary environment variables:
**MONGODB_URI=your_mongo_db_connection_uri
GEMINI_API_KEY=your_gemini_api_key**

To start the backend server, run:

**npm run dev**

This will run the backend server and make the API available for handling requests.

**⚡ Configuration**
Supabase:
1.	Set up a Supabase project and configure the URL and keys in the .env.local file for database access and authentication.
MongoDB:
1.	Connect your MongoDB instance (either MongoDB Atlas or a local instance) to manage orders and customer data.
Gemini API:
1.	Obtain a Gemini 1.5 Flash API key for the AI-powered chatbot functionality (AquaBot).
________________________________________
**🤝 Contributing**
We welcome contributions from the community! To contribute to PrintPaani, follow these steps:
1.	Fork the repository.
2.	Create a new branch for your feature or bug fix.
3.	Make changes and ensure they are well-tested.
4.	Submit a pull request for review.
Please adhere to the coding standards and include appropriate unit tests for your changes.
________________________________________
**📄 License**
This project is licensed under the MIT License – see the LICENSE file for details.



