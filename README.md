# Argent
A full stack application that retrieves company and stock information for the user.

## Description
Argent is a full stack application with a React/TypeScript frontend and Netlify serverless functions that leverages the [Polygon](https://polygon.io/) stock API to retrieve company and stock information based on the selected ticker symbol.

## Getting Started
Argent can be viewed here: https://argent-2021.netlify.app/#/

To run Argent locally, create an account with [Polygon](https://polygon.io/) and obtain an API key. 

**NOTE:** This application was built with the **Stocks Starter tier API key**, which allows for **unlimited API calls**. This application is **untested** with the Stocks Basic tier and may have **limited or missing functionality** if you choose to use that tier.

Fork and clone this repository to your local machine and open it. 

Create a .env file in the root folder and add POLYGON_API_KEY=YOUR_API_KEY to the file.

Install the required npm packages. 

```
npm i
```

Install the Netlify CLI. You will need a Netlify account if you don't already have one. Authenticate and obtain an access token via the command line. Connect to your forked GitHub repository with the Netlify CLI (you'll be prompted to log in to your GitHub account). Finally, run the Netlify dev command to spawn a local environment.

```
npm install netlify-cli-g         # install the netlify CLI
netlify login                     # obtain a token
netlify init                      # connect to your repo 
netlify dev                       # spawn a local environment
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

![Argent splash page highlighting the customized button.](https://i.imgur.com/j1X6mrj.png)

## Architecture Overview
Argent was built on top of Create React App and retains some of CRA's starter folder structure. Additionally, Argent uses MVC architecture. See below for a more detailed discussion of Argent's folder structure. 

```
.
├── public                              # contains the HTML file
├── src                                 # contains all other project code
│   ├── controllers                     # handles requests and responses between frontend and Netlify serverless functions
│   │   ├── companyInfoController.ts    # sends requests to getCompanyInfo
│   │   ├── searchController.ts         # sends requests to searchTickers
│   │   └── stockInfoController.ts      # sends requests to stock-related endpoints
│   ├── css                             # contains all project CSS
│   │ └── ...                             
│   ├── images                          # contains splash image
│   │ └── ... 
│   ├── interfaces                      # contains any reused or verbose interfaces for importing into components
│   │ └── ... 
│   ├── models                          # Netlify serverless functions that interact with Polygon API endpoints
│   │   ├── getCompanyInfo.ts           # calls Polygon endpoint to get company information from ticker
│   │   ├── getLastQuote.ts             # calls Polygon endpoint to get last quote of stock
│   │   ├── getPrevDayInfo.ts           # calls Polygon endpoint to get previous day's stock prices
│   │   └── searchTickers.ts            # calls Polygon endpoint to search tickers that match query     
│   └── views                           # renders the UI
│       ├── components                  # presentational components 
│       │ ├── company                   # all components related to the company information view
│       │ │ └── CompanyInfo.tsx         # displays company information
│       │ ├── multi                     # all components present on multiple views
│       │ │ ├── Header.tsx              # displays header        
│       │ │ ├── Logo.tsx                # displays logo
│       │ │ └── SearchBar.tsx           # displays search bar
│       │ ├── splash                    # all components related to the splash page view
│       │ │ ├── CustomButton.tsx        # displays custom button        
│       │ │ ├── Footer.tsx              # displays footer
│       │ │ ├── SplashImage.tsx         # displays splash image
│       │ │ └── SplashText.tsx          # displays splash text
│       │ └── stock                     # all components related to the stock information view
│       │   ├── StockLastQuote.tsx          # displays list of current stock prices        
│       │   ├── StockLastQuoteDataViz.tsx   # displays data visualization of current stock prices
│       │   ├── StockPrevClose.tsx          # displays list of previous stock prices
│       │   └── Stock PrevCloseDataViz.tsx  # displays data visualization of previous stock prices
│       └── containers                      # components that render children, generally stateful
│         ├── AllInfoContainer.tsx      # parent container of Header, CompanyInfo, Stock InfoContainer, SearchBarContainer
│         ├── SearchBarContainer.tsx    # parent container of SearchBar
│         ├── SplashContainer.tsx       # parent container of Header, SplashText, SplashImage, CustomButton, and Footer
│         └── StockInfoContainer.tsx    # parent container of StockLastQuote, StockPrevClose, StockLastQuoteDataViz, StockPrevCloseDataViz
└── ...                                 # misc files (e.g., tsconfig.json, package.lock)
```

## Polygon API Documentation

See below for documentation of the expected payload and response for one Polygon API endpoint used by Argent. For more information regarding Polygon's API endpoints, see the [Polygon documentation](https://polygon.io/docs/getting-started).

URL: https://api.polygon.io/

### Last Quote for a Symbol

Retrieves the most recent prices for the ticker symbol.

**Parameters**

- tickerSymbol: ticker symbol of stock (required)
- APIKey: API Key (required)

**Example**

```
GET Request
https://api.polygon.io/v2/last/nbbo/{tickerSymbol}?&apiKey={APIKey}
```

**JSON Response**

```
{
 "request_id": request id assigned by server.
 "results": {
  "P": ask price (price a seller will sell at).
  "S": ask size (number of round lot orders at given ask price).
  "T": exchange symbol the stock is traded under.
  "X": Ask Exchange ID.
  "p": bid price (price a buyer will buy at).
  "q": sequence number, represents sequence in which message events happened.
  "s": bid size (number of round lot orders at given bid price).
  "t": nanosecond accuracy SIP Unix Timestamp.
  "x": Bid Exchange ID.
  "y": nanosecond accuracy Participant/Exchange Unix Timestamp.
  "z": defines which exchange the ticker is listed on (1 = NYSE, 2 = NYSE ARCA/NYSE American, 3 = NASDAQ).
 },
 "status": status of request's response.
}
```

## Design Process

The initial wireframes for Argent, done in Google Jamboard, envisioned an application with two pages, a splash page and a page with company and stock information. Different features like buttons to export data were considered.

![Initial wireframe of splash page.](https://i.imgur.com/xmCfALX.png)

![Initial wireframe of company and stock information page.](https://i.imgur.com/gqENhOr.png)

However, after reviewing scope, the final functionality of Argent was narrowed to showing only company information and stock information (current and previous day's prices), using switches and tabs to toggle between views. 

The two-column layout no longer displays company and stock information, but is utilized to show numerical stock prices and the corresponding bar graphs on the right hand side. Instead of a button to return to the splash page, the Argent logo itself redirects the user and animates on mouseover. 

### User Flow

Argent's goal is to be a simple, easily usable and navigable application for looking up company and stock information, which requires a clean and accessible UI. Additional work was done to make Argent responsive to smaller screens, including mobile devices.

#### Splash Page

Argent's splash page anchors the application with its serif font in the logo contrasted with the clean sans-serif of the tagline text and the rest of the body. Colors from the splash image reappear throughout Argent's interface - to accent and tie together the color scheme.

The large button contains a call to action for the user and inverts its color scheme (green font, white background) on hover. 

![Argent's splash page displaying the two column layout with a header, footer, splash text, splash image, and button.](https://i.imgur.com/Kd0EH62.png)

#### Initial Search 

The next page gives the user clear instructions on how to proceed with the application's main functionality - searching for companies and stock tickers and viewing the relevant data. 

![Argent's search page displaying a search bar and instructions on how to begin searching.](https://i.imgur.com/yEvanrD.png)

#### Company Information

Upon searching for a company name or ticker symbol, if one is found that is associated with the ticker symbol selected, a list of company details will be displayed. Argent leverages MaterialUI's List and Dividers to separate the company details into easily digested chunks. Additionally, the MaterialUI icon is used along with a tooltip to allow the user to visit an external company website. 

Conditional rendering in React was used to only render whatever data the API returned - in some cases, some tickers contained no company information or were missing information in certain areas. 

When the user is finished, they can use the tab to navigate between the company and stock information view. 

![Argent's company information page displaying company name and list of different company details.](https://i.imgur.com/gfmWW16.png)

#### Stock Information (Current & Previous Day)

The stock information view defaults to the current day view, which displays a two-column layout with a list detailing the stock's ask price, bid price, and spread on the left side, and a bar chart visualizing this data on the right side. 

![Argent's current day stock price information page showing two-column layout with bar chart.](https://i.imgur.com/UWASCiU.png)

Using the switch, the user can toggle to view the previous day's OHLC for their selected ticker. Similarly, this view utilizes a list with a bar chart to visualize the data. 

![Argent's previous day stock price information page showing two-column layout with bar chart.](https://i.imgur.com/J6dk3wX.png)

### Accessibility & Performance

Argent's accessibility was improved through the usage of [Contrast Checker](https://webaim.org/resources/contrastchecker/) to confirm WCAG AA compliance for the color schemes of text and UI components. Lighthouse was used to identify the need for lazy loading the splash image. Additional testing was done using the Voiceover application on Mac to improve labeling of UI components and images for screen readers. 

