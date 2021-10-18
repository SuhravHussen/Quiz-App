import React from 'react';
import Checkbox from '../common/Checkbox';

const Answers = ({ options = [], handleChange }) => (
    // const correct = {
    //     background: '#4BB543',
    //     fontWeight: 600,
    // };

    // const wrong = {
    //     background: 'red',
    //     fontWeight: 600,
    // };

    <div className="flex flex-wrap m-2 justify-evenly">
        {options.map((option, index) => (
            <Checkbox
                className="w-full sm:w-2/5 my-2.5 p-2.5 bg-indigo-100 rounded-lg hover:bg-blue-200"
                text={option.title}
                value={index}
                checked={option.checked}
                onChange={(e) => handleChange(e, index)}
            />
        ))}
    </div>
);
export default Answers;
