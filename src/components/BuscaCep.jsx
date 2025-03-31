import {useEffect, useState } from "react";

const BuscaCep = () => {
    const [cep, setCep] = useState("");
    const [turnos, setTurnos] = useState([]);
    const [cursos, setCursos] = useState([
        {
            turma: "FS22",
            turno: "Manha"
        },
        {
            turma: "GT01",
            turno: "Tarde"
        },
        {
            turma: "FS19",
            turno: "Noite"
        },
    ]);

    const [cursosFiltrados, setCursosFiltrados] = useState([]);

    function buscarDados () {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
        })
    }

    function mudaTurnos(turno) {
        if (turnos.includes(turno)) {
            setTurnos([...turnos.filter(t => t != turno)])
        } else {
            setTurnos([...turnos, turno])
        }
    }

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products`)
    //         .then(response => response.json())
    //         .then((response) => {
    //             console.log(response);
    //         })
    // }, [])

    useEffect(() => {
        if (cep.length == 8) {
            buscarDados();
        }
    }, [cep])

    // useEffect(() => {
    //     mostrarCursos(turnos);
    // }, [turnos])

    useEffect(() => {
        if(turnos.length > 0){
            setCursosFiltrados([...cursos.filter(curso => turnos.includes(curso.turno))])
        }else{
            setCursosFiltrados([])
        }
    }, [turnos])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* <input
                type="text"
                placeholder="cep"
                className="border border-black"
                onChange={(event) => setCep(event.target.value)}
            />
            <button onClick={buscarDados}>buscar</button> */}
            Turnos
            <ul>
                <li>
                    <label htmlFor="Manha">
                        <input
                            type="checkbox"
                            id="Manha"
                            value={"Manha"}
                            onChange={(event) => mudaTurnos(event.target.value)}
                        /> Manha
                    </label>
                </li>
                <li>
                    <label htmlFor="Tarde">
                        <input
                            type="checkbox"
                            id="Tarde"
                            value={"Tarde"}
                            onChange={(event) => mudaTurnos(event.target.value)}
                        /> Tarde
                    </label>
                </li>
                <li>
                    <label htmlFor="Noite">
                        <input
                            type="checkbox"
                            id="Noite"
                            value={"Noite"}
                            onChange={(event) => mudaTurnos(event.target.value)}
                        /> Noite
                    </label>
                </li>
            </ul>
            <div className="p-4 border border-black rounded">
                {
                    cursosFiltrados.length > 0 ? (
                        cursosFiltrados.map((curso, index) => (
                            <div key={index}>
                                {curso.turma} - {curso.turno}
                            </div>
                        ))
                    ) : (
                        cursos.map((curso, index) => (
                            <div key={index}>
                                {curso.turma} - {curso.turno}
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}
 
export default BuscaCep;