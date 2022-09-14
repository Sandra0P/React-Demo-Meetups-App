# React-Demo-Meetups-App

This is a basic Meetups App with three functionalities: A display of All Meetups, Adding a New Meetup, Saving and Viewing Favorite Meetups
Front-end technologies: React (JS) + CSS + HTML (JSX code)
Back-end - implemented with Firebase

* Components are used to separate key functions of the app, such as the Navigation bar, Meetup Items and Meetup form.
* Data saved in New Meetup Form is stored and fetched from Firebase server
* React hooks used: 
    Route  - for routing to different "webpages" - an alternative to loading new html data for every separate page
    Switch - Ensure that Route chooses only one path (not rendering multiple web pages at the same time)
    useState - For reloading page components after state changes. For example we use a state that keeps track of when main page is in "loading mode" i.e fetching new meetups data from database
    useContext - Similar to state, but which enables multiple components to access state-like data. Better alternative than state because it prevents us from passing a chain of props information
    useRef - For saving data from input form. Instead of logging each key in the input, useRef enables us to save the data only when the Submit button is clicked
    
Folders:   
meetups folder - storeds all meetup-related code
layout folder - stores Layout and MainNavigation component
pages folder - stores code for three main "pages" in project
ui folder - reusable code for UI purposes. Contains a "card" wrapper which adds card-like effect to various components by adding a box shadow
store folder - for globally relevant data, so contains the favorites data which is saved and acccess with Context hook. 
    
    
A kind reminder: React requires Capitalized component ("function") names
