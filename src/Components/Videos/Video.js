import React from 'react';
import Thumbnail from '../../assets/3.jpg';

const Video = () => (
    <a href="fhjdhfd">
        <div className="w-full sm:w-auto  max-w-400px p-2.5 bg-gray-100 border-gray-300 cursor-pointer rounded-md pb-4 hover:shadow-lg mb-6 sm:m-10">
            <img className="w-full object-cover" src={Thumbnail} alt="Thumbnail" />
            <p className="text-base font-medium my-2 overflow-hidden line-clamp-3">
                #23 React Hooks Bangla - React useReducer Hook Bangla
            </p>
            <div className="flex flex-col sm:flex-row justify-between pr-16">
                <p className="text-sm">10 Questions</p>
                <p>Score: Not taken yet</p>
            </div>
        </div>
    </a>
);

export default Video;
