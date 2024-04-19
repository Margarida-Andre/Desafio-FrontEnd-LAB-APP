import styled from "styled-components";

export const Button = styled.button`
 padding: 0.8rem 2rem;
 background-color: ${({theme}) => theme.color.blue};
 color: ${({theme}) => theme.color.white};
 font-size: ${({theme}) => theme.size.s2};
 border: none;
 transition: ease-out;
 cursor: pointer;
 border-radius: ${({theme}) => theme.size.s5};

 &:hover{
  filter: brightness(0.9);
  transition: ease-in;
 }
`;