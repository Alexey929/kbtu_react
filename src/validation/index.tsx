import { yupToFormErrors } from 'formik'
import * as Yup from 'yup'

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters'),
})

export const registrationValidation = Yup.object().shape({
  nickname: Yup.string()
    .min(4, 'Minimum 4 charasters')
    .max(20, 'Maximum 20 charasters'),
  email: Yup.string()
    .email('Email is invalid'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters'),
})
