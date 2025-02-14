import styled from "styled-components";
import { livros } from "../Pesquisa/dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import livroCard from "../../images/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return(        
    <UltimosLancamentosContainer>
        <Titulo cor="#EB9B00" tamanhoFonte = "36px"
        >
            ÚLTIMOS LANÇAMENTOS
        </Titulo>

        <NovosLivrosContainer>
            {livros.map( livro => ( 
                <img src={livro.src} alt="Livros Novos"/>
            ))}
        </NovosLivrosContainer>

        <CardRecomenda
            titulo={"Talvez você se interesse por..."}
            subtitulo={"Angular 11"}
            descricao={"Construindo uma aplicação com a plataforma Google."}
            img={livroCard}
        />
    </UltimosLancamentosContainer>   
    )
}

export default UltimosLancamentos;