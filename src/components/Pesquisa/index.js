import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "../servicos/livros";
import { postFavorito } from "../servicos/favoritos";


const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const ResultadoPesquisa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() =>{
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosAPI = await getLivros()
        setLivros(livrosAPI)
    }

    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`Livro de ${id} inserido!`)
    }

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre o seu livro em nossa estante</Subtitulo>
            <Input
                placeholder="Procure por aqui a sua próxima aventura."
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            {livrosPesquisados.map(livro => (
                <ResultadoPesquisa onClick={() => insertFavorito(livro.id)}>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </ResultadoPesquisa>               
            ))}
            
        </PesquisaContainer>       
    )
}

export default Pesquisa;