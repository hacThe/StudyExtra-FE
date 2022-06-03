import React, { useState, useEffect } from 'react';
import './scss/Rankings.scss';
import UserRankingCard from './components/UserRankingCarrd';
import { GiLaurelCrown } from "react-icons/gi";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import URL from '../../../services/api/config'
import axios from 'axios';

const Ranking = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetApi = async () => {
            await axios.get(URL.URL_GET_RANKING)
                .then(res => {
                    setUsers(res.data.data)
                })
        }
        fetApi()
    }, [])

    const [page, setPage] = useState(1);
    useEffect(() => {
        setPage(1)
    }, 1)

    const setCurrentPage = (num) => {
        setPage(num)
    }

    let maxItem = 10;
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

                    <div className='ranking-list'>
                        {
                            users.length === 0 ? (null) :
                                users.map((val, index) => (
                                    (index < page * maxItem && index >= (page - 1) * maxItem) ? (
                                        <UserRankingCard key={index} user={val} index={index + 1} />
                                    ) : (null)
                                ))
                        }
                    </div>
                    <div className='ranking-footer'>
                        <Pagination
                            count={Math.ceil(users.length / maxItem)}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{
                                        previous: IoIosArrowBack,
                                        next: IoIosArrowForward
                                    }}
                                    {...item}
                                />
                            )}
                            onChange={(e, page) => {
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
