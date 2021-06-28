## Description

This simple React application lists truck offers using a public api to fetch the data. The offers can be filtered either by `tag` or `title` using a search input and can be sorted either by publishing date, ascending or descending price using a dropdown selector.

The application expects that the truck object coming from the api, contains the following properties:
`vehicle_picture_front`, `title`, `tags`, `shortCode`, `location`, `askPrice`, `bidPrice` and `offerPublicationDate`.

## Setup and execution

To run the application you will need the following:

- `Node.js` installed on your machine
- A clone of this repository
- Inside the project directory run `yarn` in order to install all the dependencies.
- Start the server with `REACT_APP_TRUCKS_URL=api-url-goes-here yarn start`
- Navigate to `http://localhost:3000` to view the app

## Deployment

A deployed instance of the application can be found [here](https://react-app-trucks.vercel.app/).
