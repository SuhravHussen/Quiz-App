import React from 'react';

const Video = ({ title, id, noq }) => (
    <div className="w-full sm:w-auto  max-w-400px p-2.5 bg-gray-100 border-gray-300 cursor-pointer rounded-md pb-4 hover:shadow-lg mb-6 sm:m-10">
        <img
            className="w-full object-cover"
            src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
        />
        <p className="text-base font-medium my-2 overflow-hidden line-clamp-3">{title}</p>
        <div className="flex flex-col sm:flex-row justify-between pr-16">
            <p className="text-sm">{noq}</p>
            <p>Total points : {noq * 5}</p>
        </div>
    </div>
);

export default Video;
