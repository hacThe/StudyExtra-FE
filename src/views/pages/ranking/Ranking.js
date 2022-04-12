import React , {useState, useEffect} from 'react';

import './scss/Rankings.scss';
import UserRankingCard from './components/UserRankingCarrd';

// import Pagination from './components/Pagination';
import { Button, ButtonGroup, Grid } from '@mui/material';

import { GiLaurelCrown } from "react-icons/gi";
import { rankingActions } from '../../../actions/ranking.actions';
import { useDispatch, useSelector } from "react-redux";

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Ranking = () => {

    const filters = ["Tuần", "Tháng", "Toàn bộ"];
    const [typeSelect, setTypeSelect] = useState(0);
    const changeSelectType = (newValue) => {
        setTypeSelect(newValue);
    }

    const [page, setPage] = useState(1);
    useEffect(() => {
        setPage(1)
    }, 1)

    const setCurrentPage = (num) => {
        setPage(num)
    }

    var arr = Array.from(Array(95).keys());
    var maxItem = 10;
    return (
        <div className="ranking-page-container">
            <div className="ranking-container">
                <div className="ranking-body">
                    <div className="ranking-header">
                        <GiLaurelCrown className="crown-icon"></GiLaurelCrown>
                        <p className="ranking-heading">
                            Leaderboard
                        </p>
                    </div>
                    <div className='ranking-option-container'>
                        <ButtonGroup className='ranking-option'>
                            {
                                filters.map((filter, index)=>(
                                    <Button 
                                        className={ index == typeSelect ? 'button-option active' : 'button-option'} 
                                        style={{textTransform: 'none'}}
                                        onClick={(e) => changeSelectType(index)}
                                    >
                                        {filter}
                                    </Button>
                                ))
                            }
                        </ButtonGroup>
                    </div>
                    <div className='ranking-list'>
                        {
                            arr.length === 0 ? (null) : 
                                arr.map((val,index) => (
                                    (index < page * maxItem && index >= (page-1) * maxItem) ? (
                                        <UserRankingCard index={index+1}/>
                                    ) : (null)
                                ))
                        }
                    </div>
                    <div className='ranking-footer'>
                        <Pagination
                            count={Math.ceil(arr.length/maxItem)}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{ 
                                        previous: IoIosArrowBack, 
                                        next:  IoIosArrowForward 
                                    }}
                                    {...item}
                                />
                            )}
                            onChange = {(e, page) => {
                                console.log("abc", page);
                                setCurrentPage(page)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranking
