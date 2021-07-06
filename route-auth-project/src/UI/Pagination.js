import { useState } from "react";
import classes from '../components/Table.module.css'
import './Pagination.css';

const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentpage] = useState(1);

    const goToNextPage = () => {
        setCurrentpage((page) => page + 1);
    }

    const goToPreviousPage = () => {
        setCurrentpage((page) => page - 1);
    }

    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentpage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    return (
        <div>
            <h1>{title}</h1>
            <div className="dataContainer">
                <table className={classes.table}>
                    <thead className={classes.heading}>
                        <tr>
                            {["Name", "Capital", "Calling Code"].map(heading => <th key={heading}>{heading}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {
                        getPaginatedData().map((d, idx) => {
                            // return <RenderComponent filteredData = {getPaginatedData()}/>
                            return <tr key={d.callingCodes+d.name}>
                            <td>{d.name}</td>
                            <td>{d.capital}</td>
                            <td>+{d.callingCodes}</td>
                        </tr>  
                        })
                }
                </tbody>
                </table>
            </div>
            {/* previou button */}
            <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>prev
                </button>

                {/* show page numbers */}
                {
                    getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`paginationItem ${currentPage === item ? 'active' : null}`}>
                            <span>{item}</span>
                        </button>
                    ))
                }
                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}>
                    next
                </button>
            </div>
        </div >

    );
}

export default Pagination;