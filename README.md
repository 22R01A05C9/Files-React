# Files - Secure File Sharing

## Overview
Files is a web application that allows users to upload and download files using unique codes online. It offers a simple and secure way to share files across devices.

## Features
- Upload files and receive a unique code for retrieval
- Custom codes for identifying files
- Auto-delete files upon download for privacy
- Secure and efficient file handling with React, Node.js, and MongoDB

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/22R01A05C9/Files-React.git
   cd files
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (`.env` file):
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   API_KEY=your_api_key
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
- Upload a file and receive a unique code.
- Use the code to download the file on another device.
- Optionally, set a custom code for easier identification.

## Live Demo
[Try it here](https://saiteja.site/files)