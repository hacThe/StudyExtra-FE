import React from 'react';

import './scss/Rankings.scss';
import UserRankingCard from './components/UserRankingCarrd';

import Pagination from './components/Pagination';
import { Button, ButtonGroup, Grid } from '@mui/material';

import { GiLaurelCrown } from "react-icons/gi";

const Ranking = () => {
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
                        <Button className='button-option active button-week' style={{textTransform: 'none'}}>Tuần</Button>
                        <Button className='button-option button-month' style={{textTransform: 'none'}}>Tháng</Button>
                        <Button className='button-option button-all' style={{textTransform: 'none'}}>Toàn bộ</Button>
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
                    <Pagination page={3} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ranking
