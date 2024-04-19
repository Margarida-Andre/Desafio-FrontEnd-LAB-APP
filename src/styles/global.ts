import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${(({theme}) => css`
*{
  margin:0;
  padding:0;
}
html,body{
margin: 0;
font-family: ${theme.font.family};
background: ${theme.color.greySmall2};
font-size: ${theme.size.s2};
}

::-webkit-scrollbar{
  width: ${theme.size.s4};
}

::-webkit-scrollbar-track{
  background: ${theme.color.greyMedium1};
  border-radius: ${theme.size.s1};
}
`)}
`;