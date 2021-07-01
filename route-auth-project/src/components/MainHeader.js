import { Link } from "react-router-dom";
import classes from './MainHeader.module.css'
import Button from "../UI/Button";
import { useHistory } from "react-router";
import { useContext } from "react";
import Authentication from "../store/auth-context";

const MainHeader = () =>{
    const history = useHistory();
    const authctx = useContext(Authentication);

    const clickHandler = () => {
        history.push('/home')
    }

    const onClickHandler = () => {
        history.push('/home')
        authctx.logout()
    }

    return <header className={classes.header}>
        <h1 onClick={clickHandler}>React Login</h1>
        {authctx.auth && <nav className={classes.nav}>
            <ul>
                <li>
                    <Link className={classes.link} to="/welcome">Welcome</Link>
                </li>
                <li>
                    <Link className={classes.link} to="/products">Products</Link>
                </li>
            </ul>
        </nav>}
        {authctx.auth && <Button onClick={onClickHandler}>Logout</Button>}
    </header>
};

export default MainHeader;