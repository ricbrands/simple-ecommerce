# simple-ecommerce

A simple ecommerce app made with React.
This project aims to verify the main features of React, like Hooks (useState, useEffect, useRef, custom hook), router, fetching data, error boundary, form validation, local storage and component creation. It simulates an ecommerce with the shopping cart and checkout, and all related behaviors, like add, update and delete from cart and checkout.

## Custom Hooks

It was created a hook called useFetch that makes it easy to make http calls using fetch. With this hook it's possible to make an API call, store the result and handle the loading and error state in a much easier way.

## Error Handling

This project uses the React error boundary to show a friendly message to the user if our API call fails or an error occurs in anyone of the components. An error boundary must be a class component and declares some basic state for tracking wherever an error has occurred. Inside of render function, if there is an error, it will display a message that something went wrong. Otherwise, it will render whatever child components are nested underneath. You can see it in the ErrorBoundary file.

# Quick Start

Run the following commands:

```
npm install
npm start
```

This will install dependecies, then start the app and the mock API.

## Starter Project Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The following enhancements were made:

1. Added mock API using [json-server](https://github.com/typicode/json-server) and configured `npm start` to run the app and the mock API at the same time.
1. Added some React components.
1. Added App.css with basic styles.
1. Added some images to './public'.
1. Added functions for fetching data in `/src/services`.

Installed json-server, npm-run-all, react-router-dom, history, cross-env
Customized start script
Added db.json to root

# To-dos

*Add automated tests
*Convert Javascript to Typescript
*Add another categories of products for sale
*Finish the checkout process, adding billing and shipping info
*Display cart quantity in nav
*Deduplicate requests in useFetchAll
*Enhance the useFetchAll hook to accept a separate init argument
*Try using react-query or swr to handle the app's API calls.
