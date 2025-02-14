import Logo from "../Logo";
import ListaNavbar from "../ListaNavbar";
import ListaIcones from "../ListaIcones";
import styled from "styled-components";

const HeaderContainer = styled.header`    
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <ListaNavbar/>
            <ListaIcones/>   
        </HeaderContainer>       
    )
}

export default Header;