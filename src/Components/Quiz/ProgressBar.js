import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LinearWithValueLabel from './LinerProgressWithLevel';
import './progressBar.css';

const ProgressBar = ({ next, previous, progress, handleSubmit }) => (
    <div className="progressBar bg-green-50 w-11/12 h-16 fixed left-0 right-0 bottom-5 mx-auto my-0 flex justify-between items-center border-green-400 border-opacity-100 border rounded-lg">
        <div
            className="backButton w-12 h-12 rounded-lg bg-green-400 flex justify-center items-center cursor-pointer ml-3 hover:bg-green-300 "
            onClick={previous}
            role="button"
            tabIndex="0"
        >
            <span className="icon">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </span>
        </div>
        <div style={{ width: '85%' }}>
            <LinearWithValueLabel progress={progress} />
        </div>
        <button
            type="button"
            onClick={progress === 100 ? handleSubmit : next}
            className="p-2 mr-1 bg-green-400 rounded-lg hover:bg-green-300
        "
            to="/result"
        >
            <button type="button" className="button next">
                <span className="mr-1">{progress === 100 ? 'Submit' : 'next question'}</span>
                <span className="icon">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </span>
            </button>
        </button>
    </div>
);

export default ProgressBar;
