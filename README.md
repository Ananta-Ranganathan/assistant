# Assistant

## Introduction
**Assistant** is a personal hobby project designed as a web-based application to interact with a locally running model, such as ollama. It provides a simple interface to send requests and display responses from the model.

## Project Structure
The project is organized as follows:
- The `client` directory contains:
  - `index.html`: Structures the interface for user interactions.
  - `main.js`: Handles the logic for sending requests and processing responses.
- The root directory contains:
  - `index.js`: The server-side script to manage model interactions.
  - Relevant NPM files for dependency management and project configuration.

#Ensure # Installation & Setup
To install and run the Assistant on your local machine, follow these steps:
1. **Set up ollama**:
   Install and serve ollama with your models of choice installed locally.
2. **Clone the repository and Install dependencies**:
   Run `npm install` in your terminal to install the required dependencies.
3. **Start the backed API handler**:
   Execute `node index.js` from the root directory to run the server.

## Usage
Open the `client/index.html` file in a web browser, input your message, and select your desired model from the dropdown. Click "Send Request" to interact with the model and view the response.

## Contributing
This is a personal hobby project. Contributions are not actively sought.

## License
Licensed under CC0.
