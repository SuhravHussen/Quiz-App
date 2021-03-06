import React, { useState } from 'react';
import image from '../../assets/success.png';
import classes from './summary.module.css';

const Summary = ({ score, noq }) => {
    const [loading] = useState(false);
    const [error] = useState(false);

    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>

            {loading && <div className={classes.badge}>Loading your badge...</div>}

            {error && <div className={classes.badge}>An error occured!</div>}

            {!loading && !error && (
                <div className={classes.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}
        </div>
    );
};

export default Summary;
