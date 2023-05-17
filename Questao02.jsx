import { useEffect, useState } from "react"
    const Questao02 = () => {
    //link para imagem de frente do pokemon
    const imgFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    //link para imagem de tras do pokemon
    const imgTras = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    //variável que serve para saber se é para mostrar a frente ou tras
    const [turn, setTurn]= useState(true)
    //variável de estado para armazenar o link (frente ou costas)
    const [Imagem, setImg] = useState(imgFrente)
                
    useEffect(
        //se turn for true, mostra a frente, se não, mostra as costas
        //sempre que turn mudar, o useEffect é chamado
        //sempre que o useEffect é chamado, a imagem é atualizada
        //sempre que a imagem é atualizada, o componente é renderizado
        ()=>{
            if (turn){
                    setImg(()=>imgFrente)
                }
            else {
                    setImg(()=>imgTras)
                }
            },
            [turn]
        )
        
        return (
            //botão que altera o valor de turn
            <>
            <h1>Questão 02</h1>
            <img 
            src={Imagem}
            //imagem é atualizada de acordo com o valor de turn
            alt="Pokemon"
            style={{ width: "400px" }}
            />
            
            <button onClick={
                //sempre que o botão for clicado, o valor de turn é alterado
                    ()=>setTurn( ()=>!turn )
                }>
                Virar
            </button>
            </>
        )
    }

    export default Questao02
                