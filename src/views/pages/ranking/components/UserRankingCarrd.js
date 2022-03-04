import React from 'react';
import '../scss/UserRankingCard.scss';
// import { CardMedia  } from '@mui/material';

const UserRankingCard = ({isOdd}) => {
  return (
    <div className="card-body" style={!isOdd? {backgroundColor:'#ededed'} : {backgroundColor:'#fff'}}>
        <div className="card-number">1.</div>
        <img src="https://www.exibartstreet.com/wp-content/uploads/avatars/2465/5e0de52aeee8b-bpfull.jpg" className="card-user-avatar"></img>
        <div className="card-user-name">Leslie Alexander</div>
        <div className="card-user-point">1600</div>
    </div>
  )
}

export default UserRankingCard
