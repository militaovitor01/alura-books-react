import styled from "styled-components";
import imagemPerfil from "../../images/perfil.svg";
import imagemSacola from "../../images/sacola.svg";

const headerIcones = [imagemSacola, imagemPerfil];
const UlIcones = styled.ul`
  display: flex;
  gap: 1em;
`
const LiIcone = styled.li`
  cursor: pointer;
`

function ListaIcones() {
  return (
    <UlIcones>
      {headerIcones.map((icone) => (
        <LiIcone>
          <img src={icone} alt="Icones"></img>
        </LiIcone>
      ))}
    </UlIcones>
  );
}

export default ListaIcones;
