import React from 'react';

export default function Button({ children }) {
    return (
        <div className="bg-green-400 text-white px-5 py-2.5 font-semibold text-base uppercase flex justify-center items-center hover:bg-green-300 mt-3">
            <span>{children}</span>
        </div>
    );
}
