import classes from "./Table.module.css"

const Table = (props) => {

    const renderTable = () =>{
        return (
            props.filteredData.map(countryData=>{
                return <tr key={countryData.callingCodes+countryData.name}>
                    <td>{countryData.name}</td>
                    <td>{countryData.capital}</td>
                    <td>+{countryData.callingCodes}</td>
                </tr>
            })
        
        )}
    

    return (props.filteredData.length !== 0 && <table className={classes.table}>
        <thead className={classes.heading}>
            <tr>
                {["Name", "Capital", "Calling Code"].map(heading => <th key={heading}>{heading}</th>)}
            </tr>
        </thead>
        <tbody>
            {renderTable()}
        </tbody>
    </table>)
}

export default Table;