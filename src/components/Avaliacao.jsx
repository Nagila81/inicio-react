import {useState} from "react";

const Avaliacao = () => {
    
    const [ativo, setAtivo] = useState(true)
    const [posicao, setPosicao] = useState(0);

    function avaliar(){
        if(posicao == 0){
            alert("Escolha uma nota")
            return;
        }
        setAtivo(true)
    }
    
    return ( 
        <>
        <div className="flex items-center justify-center h-screen bg-pink-600">
            <div className={`w-[300px] bg-white rounded-2xl p-5 ${ ativo && "hidden"}`}>
              <h1 className="text-xl font-bold">Como você nos avalia</h1>
              <p className="my-4">Sua opnião é muito importante para nós, por favor deixe sua nota</p>
            <div className="grid grid-cols-5 gap-3 *:w-[40px] *:h-[40px] *:flex *:justify-center *:items-center *:bg-pink-200 
            *:text-pink-900 *:rounded-full *:font-bold">
                <button 
                onClick={() => setPosicao(1)} 
                className={`${posicao == 1 && "!text-white !bg-pink-500"}`}
                >
                    1
                </button>
                <button 
                onClick={() => setPosicao(2)} 
                className={`${posicao == 2 && "!text-white !bg-pink-500"}`}
                >
                    2
                </button>
                <button 
                onClick={() => setPosicao(3)} 
                className={`${posicao == 3 && "!text-white !bg-pink-500"}`}
                >
                    3
                </button>
                <button 
                onClick={() => setPosicao(4)} 
                className={`${posicao == 4 && "!text-white !bg-pink-500"}`}
                >
                    4
                </button>
                <button 
                onClick={() => setPosicao(5)} 
                className={`${posicao == 5 && "!text-white !bg-pink-500"}`}
                >
                    5
                </button>
            </div>
            <button 
            onClick={avaliar}
            className="w-full text-white h-[40px] bg-pink-600 font-bold rounded-full mt-4"
            >
                Enviar
                </button>
            </div>
            <div className={`w-[300px] bg-white rounded-2xl p-5 text-center ${ ativo || "hidden"}`}>
                <h1>Obrigado pela sua avaliação</h1>
                <h6 className="text-xl font-bold">{posicao} de 5</h6>
                {
                    posicao != 5 && (
                        <p onClick={() => setAtivo(false)} className="text-pink-600 cursor-pointer hover:underline">Voltar</p>
                    )
                }
            </div>
        </div>
        </>
     );
}
 
export default Avaliacao;