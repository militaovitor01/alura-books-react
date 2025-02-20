import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteFavorito, getFavoritos } from "../servicos/favoritos";
import livroImg from '../../images/livro.png'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosAPI = await getFavoritos();
    setFavoritos(favoritosAPI);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  async function deletarFavorito (id){
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro de ${id} deletado!`)
  }

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão os seus livros favoritos!</Titulo>
        <ResultadoContainer>
          {favoritos.length !== 0
            ? favoritos.map((favorito) => (
                <Resultado onClick={()=> deletarFavorito(favorito.id)}>
                  <p>{favorito.nome}</p>
                  <img src={livroImg} />
                </Resultado>
              ))
            : null}
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
