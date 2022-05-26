import { useState, useEffect } from 'react'

function TimerComponent(props) {
    // console.log("props: ", props);
    const getTime = (timeLeft) => {
        let time = timeLeft;
        let timer = {};

        if (time > 0) {
            timer = {
                hours: Math.floor((time / (60 * 60))),
                minutes: Math.floor((time / 60) % 60),
                seconds: Math.floor(time % 60)
            };
        }
        return timer;
    }
    const [timeLeft, setTimeLeft] = useState(props.timeLeft);
    const [timer, setTimer] = useState(getTime(props.timeLeft));

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft <= 0) return props.handleSubmit();
            localStorage.setItem("timeLeft", timeLeft - 1)
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        setTimer(getTime(timeLeft));
    }, [timeLeft])

    return (
        <div>
            <span>
                {timer["hours"] / 10 < 1 ? "0" + timer["hours"] : timer["hours"]}{":"}
            </span>
            <span>
                {timer["minutes"] / 10 < 1 ? "0" + timer["minutes"] : timer["minutes"]}{":"}
            </span>
            <span>
                {timer["seconds"] / 10 < 1 ? "0" + timer["seconds"] : timer["seconds"]}
            </span>
        </div>
    )
}

export { TimerComponent }