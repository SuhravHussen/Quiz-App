import React from 'react';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => (
    <>
        <Nav />
        <main className="w-full py-16 pt-0">
            <div className="w-11/12 my-8 mx-auto">{children}</div>
        </main>
    </>
);

export default Layout;
