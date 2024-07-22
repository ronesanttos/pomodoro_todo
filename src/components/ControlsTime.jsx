
const ControlsTime = ({ timerOn, onStart, onStop, onReset }) => {
    return (
        <div>

            {!timerOn && <button onClick={onStart}>Iniciar</button>
            }
            {timerOn && <button onClick={onStop}>Parar</button>}
            <button onClick={onReset}>Reiniciar</button>
        </div>
    )
}

export default ControlsTime
