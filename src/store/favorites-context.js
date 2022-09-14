//Context is designed to share data that can be considered “global” for a tree of React components

import { createContext, useState } from "react";

//initialise empty context containing favorites information
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]); //this function is rendered only when state changes

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        //pointers to favorites handler functions so we can access them externally
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };
    
    //pass favorites value via context provider 
    return <FavoritesContext.Provider value = {context}> 
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;