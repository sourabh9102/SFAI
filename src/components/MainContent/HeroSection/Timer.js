import React, { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function calculateTimeLeft() {
        const targetDate = new Date('2023-12-30');
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            // If the target date has passed, calculate time remaining from the current date
            const newTargetDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Set the target date to the next day
            return calculateTimeLeft(newTargetDate);
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <div style={{ color: 'white' }}>
            <div id="countdown">
                <ul>
                    <li className='list1' style={{ marginRight: '46px' }}>
                        <span id="days" style={{ textAlign: 'center' }}>{timeLeft.days}</span>
                        <span className='timerText'>DAYS</span></li>
                    <li className='list1' style={{ marginRight: '46px' }}>
                        <span id="hours" style={{ textAlign: 'center' }}>{timeLeft.hours} </span>
                        <span className='timerText' style={{ marginLeft: '32px' }}>HOURS</span></li>
                    <li className='list2' style={{ marginRight: '46px' }}>
                        <span id="minutes" style={{ textAlign: 'center' }}>{timeLeft.minutes} </span>
                        <span className='timerText' style={{ marginLeft: '27px' }}>MINUTES</span></li>
                    <li className='list2'>
                        <span id="seconds" style={{ textAlign: 'center' }}>{timeLeft.seconds} </span>
                        <span className='timerText' style={{ marginLeft: '25px' }}>SECONDS</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Timer;
