import styled from "styled-components";
import logo from "../../images/logo.svg"

const LogoContainer = styled.div`
  display: flex;
  gap: 0.5em;   
  font-size: 30px;
`
function Logo(){   
    return(
        <LogoContainer>
          
          <img src={logo} alt="Logo AluraBooks"></img>
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;