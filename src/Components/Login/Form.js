import React from 'react';

const Form = ({ children, className, ...rest }) => (
    <form className={`flex flex-col px-0 py-8 ${className}`} {...rest}>
        {children}
    </form>
);

export default Form;
