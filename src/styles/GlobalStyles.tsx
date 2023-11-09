import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }  



  main{
    margin-top:100px;
    border:5px solid #ccc;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1; 
  }

  .container{
    display:flex;
    flex-direction:column;
    min-height: 100vh;
  }
  
`;

export default GlobalStyle;
