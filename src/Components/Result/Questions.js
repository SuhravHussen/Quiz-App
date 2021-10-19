import React from 'react';
import Answers from '../Quiz/Answers';
import classes from './Questions.module.css';

const Questions = ({ answers = [] }) => {
    console.log(answers);
    return (
        <>
            {answers.map((answer, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className={classes.question} key={index}>
                    <div className={classes.qtitle}>
                        <span className="material-icons-outlined"> help_outline </span>
                        {answer.title}
                    </div>
                    <Answers input={false} options={answer.options} />
                </div>
            ))}
        </>
    );
};

export default Questions;
