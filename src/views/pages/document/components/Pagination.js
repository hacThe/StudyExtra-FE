import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../scss/Pagination.scss';
import { documentActions } from '../../../../actions/document.actions';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Pagination = ({page}) => {
    const dispatch = useDispatch();

    const pageDisplayLimit = 3;
    const currentPage =
        useSelector((state) => {
            return state.document.pagination;
        }) || 1;
    const changePage = (value) => {
        dispatch(documentActions.changePagination(value))
    }
    
    const [paginationIndex, setPaginationIndex] = useState(0);
    const changePaginationIndex = (event, newValue) => {
        setPaginationIndex(newValue);
    };
    const increasePaginationIndex = (event) => {
        if(paginationIndex + 1 < (page)/pageDisplayLimit && page > pageDisplayLimit){
            setPaginationIndex(paginationIndex+1);
        }
    };
    const decreasePaginationIndex = (event) => {
        if(paginationIndex > 0){
            setPaginationIndex(paginationIndex-1);
        }
    };


    var pages = Array.from(Array(page + 1).keys());
    pages.shift();

    
    return (
        <div className="pagination-body">
            <button 
                className="prev-button"
                onClick={(e) => decreasePaginationIndex(e)}
            >
                <IoIosArrowBack className="prev-icon"></IoIosArrowBack>   
            </button>
            <div className="page-button-container">
                {
                    pages.map((item, index) =>(
                        (pageDisplayLimit*paginationIndex <= index && index < pageDisplayLimit*paginationIndex + pageDisplayLimit) ? 
                            <button 
                                className= {currentPage == (index+1) ? "page-button active" : "page-button" }
                                onClick={() => changePage(index+1)}
                            >
                                {item}
                            </button>
                        : (null)
                    ))
                }
                {
                    (pages.length <= pageDisplayLimit) 
                        || (pageDisplayLimit*(paginationIndex+1) > page ) 
                        || (paginationIndex + 1 == page / pageDisplayLimit && page % pageDisplayLimit == 0)
                        ? (null) :
                        <button className="page-button">
                            ...
                        </button>
                }
                
            </div>
            <button 
                className="next-button"
                onClick={(e) => increasePaginationIndex(e)}
            >
                <IoIosArrowForward className="next-icon"> </IoIosArrowForward>
            </button>
            
            {/* <div className="card-number">{page}</div> */}
        </div>
    )
}
export default Pagination