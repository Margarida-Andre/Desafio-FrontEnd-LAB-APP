import * as Yup from "yup";

export const salasValidation = Yup.object().shape({
  salas_funcionais: Yup.number().typeError("Campo obrigatório").min(0, 'O valor deve ser maior ou igual a zero').required('Campo obrigatório'),
  salas_nao_funcionais: Yup.number().typeError("Campo obrigatório").min(0, 'O valor deve ser maior ou igual a zero').required('Campo obrigatório'),
});