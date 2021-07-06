import { useEffect, useState } from "react";
import Table from "../components/Table";
import classes from "./Countries.module.css";
import { useDebounceEffect } from '../utilities/useDebounceEffect';
import { useThrottlingEffect } from "../utilities/useThrottlingEffect";

const DebouncingThrottling = () => {
    const [inputData, setInputData ] = useState();
    const [countries, setCountries] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData ] = useState(0);
    
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res=>res.json())
            .then(json=>{
                setCountries(json)
                // setFilteredData(json)
            })
    },[]);

    // https://jsonplaceholder.typicode.com/users

    const onChangeHandler = ( event ) => {
        setInputData(event.target.value);
        
    }

    const clickHandler = ( ) => {
        setData(data+1);
        
    }

    // const list = countries.map(country=><option key={country.name}>{country.name}</option>);
    useDebounceEffect(() => {
        console.log(inputData)
        const filteredList = countries.filter(country=>{
            return country.name.toLowerCase().includes(inputData.toLowerCase())
        })
        setFilteredData(filteredList)}, [inputData], 1000)

    useThrottlingEffect(()=>console.log("Button Click....."),[data],10000);
    return (
        
    <div>
        {/* <select onChange={(event)=>console.log(event.target.value)}>
            {countries.map(country=><option key={country.name}>{country.name}</option>)}
        </select> */}
        {/* <div>
            {filteredData.map(country=><p>{country.name}</p>)}
        </div> */}
        <label htmlFor="country" className={classes.label}>Enter Country Name : </label>
        <input id="country" type="text" onChange={onChangeHandler} />
        <button onClick={clickHandler}>On Click</button>
        <Table filteredData={filteredData}/>
    </div>
    )}

export default DebouncingThrottling;