export const Turma = ({nome, children}) => {
    return (
        <>
            <h1>{nome}</h1>
            <ul>
                {children}
            </ul>
        </>
    );
}

export const Aluno = ({nome}) => {
    return (
        <li>{nome}</li>
    );
}