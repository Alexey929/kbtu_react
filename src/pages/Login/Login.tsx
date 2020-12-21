import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import { useHistory } from 'react-router-dom'

import {
  Link, Input, Text, Button,
} from '../../components'
import { loginValidation } from '../../validation'

import { Container, LoginBlock } from './LoginStyle'

type FormValues = {
  email: string,
  password: string,
}

const Login: FC = () => {
  const history = useHistory()
  const initialValues: FormValues = { email: '', password: '' }

  const displayFieldErrorText = (touched: boolean | undefined, error: string | undefined) : string => {
    if (touched && error) {
      return error
    }

    return ''
  }

  return (
    <Container>
      <LoginBlock>
        <Text size="2xl" weight="bold">Login</Text>
        <Formik
          validationSchema={loginValidation}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({
            values, touched, errors, handleChange,
          }) => (
            <Form>
              <Input
                errorText={displayFieldErrorText(touched.email, errors.email)}
                width="370px"
                margin="10px 0"
                onChange={handleChange}
                htmlType="text"
                name="email"
                value={values.email}
                label="E-mail"
                placeholder="Your e-mail"
              />
              <Input
                errorText={displayFieldErrorText(touched.password, errors.password)}
                width="370px"
                margin="10px 0 33px"
                onChange={handleChange}
                name="password"
                value={values.password}
                label="Password"
                placeholder="Your password"
                htmlType="password"
              />
              <Button block type="primary">Login to account</Button>
            </Form>
          )}
        </Formik>
        <Link onClick={() => history.push('/registration')} margin="25px 0 0">Don&apos;t have an account?</Link>
      </LoginBlock>
    </Container>
  )
}

export default Login
