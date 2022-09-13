import classes from './Card.module.css'

//use this card component to wrap around JSX content - for creating card effect
//props.children will hold the content passed between the opening and closing component text
function Card(props){
    return <div className = {classes.card}>
        {props.children}
    </div>
}
export default Card;