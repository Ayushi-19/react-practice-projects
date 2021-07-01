import { useState, useContext } from "react";
import { useHistory } from "react-router";
import Authentication from "../store/auth-context";
import Card from "../UI/Card";
import Input from "../UI/Input";
import classes from './Home.module.css';
import Button from "../UI/Button";

const Home = () => {
    // const username = useRef();
    // const password = useRef();
    const history = useHistory();
    // const location = useLocation();
    const ctx = useContext(Authentication);

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const onUserNameChangeHandler = (event) =>{ 
        if(event.target.value.length > 5 ){
            setEnteredUserName(event.target.value);
        }
    }
    const onPwdChangeHandler = (event) =>{  
        if(event.target.value.length > 5 ){
            setEnteredPassword(event.target.value);
        }
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        // console.log(username.current.value)
        // console.log(password.current.value)
        console.log(enteredUserName, enteredPassword)
        if(enteredUserName.length>=5 && enteredPassword.length>=5){
            ctx.login()
            history.replace('/welcome')
        }
        
        console.log(ctx)
    }


    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="user" className={classes.label}>Username</label>
                    <Input id="user" type="text" onChange={onUserNameChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="pwd" className={classes.label}>Password</label>
                    <Input id="pwd" type="password" onChange={onPwdChangeHandler}/>
                </div>
                <Button>Login</Button>
            </form>
        </Card>
    );
};

export default Home;