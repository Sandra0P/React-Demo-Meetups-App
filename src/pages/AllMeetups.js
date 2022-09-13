import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

//map() iterates over an array and is used for rendering a list of data
function AllMeetupsPage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //use state in order to decide when should we load new info from the database
  //start in a loading state, set it to false once we have the data

  useEffect(() => {
    //useEffect  runs the given function only under given conditions
    setIsLoading(true);
    fetch("https://react-demo-app-99b29-default-rtdb.firebaseio.com/meetups.json", {
      method: "GET", //default method
      headers: {
        "Access-Control-Allow-Origin": "localhost:3000",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      },
    })
      .then((response) => {
        return response.json(); // after fetch is done, use its response variable to get the data stored in the databse
      })
      .then((data) => {
        //response.json() returns the data in json form so we need another function to parse it
        const meetups = [];
        for (const ID in data) {
          //for meetup in database
          const meetup = {
            id: ID, //unique id of each database
            ...data[ID], //copy all the values stored in each database meetup into local meetup object
          };
          meetups.push(meetup); //append each meetup in meetups
        }
        console.log(meetups);
        setIsLoading(false); //set loading state to false
        setLoadedMeetups(meetups);
      });
  }, []); //dependencies array - react checks variables added to array and compares them to their values the last time this function executed

  if (isLoading) {
    //logic explanation: JS loads html data in this function without waiting for fetch to finish working.
    //thats why we will use isLoading state to output different html code while fetch is working
    //and we output the actual loaded meetups only when isLoading registers as false
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1> All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
