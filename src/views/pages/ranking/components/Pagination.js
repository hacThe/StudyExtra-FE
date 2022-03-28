import React from 'react';
import '../scss/Pagination.scss';
import { rankingActions } from '../../../../actions/ranking.actions';

import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
const Pagination = ({page}) => {
    var pages = Array.from(Array(page).keys());
    rankingActions.changePagination(12);
    return (
        <div className="pagination-body">
            <button className="prev-button">
                <IoIosArrowBack className="prev-icon"></IoIosArrowBack>   
            </button>
            <div className="page-button-container">
            {
                pages.map((item) =>(
                    <button className="page-button">
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