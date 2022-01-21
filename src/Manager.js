import React, { useState, useEffect } from 'react';
import './App.css';

const comments = [
    'noob', 'less noob', 'monke?', 'less monke?', 'it\'s ok to be average', 'ok, we can start conversation', 'smort', 'wow, slower','welcom in mensa club' , 'einstein\'d be proud', 'fucking genius', 'now you can save the world with your insane iq, congrats!'
];
const specialNums = [69, 420, 666, 2137];

const Manager = () => {
    const [iq, setIQ] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("iq") === null)
            localStorage.setItem("iq", 0);
        setIQ(parseInt(localStorage.getItem("iq")));
    }, []);

    useEffect(() => {
        if (localStorage.getItem("iq") !== iq)
            localStorage.setItem("iq", iq);
    }, [iq]);

    return (
        <div>

            <div>{iq}</div>
            <div>({specialNums.includes(parseInt(iq)) ? ' ͡° ͜ʖ ͡°' : parseInt(iq) >= comments.length * 20 ? comments[comments.length - 1] : comments[Math.floor(parseInt(iq) / 20)]})</div>
            <div className='btn-group'>
                <button onClick={() => setIQ(iq + Math.floor(Math.random() * 5 + 1))}>insrease iq</button>
                <button onClick={() => {
                    setIQ(0);
                }}>reset yur brain</button>
            </div>
        </div>
    );
};

export default Manager;