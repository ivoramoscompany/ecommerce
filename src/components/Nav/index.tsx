import { Container, Content } from './styles';

export function Nav(){
  return(
    <header>
    <Container>
      <h4>Sobre Nós</h4>
      <h4>Contactos</h4>
      <p>Entregas Gratuitas em Portugal Continental a partir de 100€</p>

      <h4>Login</h4>
    </Container>
        <Content>
        <div>
          <img src="/vercel.svg" alt="cunho portugues"/>
          <h1>Header</h1>
        </div>
        </Content>
      </header>
    
  )
}