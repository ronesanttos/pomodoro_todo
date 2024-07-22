import { useState } from "react"
import Sobre from "../pages/Sobre"

const AddTarefas = () => {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const add = () => {
        setList(list.push(input))
        setList([...list])

    }

    const deleteTarefa = (id) => {
        let index = list.indexOf(list[id])
        if (index > -1) {
            setList(list.splice(index, 1))
        }
        setList([...list])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.trim() === "") {
            return alert("Adicione uma tarefa!")
        }

        add()
        setInput("")

    }

    return (
        <div className="container">

            {list.length <= 0 && <p>Não há tarefas...</p>}

            <ul className="tarefa">

                {list.length > 0 && <h1 className="h1-top">Tarefas para hoje!</h1>}

                {list.map((tarefa, i) => (
                    <li key={i} >
                        <span className="span-tarefa">{tarefa}</span>
                        <button className="btn-x" onClick={() => deleteTarefa(i)}>Excluir</button>
                    </li>
                ))}

                <input className="input-tarefa" type="text" placeholder="Adicone uma tarefa!" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSubmit} className="btn-green">Adicionar</button>
            </ul>

            <Sobre />
        </div >
    )
}

export default AddTarefas
