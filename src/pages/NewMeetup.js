import {useHistory} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        //save meetupData in backend server
        //add "folder" in database by adding the /foldername in the end of the url
        //firebase requires that we add .json to the end of the url
        fetch(
        "https://react-demo-app-99b29-default-rtdb.firebaseio.com/meetups.json",
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        } 
        ).then(() => 
            history.replace('/')); //navigating away once the request succeeded + going back won't take us back to the form
        //method defines the request type (POST = upload), body contains the content to save
        //content needs to be sent in JSON format so we use JSON.stringify to convert it that way 
    }
  return (
    <section>
      <h1> Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
