const Perfil = ({children}) => {
    return(
        <>
        <div className="w-full h-screen bg-myGrey-900 flex justify-center items-center font-Inter text-white">
            <div className="w-[400px] bg-myGrey-800 rounded-xl p-[40px]">
                <img src="https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar-padrao-imagem-de-usuario-de-midia-
                social-icone-de-avatar-cinza-silhueta-de-perfil-em-branco-ilustracao-vetorial_561158-3383.jpg?semt=ais_hybrid"
                 alt="Foto de Perfil" className="w-[100px] rounded-full m-auto"/>
                 <div className="text-center">
                    <h1 className="text-[28px] font-bold mt-4">Nagila Patricio</h1>
                    <h6 className="font-bold text-myGreen mb-4">Eusébio-CE - Brasil</h6>
                    <p>FullStack Developer</p>
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