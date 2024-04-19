import React, { useCallback, useEffect, useState } from 'react';
import * as S from "./style";
import { table } from './type';
import { dataHeadProps } from '../../utils/type';
import { infraestruturaProps } from '../../context/type';
import { useInfraestruturas } from '../../context/useInfraestrutura';
import {  toast, ToastContainer } from "react-toastify";
import { salasValidation } from './validation';
import "react-toastify/dist/ReactToastify.css";
import Button from '../Button';


export default function Table({dataThead, dataBody, title}: table) {

  const {infraestruturas, updateInfraestrutura} = useInfraestruturas();
  const [inputs, setInputs] = useState<{ [key: string]: string }[]>([]);

  useEffect(() => {
    if (infraestruturas) {
      const newInputs = infraestruturas.map((infraestrutura) => ({
        id: infraestrutura.id,
        salas_funcionais: infraestrutura.salas_funcionais,
        salas_nao_funcionais: infraestrutura.salas_nao_funcionais,
        somaSalas: (infraestrutura.salas_funcionais) + (infraestrutura.salas_nao_funcionais)
      }));
      setInputs(newInputs);
    }
  }, [infraestruturas]);
  
  const handleInputChange = (index: number, fieldName: string, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = {
      ...newInputs[index],
      [fieldName]: value
    };

    setInputs(newInputs);

    salasValidation.validate(newInputs[index], { abortEarly: false })
    .then(() => {
      setInputs(newInputs);
    })
    .catch((errors) => {
      const errorMessage = errors.errors.join('\n');
      toast.error(errorMessage);
    });

  };

  const submit = useCallback(async () => {
    if (inputs) {
      try {
       await updateInfraestrutura(inputs);
        toast.success("Item atualizado com sucesso!");
        if (infraestruturas) {
          const updatedTotal = inputs.map((infraestrutura) => ({
            id: infraestrutura.id,
            salas_funcionais: infraestrutura.salas_funcionais,
            salas_nao_funcionais: infraestrutura.salas_nao_funcionais,
            somaSalas: String(Number(infraestrutura.salas_funcionais) + Number(infraestrutura.salas_nao_funcionais))
          }));
          setInputs(updatedTotal);
        }
      } catch (error) {
        toast.error("Erro ao atualizar item.");
      }
    }
  }, [inputs, updateInfraestrutura, infraestruturas]);

  return (
    <>
    <ToastContainer />
    <S.Content>
    <S.ContainerTitle>
      <S.Title>{title}</S.Title>
      </S.ContainerTitle>
    <S.Table>
      <S.Thead>
      <S.Tr>
       {dataThead.map((item: dataHeadProps) =>(
        <S.Th key={item.id}>{item.designacao}</S.Th>
       )
       )}
       </S.Tr>
      </S.Thead>
      <S.Tbody>
        {dataBody.map((item: infraestruturaProps, index)=>(
          <S.Tr key={item.id}>
          <S.Td>{item.designacao}</S.Td>
          <S.Td>
            <S.Input 
          type="number" 
          value={inputs[index]?.salas_funcionais} 
          onChange={(e) => 
            handleInputChange(index, 'salas_funcionais', e.target.value)
          }
            disabled={item.salas_funcionais === 0}/>
          </S.Td>
          
          <S.Td>
          <S.Input 
          type="number" 
          value={inputs[index]?.salas_nao_funcionais} 
          onChange={(e) => 
            handleInputChange(index, 'salas_nao_funcionais', e.target.value)
          }
          disabled={item.salas_nao_funcionais === 0}/>
          </S.Td>
          <S.Td><S.Input type="number" value={inputs[index]?.somaSalas} disabled={item.salas_funcionais + item.salas_nao_funcionais !== 0}/></S.Td>
          </S.Tr>
        ))}
        </S.Tbody>
        
    </S.Table>
    </S.Content>
    
    <S.ContainerButton>
      <Button children="Actualizar" onClick={submit}/>
    </S.ContainerButton>
    </>
  )
}

