import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"

const Welcome = () => {
    const rows = new Array(3).fill().map((_,index)=>index+1)
    console.log(rows)
    const columns = new Array(4).fill().map((_,index)=>index+1)
    console.log(columns)

    const buttonHandler = (event)=>{
        console.log(event.target.textContent)
        console.log(event)
    }

    return <React.Fragment>
        <h2>Link to the topic</h2>
        <Link to="/pagination" className="link">Go to custom Pagination</Link>
        <Link to="/debouncing-throttling" className="link">Go to debouncing and throttling concept</Link>

    </React.Fragment>;
}

export default Welcome;