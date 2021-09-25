import React from 'react';
import Layout from '../../Components/Layout/Layout';
import Answers from '../../Components/Quiz/Answers';
import MiniPlayer from '../../Components/Quiz/MiniPlayer';
import ProgressBar from '../../Components/Quiz/ProgressBar';

const Quiz = () => (
    <Layout>
        <h1 className="text-3xl tracking-wider">Pick three of your favorite star wars films.</h1>
        <h4 className="text-gray-500 mt-3 border-b-2 border-gray-200 pb-3 ">
            Question can have multiple answers{' '}
        </h4>
        <Answers />
        <ProgressBar />
        <MiniPlayer />
    </Layout>
);

export default Quiz;
