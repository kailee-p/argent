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

Your terminal will tell you where the server is ready - for me this is http://localhost:8888 but it may differ on your machine. You can go to that address and access a local version of Argent. 

## Architectural Requirements

### Modern JS Library/Framework
Argent is written in React.js with TypeScript. 

### Minimum 3 User Interactions
Argent has **7 of 3** required user interaction points, as detailed in the images below. 

![Argent splash page showing 3 user interactions in the logo, front page button, and footer section.](https://i.imgur.com/bJX5JVd.png)

![Page from Argent showing the search bar and company information component with user interactions in the search bar and in the company information section.](https://i.imgur.com/k8WUB4J.png)

![Page from Argent showing the search bar and stock information components, including the tabs that toggle views and the switch that also toggles views.](https://i.imgur.com/oldJqe0.png)

### Specified Architectural Pattern
Argent uses the MVC pattern. 

### Integration with 3rd Party RESTful API
Argent makes fetch calls to [Polygon](https://polygon.io/) for company and stock information. 

### Minimum 5 material-ui/@core Components
Argent utilizes **6 of 5** required MaterialUI components.

1. [Text Field](https://material-ui.com/components/text-fields/) to receive input in the search bar.
2. [Tabs](https://material-ui.com/components/tabs/#tabs) to flip between company and stock information sections.
3. [Switch](https://material-ui.com/components/switches/#switch) to toggle between today's and previous day's stock prices.
4. [Tooltip](https://material-ui.com/components/tooltips/#tooltip) to add context on mouseover to the icon that directs the user to a company's site.
5. [Lists](https://material-ui.com/components/lists/#lists) to display the stock and company information retrieved from the API.
6. [Dividers](https://material-ui.com/components/dividers/#divider) to help divide list content.

![Argent page showing the text field, divider, list, and tooltip](https://i.imgur.com/HIHsaGW.png)

![Argent page showing the tabs and switch](https://i.imgur.com/EP5MYK0.png)

### Example of Reusable UI Component
Argent's splash page features a reusable button (./src/views/components/splash/CustomButton.tsx) that can be customized by passing className, buttonText, onClick, height, width, and padding strings as props in React. It also has its own CSS module that can be used to customize the hover effects and color scheme.

![Argent splash page highlighting the customized button.](https://i.imgur.com/XwQcVet.png)

## Architecture Overview
MVC, architectural overview, and file structure go here
document backend routes and at least 1 Polygon API route

## Design Process

## User Flow

Screenshots of each View and descriptions of the overall user flow as well as any place that you made distinct design decisions.  (Screenshots can be taken via any screenshot capture application or native methods).

## Accessibility
