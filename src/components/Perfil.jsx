const Perfil = ({fotoPerfil, titulo, nome, localizacao, cargo, children}) => {
    return(
        <>
        <div className="flex items-center justify-center w-full h-screen text-white bg-myGrey-900 font-Inter">
            <div className="w-[400px] bg-myGrey-800 rounded-xl p-[40px]">
                <img src={fotoPerfil} alt={titulo} className="w-[100px] rounded-full m-auto"/>
                 <div className="text-center">
                    <h1 className="text-[28px] font-bold mt-4">{nome}</h1>
                    <h6 className="mb-4 font-bold text-myGreen">{localizacao}</h6>
                    <p>{cargo}</p>
                 </div>
                 <div className="mt-6">
                    {children}
                 </div>
            </div>
        </div>
        </>
    )
}

export default Perfil;