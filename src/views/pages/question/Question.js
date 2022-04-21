import React from 'react';
import './scss/Question.scss';
import Post from './components/Post.js';

const Question = () => {
    return (
        <div>
            <div className="question-page-container">
                <div className="question-container">
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}

export default Question