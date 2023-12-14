//using bootstrap so dependencies get a chance to load up first
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//mount function to start the app
const mount = (ele) => {
    console.log(ele, 'inside of marketing bootstrap')
    ReactDOM.render(<App/>, ele)
};

// if we are in development mode and in running in isolation, call mount imediatly  
if(process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector('#dev-marketing-root');
    
    if(devRoot){
        console.log('hit')
        mount(devRoot);
    }
}

export { mount };