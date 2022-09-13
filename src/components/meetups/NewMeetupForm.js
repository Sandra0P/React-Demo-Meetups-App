import {useRef} from 'react';
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

//htmlfor connects label to input (in regular HTML we would use the prop 'for')
//textarea - multi line text input control
function NewMeetupForm() {
    const titleInputRef = useRef();
    function submitHandler(event){
        event.preventDefault(); //prevent event from automatically occuring - AKA prevent submit button from sending a HTTP request to server (we want to take care of the submit action with our own logic)
        const enteredTitle = titleInputRef.current.value;        
    }
  return (
    <Card>
      <form className={classes.form} onSubmit = {submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Meetup Image</label>
          <input type="url" required id="image"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Meetup Address</label>
          <input type="text" required id="address"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description</label>
          <textarea id="description" required rows='5'> </textarea>
        </div>
        <div className={classes.actions}>
            <button> Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
