import "./styles.css"

const navbarItens = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function ListaNavbar () {
    return (
        <ul className="listaNavbar">
          {navbarItens.map((texto) => (
            <li className="listaNavbar__itens">             
              <p>{texto}</p>
            </li>
          ))}
        </ul>
    )
}

export default ListaNavbar;