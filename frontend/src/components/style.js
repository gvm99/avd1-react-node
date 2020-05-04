import styled from 'styled-components';

export const Container = styled.div`
  display: flex; /* Informa que o componente sera do tipo flex */
  flex-direction: column; /* Indica que a horientação será em coluna (vertical)*/
  align-items: center; /* alinha no centro horizontal*/
  justify-content: center; /* alinha no centro vertical */
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 800;
  margin: 1em 0;
`;

export const Button = styled.button`
  /* Transforma o texto em maiusculo */
  text-transform: uppercase; 
  font-weight: 700; /* Deixa o texto em negrito */
  padding: 0.8em;
  margin: 1em;
  border: none;
  border-radius: 8px;
  color: #fff;
  /* se o bottao possuir a proprieda add ele recebe uma cor, senão recebe outra*/
  background: ${props => (props.tipo === "add" ? "#47cf73" : "#F05D5E")};

  /* o mesmo que o anterior, mas para botões cujo mouse está em cima */
  &:hover {
    background: ${props => (props.tipo === "add" ? "#248c46" : "#d31415")};
  }
`;