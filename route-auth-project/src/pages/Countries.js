import { useEffect, useState } from "react";
import Table from "../components/Table";
import classes from "./Countries.module.css";
import { useDebounceEffect } from '../utilities/useDebounceEffect';

const CovidReport = () => {
    const [inputData, setInputData ] = useState();
    const [countries, setCountries] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res=>res.json())
            .then(json=>setCountries(json))
    });

    // https://jsonplaceholder.typicode.com/users

    const onChangeHandler = ( event ) => {
        setInputData(event.target.value);
        
    }

    // const list = countries.map(country=><option key={country.name}>{country.name}</option>);
    useDebounceEffect(() => {
        console.log(inputData)
        const filteredList = countries.filter(country=>{
            return country.name.toLowerCase().includes(inputData.toLowerCase())
        })
        setFilteredData(filteredList)}, [inputData], 1000)
    return (
        
    <div>
        {/* <select onChange={(event)=>console.log(event.target.value)}>
            {countries.map(country=><option key={country.name}>{country.name}</option>)}
        </select> */}
        {/* <div>
            {filteredData.map(country=><p>{country.name}</p>)}
        </div> */}
        <label htmlFor="country">Enter Country Name : </label>
        <input id="country" type="text" onChange={onChangeHandler} />
        <Table filteredData={filteredData}/>
    </div>
    )}

export default CovidReport;