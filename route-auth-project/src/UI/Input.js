import classes from './Input.module.css'

const Input = (props) => {
    return <input required className={classes.input}
    id={props.id} type={props.type} onChange={props.onChange}/>
}

export default Input;