import styled from "styled-components";

const UlNavbar = styled.ul`
  display: flex;
  gap: 1em;
`

const ListaNavbarItens = styled.li`
  font-size: 16px;
  font-weight: 500;
  height: 100%;
  cursor: pointer;
`
const navbarItens = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function ListaNavbar () {
    return (
        <UlNavbar>
          {navbarItens.map((texto) => (
            <ListaNavbarItens>             
              <p>{texto}</p>
            </ListaNavbarItens>
          ))}
        </UlNavbar>
    )
}

export default ListaNavbar;