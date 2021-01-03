import React, {useState, useEffect} from 'react';
import './CardContainer.scss';
import Card from '../Card/Card';

const CardContainer = () => {
    const [second, setSeconds] = useState()
    const [minute, setMinutes] = useState()
    const [hour, setHours] = useState()
    const [day, setDays] = useState()

    function CountdownTimer() {
        let theEvent = new Date("Mar 07 2021 00:00:00");
        let _second = 1000;
        let _minute = _second * 60;
        let _hour = _minute * 60;
        let _day = _hour * 24;
        let timer;
    
        function setTime() {
            let now = new Date();
            let distance = theEvent - now;
            if (distance < 0) {
                clearInterval(timer);
                return alert("Cumpleañito");
            }
            let days = Math.floor(distance / _day);
            let hours = Math.floor((distance % _day) / _hour);
            let minutes = Math.floor((distance % _hour) / _minute);
            let seconds = Math.floor((distance % _minute) / _second);
    
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }
        timer = setInterval(setTime, 1000);
    }

    useEffect(() => {
        CountdownTimer()
    }, [])

    return (
        <section className="card-container">
               <Card contdown={day} title="Días"/>
               <Card contdown={hour} title="Horas"/>
               <Card contdown={minute} title="Minutos"/>
               <Card contdown={second} title="Segundos"/>
        </section>
    )
}

export default CardContainer;
