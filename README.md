# BlogBlaze

BlogBlaze is a dynamic blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and enhanced with Cloudinary for seamless image management, Tailwind CSS for beautiful and responsive design, and Date-fns for efficient date manipulation.

## Key Features
- **Authorization and Authentication**: Secure user login and registration processes.
- **Blog Creation**: Users can easily create and manage their own blogs.
- **Search by Categories**: Efficiently find articles based on categories.
- **Article Creation**: Facilitate the creation of engaging articles.
- **Profile Page**: Personalized user profiles to showcase individual blogs and activities.
- **Comment on Blog**: Interactive comment system for user engagement.
- **Contact Us Page**: Easily reach out for inquiries and support.

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

- **Other Tools**:
  - Cloudinary (for image management)
  - Date-fns (for date manipulation)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/anurag270102/blogblaze/tree/main
    cd blogblaze
    ```

2. Install the dependencies for the backend:
    ```bash
    cd server
    npm install
    npm start
    ```

3. Create a `.env` file in the `server` directory and add your MongoDB and Cloudinary keys:
    ```
    MONGO_URI=your_mongodb_uri
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4. Navigate to the client directory and install its dependencies:
    ```bash
    cd ../client
    npm install
    npm run dev
    ```

## Running the Application

To start the development servers, use the following commands:

1. Start the backend server (from the `server` directory):
    ```bash
    cd server
    npm start
    ```

2. Start the frontend development server (from the `client` directory):
    ```bash
    cd client
    npm run dev
    ```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.


## Contact

For any inquiries or feedback, feel free to reach out via the Contact Us page on BlogBlaze or directly through GitHub.

---

Thank you for checking out BlogBlaze!
