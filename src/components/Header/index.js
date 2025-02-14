import "./styles.css"
import Logo from "../Logo";
import ListaNavbar from "../ListaNavbar";
import ListaIcones from "../ListaIcones";

function Header() {
    return(
        <header className="App-header">
            <Logo/>
            <ListaNavbar/>
            <ListaIcones/>   
        </header>
    )
}

export default Header;