import styled from 'styled-components'

export const Container = styled.header`
    max-width: 1120px;
    height: 15rem;
    background: var(--background);
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;

`;


export const ContentTop = styled.div`
    background: var(--grey);
    padding: 1rem 3rem 3rem 3rem;
    display: flex;
    width: 100%;
    height: 15%;
    max-width: 1120px;
    justify-content:space-between;

    p{ 
      text-align: center;
    }
    
`;
export const ContentMiddle = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 30%;
    margin-top: 1rem;
    padding: 0 3rem;
    margin-bottom: 1rem;

    div{
    }

    /* img{ 
      display: block;
      margin: auto;
      width: 55%;
    } */
    
`;

export const Nav = styled.nav`
    background: var(--red);
    padding: 0 8rem;
    display: flex;
    justify-content:space-between;
    h1 {
      color: #FFF;
      margin-left: 1rem;
  }
    p{ 
      text-align: center;
  }

`;
