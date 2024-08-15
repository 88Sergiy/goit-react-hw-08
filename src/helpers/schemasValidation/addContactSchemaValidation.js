import * as Yup from 'yup';

export const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name should have min 2 symbols')
    .max(16, 'Name should have max 16 symbols')
    .required('Here should be your full name'),
  number: Yup.string()
    .min(6, 'Please, specify phone in correct way')
    .max(11, 'Please, specify phone in correct way')
    .required('Here should be phone number'),
});