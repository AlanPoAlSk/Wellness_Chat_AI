# Wellness_Chat_AI

## Description
Wellness_Chat_AI is a project that implements a Health and Wellness Chatbot using React for the frontend and Express for the backend. The chatbot interacts with users, providing responses related to health and wellness queries. Kuki AI service is used for the chatbot functionality.

## Installation
1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd wellness_AI
    ```
3. Install Node.js if not already installed. You can download it from [here](https://nodejs.org/en/download/) and follow the installation instructions for your operating system.

4. Install project dependencies:
    ```sh
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```
   
5. Create a `.env` file in the `server` directory:
    ```
    REACT_APP_KUKI_API_KEY=your_kuki_api_key_here
    ```
    Replace `your_kuki_api_key_here` with your actual Kuki API key.

## Obtaining Kuki AI API Key
To obtain a Kuki AI API key, follow these steps:
1. Visit the [Kuki AI website](https://kuki.ai/).
2. Sign up for an account or log in if you already have one.
3. Once logged in, navigate to your account settings or dashboard.
4. Look for the section related to API access or integration.
5. Generate an API key or copy the existing one provided.
6. Paste the API key into the `.env` file in the `client` directory of your project.

## Usage
### Starting the Server
1. Navigate to the server directory:
    ```sh
    cd server
    ```
2. Start the server:
    ```sh
    npm start
    ```

### Starting the Client
1. Navigate to the client directory:
    ```sh
    cd ../client
    ```
2. Start the client:
    ```sh
    npm start
    ```

## Dependencies
### Client
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Bootstrap](https://getbootstrap.com/) - Front-end framework for designing responsive and mobile-first websites.
- [axios](https://github.com/axios/axios) - Promise-based HTTP client for the browser and Node.js.

### Server
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Web application framework for Node.js.
- [axios](https://github.com/axios/axios) - Promise-based HTTP client for the browser and Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware to parse request bodies.
- [cors](https://github.com/expressjs/cors) - Middleware to enable Cross-Origin Resource Sharing.
- [dotenv](https://github.com/motdotla/dotenv) - Module to load environment variables from a .env file into process.env.

## Scripts
- `npm start`: Start the Express server.
- `npm run client`: Start the React client.
- `npm run dev`: Concurrently run both server and client.

## Contributing
Contributions are welcome. Please open an issue to discuss proposed changes or submit a pull request directly.

## License
This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

