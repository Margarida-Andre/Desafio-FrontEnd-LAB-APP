import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../components/sidebar/style'
import * as S from "./style";
import Table from '../../components/table';
import dataHead from "../../utils/dataThead.json";
import { useInfraestruturas } from '../../context/useInfraestrutura';
import { Button } from '../../components/Button/stytle';


export default function Home() {
  const {infraestruturas, updateInfraestrutura} = useInfraestruturas();
  
  return (
    <S.Wrapper>

    <Sidebar/>

    <S.Content>
      <S.Title></S.Title>
      <Table 
      dataThead={dataHead.head} 
      dataBody={infraestruturas} 
      />
    </S.Content>
        
    </S.Wrapper>
  )
}
