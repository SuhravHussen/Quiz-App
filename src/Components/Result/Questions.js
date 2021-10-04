import React from 'react';
import Answers from '../Quiz/Answers';
import classes from './Questions.module.css';

const Questions = () => (
    <>
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the questions from learn with sumit
            </div>
            <Answers />
        </div>
    </>
);

export default Questions;
