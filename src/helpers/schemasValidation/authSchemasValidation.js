import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please, specify name in correct way')
    .max(50, 'Please, specify name in correct way')
    .required('Here should be your full name'),
  email: Yup.string()
    .email('Please, specify email in correct way')
    .min(2, 'Please, specify email in correct way')
    .max(40, 'Please, specify email in correct way')
    .required('Here should be your email'),
  password: Yup.string()
    .min(7, 'Password should have more characters')
    .max(30, 'Password should have less characters')
    .required('Here should be your password'),
  confirmPassword: Yup.string()
    .required('Please, provide confirmation password')
    .oneOf([Yup.ref('password')], 'Passwords should be match!'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please, specify email in correct way')
    .min(2, 'Please, specify email in correct way')
    .max(40, 'Please, specify email in correct way')
    .required('Here should be your email'),
  password: Yup.string()
    .min(7, 'Password should have more characters')
    .max(30, 'Password should have less characters')
    .required('Here should be your password'),
});