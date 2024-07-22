import { useState, useEffect } from "react"

const Time = ({ time }) => {

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [userTime, setUserTime] = useState(25)

    const handleChange = (e) => {
        setUserTime(e.target.value)
        setMinutes(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setIsActive(!isActive)
    }
    const reset = () => {
        setIsActive(false)
        setMinutes(userTime)
        setSeconds(0)
    }
    useEffect(() => {
        let interval;

        if (isActive && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
                else {
                    setSeconds(seconds - 1)
                }
            }, 1000)
        } else if (minutes === 0 && seconds === 0) {
            alert("Tempo esgotado!!!")
            reset()
        }
        else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, minutes, seconds])

    return (
        <div className="container">
            <h1>Pomodoro</h1>

            <div className="time">
                {String(minutes).padStart(2, "0")} : {" "}
                {String(seconds).padStart(2, "0")}
            </div>

            <form >
                <h3>Definir tempo(minutos)</h3>
                <input type="number" value={userTime} onChange={handleChange} disabled={isActive} />
                <button onClick={handleClick} className={isActive ? "btn-red" : "btn-green"}>{isActive ? "Pausar" : "Iniciar"}</button>
                <button onClick={reset} className="btn-reiniciar">Reiniciar</button>
            </form>
        </div>
    )
}

export default Time
