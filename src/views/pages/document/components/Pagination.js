import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../scss/Pagination.scss';
import { documentActions } from '../../../../actions/document.actions';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


const Pagination = ({page}) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);


    var pages = Array.from(Array(page).keys());
    pages.shift();
    return (
        <div className="pagination-body">
            <button className="prev-button">
                <IoIosArrowBack className="prev-icon"></IoIosArrowBack>   
            </button>
            <div className="page-button-container">
            {
                pages.map((item) =>(
                    <button className="page-button" onClick={() => documentActions.changePagination(item)   }>
                        {item}
                    </button>
                ))
            }
                <button className="page-button active">
                    ...
                </button>
            </div>
            <button className="next-button">
                <IoIosArrowForward className="next-icon"> </IoIosArrowForward>
            </button>
            
            {/* <div className="card-number">{page}</div> */}
        </div>
    )
}
export default Pagination