import React from 'react';
import Layout from '../../Components/Layout/Layout';
import Analysis from '../../Components/Result/Analysis';
import Summary from '../../Components/Result/Summary';

const Result = () => (
    <Layout>
        <Summary />
        <Analysis />
    </Layout>
);

export default Result;
