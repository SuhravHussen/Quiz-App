import React, { Fragment } from 'react';
import Checkbox from '../common/Checkbox';

const Answers = ({ options = [], handleChange, input = true }) => (
    <div className="flex flex-wrap m-2 justify-evenly">
        {options.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
                {input ? (
                    <Checkbox
                        className="w-full sm:w-2/5 my-2.5 p-2.5 bg-indigo-100 rounded-lg hover:bg-blue-200"
                        text={option.title}
                        value={index}
                        checked={option.checked}
                        onChange={(e) => handleChange(e, index)}
                    />
                ) : (
                    <Checkbox
                        className={`w-full sm:w-2/5 my-2.5 p-2.5  rounded-lg hover:bg-blue-200 ${
                            // eslint-disable-next-line no-nested-ternary
                            option.correct ? 'bg-green-500' : option.checked ? 'bg-red-600' : null
                        }`}
                        text={option.title}
                        value={index}
                        defaultChecked={option.checked}
                        disabled
                    />
                )}
            </Fragment>
        ))}
    </div>
);
export default Answers;
