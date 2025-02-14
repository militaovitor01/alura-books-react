import imagemPerfil from "../../images/perfil.svg";
import imagemSacola from "../../images/sacola.svg";
import "./styles.css"

const headerIcones = [ imagemSacola, imagemPerfil];

function ListaIcones() {
  return (
    <ul className="listaIcones">
      {headerIcones.map((icone) => (
        <li className="listaIcones__item">
          <img src={icone} alt="Icones"></img>
        </li>
      ))}
    </ul>
  );
}

export default ListaIcones;
