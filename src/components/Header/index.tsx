import { Container, ContentTop, Nav ,ContentMiddle } from './styles';

export function Header(){
  return(
    <header>
    <Container>
      <ContentTop>
      <div>
        <h4>Empresa</h4>
      </div>
      <div>
        <p>Entregas Gratuitas em Portugal Continental a partir de 100€</p>
      </div>
      <div id="login">
        <h4>Login</h4>
      </div>
      </ContentTop>
      <ContentMiddle>
      <div>
          <p>Contacto</p>
          <h4>965 983 999 | 210 000 000</h4>
          <img src="/cunho.svg" alt="cunho portugues"/>
          <p>Carrinho</p>
          <h4>0 Item(s) | 0,00€</h4>
        </div>
      </ContentMiddle>
        <Nav>
          <h1>Nav</h1>
          <h1>Nav</h1>
          <h1>Nav</h1>
          <h1>Nav</h1>
          <h1>Nav</h1>
          <h1>Nav</h1>
          <h1>Nav</h1>
          <h1>Nav</h1>
        </Nav>
        </Container>
    </header>
    
  )
}