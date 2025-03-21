# State and District Population API

## Overview

This project is a RESTful API built with Express.js and MongoDB Atlas to manage and query population data for Indian states and districts. The API provides CRUD operations and advanced queries for retrieving, updating, and aggregating population data.

## Technologies Used

* Node.js

* Express.js

* MongoDB Atlas

* Mongoose

* Visual Studio Code

# Database Schema

## States Collection

{
    "_id": ObjectId,
    "name": String,
    "population": Number,
    "area": Number (in sq km)
}

## Districts Collection

{
    "_id": ObjectId,
    "name": String,
    "population": Number,
    "state_id": ObjectId
}

# API Endpoints

## 1. Insert States

Endpoint: POST /api/states

Adds a new state with population and area details.

Returns a success message with the added state details or an error message if the state already exists or data is invalid.

## 2. Insert Districts

Endpoint: POST /api/districts

Adds a new district and links it to a state using state_id.

Returns success or error message.

## 3. Retrieve Population for a Specific State

Endpoint: GET /api/states/:name/population

Retrieves the population of a specific state by name.

## 4. Update District Population

Endpoint: PUT /api/districts/:name/population

Updates the population of a specific district.

## 5. Delete District

Endpoint: DELETE /api/districts/:name

Removes a district by name.

## 6. Compute Total Population Across All States

Endpoint: GET /api/states/total-population

Calculates the sum of populations of all states.

## 7. Group and Sort Districts by Population

Endpoint: GET /api/districts/group-by-state

Aggregates districts by state and calculates total population for each state.

Sorts results by population in descending order.

## 8. Join States with Districts

Endpoint: GET /api/districts/with-states

Retrieves district data along with corresponding state details.

## 9. Calculate Average Population Density

Endpoint: GET /api/states/average-density

Calculates the average population density (population/area) for each state.

## 10. Retrieve All States

Endpoint: GET /api/states

Fetches details of all states in the database.

## 11. Retrieve All Districts

Endpoint: GET /api/districts

Fetches details of all districts in the database.

Error Handling & Validations

Proper validation for required fields.

Error messages for invalid input data.

Success messages upon successful operations.

# Setup Instructions

## Clone the repository:

git clone <repository-url>
cd <repository-folder>

## Install dependencies:

npm install

Set up environment variables for MongoDB Atlas connection in a .env file:

MONGODB_URI=<your_mongodb_connection_string>

## Start the server:

npm start
