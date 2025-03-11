export const CardDefault = ({urlImagem, titulo, descricao}) => {
    return(
        <div>
            <img src={urlImagem} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    )
}