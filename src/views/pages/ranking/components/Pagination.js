import React, { useEffect, useState } from 'react';
import '../scss/Pagination.scss';
import { rankingActions } from '../../../../actions/ranking.actions';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

const Pagination = ({page}) => {
    const dispatch = useDispatch();
    // Giới hạn số pagination hiển thị
    const pageDisplayLimit = 3;
    const currentPage = useSelector((state) => {
        return state.document.pagination
    }) || 1;
    
    const changePage = (value) => {
        dispatch(rankingActions.changePagination(value)); 
        console.log("currentPage", currentPage)
    }

    const [paginationIndex, setPaginationIndex] = useState(0);
    const changePaginationIndex = (event, newValue) => {
        setPaginationIndex(newValue);
    };

    const increasePaginationIndex = (event) => {
        if(paginationIndex + 1 < (page)/pageDisplayLimit && page > pageDisplayLimit){
            if(currentPage < (paginationIndex+1)*pageDisplayLimit + 1){
                var newCurrentPage = (paginationIndex+1)*pageDisplayLimit + 1;
                console.log("newcurrent page <", newCurrentPage);
                changePage(newCurrentPage);
            }
            setPaginationIndex(paginationIndex+1);
        }
    };
    const decreasePaginationIndex = (event) => {
        if(paginationIndex > 0){
            if(currentPage>(paginationIndex)*(pageDisplayLimit)){
                var newCurrentPage = (paginationIndex)*(pageDisplayLimit);
                console.log("newcurrent page >", newCurrentPage);
                changePage(newCurrentPage);
            }
            setPaginationIndex(paginationIndex-1);
        }
    };

    var pages = Array.from(Array(page).keys());
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
                                {item+1}
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