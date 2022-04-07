import React , {useState} from 'react';

import './scss/Rankings.scss';
import UserRankingCard from './components/UserRankingCarrd';

import Pagination from './components/Pagination';
import { Button, ButtonGroup, Grid } from '@mui/material';

import { GiLaurelCrown } from "react-icons/gi";
import { rankingActions } from '../../../actions/ranking.actions';
import { useDispatch, useSelector } from "react-redux";


const Ranking = () => {

    const filters = ["Tuần", "Tháng", "Toàn bộ"];
    const [typeSelect, setTypeSelect] = useState(0);
    const changeSelectType = (newValue) => {
        setTypeSelect(newValue);
    }

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
                        <UserRankingCard isOdd={true}/>
                        <UserRankingCard isOdd={false}/>
                        <UserRankingCard isOdd={true}/>
                        <UserRankingCard isOdd={false}/>
                        <UserRankingCard isOdd={true}/>
                        <UserRankingCard isOdd={false}/>
                        <UserRankingCard isOdd={true}/>
                        <UserRankingCard isOdd={false}/>
                        <UserRankingCard isOdd={true}/>
                        <UserRankingCard isOdd={true}/>
                        <UserRankingCard isOdd={false}/>
                        <UserRankingCard isOdd={true}/>
                        <UserRankingCard isOdd={false}/>
                        <UserRankingCard isOdd={true}/>
                        <UserRankingCard isOdd={false}/>
                        <UserRankingCard isOdd={true}/>
                    </div>
                    <div className='ranking-footer'>
                        <Pagination page={9} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranking
