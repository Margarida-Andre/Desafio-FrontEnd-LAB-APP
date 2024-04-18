import styled from "styled-components";

export const Table = styled.table`
  width: 80%;
`;


export const Thead = styled.thead`
  width: 100%;
  height: 62px;
  border-spacing: 0 0.5rem;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
 padding: 1rem 2rem;
 text-align: left;
 color: ${({theme})=>theme.color.black};
 background-color: ${({theme})=>theme.color.greyMedium1};
`;

export const Td = styled.td`
  padding: 1rem 2rem;
  color:  ${({theme})=>theme.color.black};
  background-color: ${({theme})=>theme.color.greySmall1};
`;

export const Input = styled.input`
  width: 80px;
  height: 37px;
  border: 1px solid ${({theme}) => theme.color.greyBig};
  padding: 0rem 1rem;
`;

export const ContainerButton = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({theme}) => theme.size.s3};
`;