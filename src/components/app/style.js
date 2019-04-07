import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  a {
  text-decoration: none;
  }
  body {
    font-family: 'Roboto';
  }
  .alignnone {
    margin-left: 10%;
  }
  #quiz_130 {
      // Изменение высоты iframe, изначально задана очень маленькая величина и не корректно отображается на большом экране
    height: 900px;
  }
  @media(max-width: 500px)  {
    #quiz_130 {
      height: 500px;
    }
  }
`;
