import React, { useEffect, useState } from 'react';
import './Timer.css'

function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();
        let nextYear = yyyy + 1;
        let dayMonth = "09/30/";
        let birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }

        const countDown = new Date(birthday).getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDown - now;

            setDays(Math.floor(distance / day));
            setHours(Math.floor((distance % day) / hour));
            setMinutes(Math.floor((distance % hour) / minute));
            setSeconds(Math.floor((distance % minute) / second));

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className="container" style={{ color: 'white' }}>
                <div id="countdown">
                    <ul>
                        <li className='list1'><span id="days">{days}</span>DAYS</li>
                        <li className='list1'><span id="hours">{hours}</span>HOURS</li>
                        <li className='list2'><span id="minutes">{minutes}</span>MINUTES</li>
                        <li className='list2'><span id="seconds">{seconds} </span>SECONDS</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Timer;
