import React from 'react';
import classes from './Analysis.module.css';
import Questions from './Questions';

const Analysis = () => (
    <div className={classes.analysis}>
        <h1 className="sm:text-3xl text-base">Question Analysis</h1>
        <Questions />
    </div>
);

export default Analysis;
