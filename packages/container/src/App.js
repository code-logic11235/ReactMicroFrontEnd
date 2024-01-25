import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
    StylesProvider,
    createGenerateClassName,
    } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';


// fixes css class name colision
const generateClassName = createGenerateClassName({ 
    productionPrefix: 'container', 
    });

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider>
                    <div>
                        <Header/>
                        <h1> hey from contianrer app.js</h1>
                        <MarketingApp/>
                    </div>
            </StylesProvider>
        </BrowserRouter>
    );
};