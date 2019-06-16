import React from 'react';
import Stat from "./Stat";

const randNum1 = Math.floor(Math.random() * 17)
const randNum2 = Math.floor(Math.random() * 10)
const randNum3 = Math.floor(Math.random() * 21)

const Stats = () => {
    {
        return (
            <section id='stats'>
                <Stat counter={randNum1} title="Oddanych worków"/>
                <Stat counter={randNum2} title="Odebranch worków"/>
                <Stat counter={randNum3} title="Dostarczonych worków"/>
            </section>
        );
    }
}

export default Stats;