import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from '@mui/material/Slider';
import React from 'react';
import './progressBar.css';

const ProgressBar = () => (
    <div className="progressBar bg-green-50 w-11/12 h-16 fixed left-0 right-0 bottom-5 mx-auto my-0 flex justify-between items-center border-green-400 border-opacity-100 border rounded-lg">
        <div className="backButton w-12 h-12 rounded-lg bg-green-400 flex justify-center items-center cursor-pointer ml-3 hover:bg-green-300 ">
            <span className="icon">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </span>
        </div>
        <div style={{ width: '85%' }}>
            <Slider
                color="secondary"
                disableSwap
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
        </div>
        <a
            className="p-2 mr-1 bg-green-400 rounded-lg hover:bg-green-300
        "
            href="etrtr"
        >
            <button type="button" className="button next">
                <span className="mr-1">Next Question</span>
                <span className="icon">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </span>
            </button>
        </a>
    </div>
);

export default ProgressBar;
