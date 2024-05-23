# Thanaphat Nadsawang  MiniProject-Fullstack-CRUD

#Gosoft 

This is a full-stack CRUD (Create, Read, Update, Delete) mini project. The project is built using Node.js, React, and MySQL.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project demonstrates a simple full-stack CRUD application. It allows users to create, read, update, and delete records from a database. The backend is built with Node.js and Express, while the frontend is built with React. MySQL is used as the database.

## Features

- Create new records
- Read existing records
- Update existing records
- Delete records

## Installation

To run this project locally, follow these steps:

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/Thanapathnad/MiniProject-Fullstack-crud.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd MiniProject-Fullstack-crud/backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up the database:
    - Create a MySQL database.
    - Run the SQL scripts in the `database` folder to create the necessary tables.

5. Configure the environment variables:
    - Create a `.env` file in the `backend` directory.
    - Add the following environment variables:
      ```env
      DB_HOST=your_database_host
      DB_USER=your_database_user
      DB_PASSWORD=your_database_password
      DB_NAME=your_database_name
      ```

6. Start the backend server:
    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

Once the servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser. You can perform CRUD operations through the user interface.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React
- **Database**: MySQL

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICE
