import React from 'react';
import * as S from "./stytle";
import { buttonProps } from './type';

export default function Button({children, onClick}: buttonProps) {
  return (
    <S.Button onClick={onClick}>{children}</S.Button>
  )
}
