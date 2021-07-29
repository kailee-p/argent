# Argent
A full stack application that retrieves company and stock information for the user.

## Description
Argent is a full stack application with a React/TypeScript frontend and Netlify serverless functions that leverages the [Polygon](https://polygon.io/) stock API to retrieve company and stock information based on the selected ticker symbol.

## Getting Started
Argent can be viewed here: https://argent-2021.netlify.app/#/

To run Argent locally, create an account with [Polygon.io](https://polygon.io/) and obtain an API key. 

**NOTE:** This application was built with the **Stocks Starter tier API key**, which allows for **unlimited API calls**. This application is **untested** with the Stocks Basic tier and may have **limited or missing functionality** if you choose to use that tier.

Create a .env file in the root folder and add POLYGON_API_KEY=YOUR_API_KEY to the file.

Install the Netlify CLI and run the Netlify dev command to spawn a local environment.

```
npm install netlify-cli-g
netlify dev
```

Your terminal will tell you where the server is ready - for me this is usually http://localhost:8888 but it may differ on your machine. You can go to that address and access a local version of Argent. 

## Architectural Requirements

### Modern JS Library/Framework
Argent is written in React.js with TypeScript. 

### Minimum 3 User Interactions


### Specified Architectural Pattern

MVC, architectural overview, and file structure go here
document backend routes and at least 1 Polygon API route

### Integration with 3rd Party RESTful API
Argent makes fetch calls to [Polygon](https://polygon.io/) for company and stock information. 

### Minimum 5 material-ui/@core Components

### Example of Reusable UI Component

## Design Process

