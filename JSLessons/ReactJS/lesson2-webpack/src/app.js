import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss'
import sekil from './img/img.jpg'


class App extends React.Component{
    render(){
        return(
            <>
            <img src={sekil} width="300" alt="" />
            </>
        )
    }
} 

ReactDOM.render(<App />,document.querySelector('#root'));