import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <h1> hey from contianrer app.js</h1>
                <MarketingApp/>
            </div>
        </BrowserRouter>
    );
};