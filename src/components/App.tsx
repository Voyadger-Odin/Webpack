import React, {useState} from 'react';
import './App.scss';
import {Link, Outlet} from "react-router-dom";
import IconPNG from '../assets/icon.png';
import IconSVG from '../assets/icon.svg';

export const App = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev - 1);
    }

    return (
        <div>
            <div>
                <img src={IconPNG} alt=""/>
                <IconSVG width={50} height={50}/>
            </div>

            <h1>Count: {count}</h1>
            <br/>
            <button onClick={increment}>Increment <span>SPAN</span></button>
            <button onClick={decrement}>Decrement</button>

            <br/><br/>

            <Link to={'/about'}>about</Link><br/>
            <Link to={'/shop'}>shop</Link><br/>

            <br/><br/><br/>
            <Outlet/>
        </div>
    );
};