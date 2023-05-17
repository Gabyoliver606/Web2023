import React from 'react'

const Questao01X = () => {
    // Vetor que será usado para armazenar os nomes dos alunos
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
    ]

    return (
        // Componente que mostra os dados dos alunos usando o vetor alunos
        <div>
            <h1>Questão 01</h1>
            <Questao01Y nome={alunos[0].nome} ap1={alunos[0].notas.ap1} ap2={alunos[0].notas.ap2} />
            <Questao01Y nome={alunos[1].nome} ap1={alunos[1].notas.ap1} ap2={alunos[1].notas.ap2} />
            <Questao01Y nome={alunos[2].nome} ap1={alunos[2].notas.ap1} ap2={alunos[2].notas.ap2} />
        </div>
    )
}

const Questao01Y = ({ nome, ap1, ap2 }) => {
    // Variável de estado que armazena a média do aluno
    const [media, setMedia] = React.useState(0)

    React.useEffect(() => {
        // Atualiza o valor da média quando os valores de ap1 e ap2 mudam
        setMedia((ap1 + ap2) / 2)
    }, [])
        
    return (
        // Componente que mostra o nome e a média do aluno
        <div>
            <h2>Nome: {nome}</h2>
            <h2>Média: {media}</h2>
        </div>
    )
}

export default Questao01X 

