import ControlsTime from "./ControlsTime"
import Time from "./Time"

import { useState, useEffect } from "react";

const ConfigTime = () => {

    const [milliseconds, setMilliseconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false)

    const formataTimer = () => {
        const minutos = ("2" + Math.floor((milliseconds / 60000) % 60)).slice(-2)
        const segundos = ("0" + Math.floor((milliseconds / 1000) % 60)).slice(-2);
        const centesimos = ("0" + Math.floor((milliseconds / 10) % 100)).slice(-2);

        return `${minutos}:${segundos}:${centesimos}`
    }

    const startTimer = (interval) => {
        return setInterval(() => {
            setMilliseconds((milliseconds) => milliseconds + 10)
        }, 10)
    }

    const stopTimer = (interval) => {
        clearInterval(interval)
        return interval
    }

    const resetTimer = () => {
        setMilliseconds(0)
        setTimerOn(false)
    }


    useEffect(() => {
        let interval = null

        if (timerOn) {
            interval = startTimer(interval)
        }
        else {
            interval = stopTimer(interval)
        }

        return () => stopTimer(interval)
    }, [timerOn])

    return (
        <div>
            <Time time={formataTimer()} />
            <ControlsTime timerOn={timerOn} onStart={() => setTimerOn(true)} onStop={() => setTimerOn(false)} onReset={resetTimer} />
        </div>
    )
}

export default ConfigTime
