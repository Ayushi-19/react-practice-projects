import { useEffect, useState } from "react";
import Pagination from "../UI/Pagination";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res=>res.json())
            .then(json=>{
                setCountries(json)
                // setFilteredData(json)
            })
    },[]);

    // https://jsonplaceholder.typicode.com/users

    // const list = countries.map(country=><option key={country.name}>{country.name}</option>);
    
    return (
        
    <div>
        <Pagination
            data={countries}
            title="Country Details"
            pageLimit={5}
            dataLimit={10}
            />
    </div>
    )}

export default Countries;