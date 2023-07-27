import React, { useEffect, useState } from "react"

const Questao03 = () => {
    //variaveis de estado
    const [maiorPop, setMaiorPop] = useState("")
    const [menorPop, setMenorPop] = useState("")
    const [data, setData] = useState([])

    useEffect(
        //função que será executada quando o componente for montado
        //ela faz uma requisição para a API e armazena os dados no estado
        //sempre que o estado é atualizado, o componente é renderizado
        () => {
            //requisição para a API
            fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
                .then(
                    (response) => {
                        return response.json()
                    }
                )
                .then(
                    //função que é executada quando a resposta da API chega
                    //ela armazena os dados no estado
                    //ela também calcula a maior e a menor população
                    //ela também armazena a capital com maior e menor população
                    //ela também armazena os dados no estado
                    (data) => {
                    let i = 0
                    let maior = data[0].population
                    let menor = data[0].population
                    let maiorIndex = 0
                    let menorIndex = 0
                    for (i = 0; i < data.length; i++) {
                        if (data[i].population > maior) {
                            maior = data[i].population
                            maiorIndex = i
                        }
                        if (data[i].population < menor) {
                            menor = data[i].population
                            menorIndex = i
                        }
                    }
                    setMaiorPop(data[maiorIndex].capital)
                    setMenorPop(data[menorIndex].capital)
                    setData(data)
                }
                )
                .catch(
                    //função que é executada quando a requisição falha
                    //ela mostra o erro no console
                    (error) => {
                        console.log(error)
                    }
                )
        }, []
    )

    return (
        //tabela que mostra os dados
        <div>
            <h1>Questão 03</h1>
            <h2>Capitais com maior e menor população</h2>
            <h3>Maior: {maiorPop}</h3>
            <h3>Menor: {menorPop}</h3>
        </div>
    )
}

export default Questao03