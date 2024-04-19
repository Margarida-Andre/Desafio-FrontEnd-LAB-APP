import { Sidebar } from '../../components/sidebar/style'
import * as S from "./style";
import Table from '../../components/table';
import dataHead from "../../utils/dataThead.json";
import { useInfraestruturas } from '../../context/useInfraestrutura';


export default function Home() {
  const {infraestruturas} = useInfraestruturas();
  
  return (
    <S.Wrapper>

    <Sidebar/>

    <S.Content>
      <Table 
      title="Editar Escola Angolana"
      dataThead={dataHead.head} 
      dataBody={infraestruturas} 
      />
    </S.Content>
        
    </S.Wrapper>
  )
}
