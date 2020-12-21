import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import { useHistory } from 'react-router-dom'

import {
  Link, Input, Text, Button,
} from '../../components'
import { registrationValidation } from '../../validation'

import { Container, RegistrationBlock } from './RegistrationStyle'

type FormValues = {
  nickname: string,
  email: string,
  password: string,
}

const Registration: FC = () => {
  const history = useHistory()
  const initialValues: FormValues = { nickname: '', email: '', password: '' }

  const displayFieldErrorText = (touched: boolean | undefined, error: string | undefined) : string => {
    if (touched && error) {
      return error
    }

    return ''
  }

  return (
    <Container>
      <RegistrationBlock>
        <Text size="2xl" weight="bold">Registration</Text>
        <Formik
          validationSchema={registrationValidation}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({
            values, handleChange, touched, errors,
          }) => (
            <Form>
              <Input
                errorText={displayFieldErrorText(touched.nickname, errors.nickname)}
                width="370px"
                margin="15px 0"
                onChange={handleChange}
                htmlType="text"
                name="nickname"
                value={values.nickname}
                label="Nickname"
                placeholder="Your nickname"
              />
              <Input
                errorText={displayFieldErrorText(touched.email, errors.email)}
                width="370px"
                margin="15px 0"
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
                margin="15px 0 30px"
                onChange={handleChange}
                name="password"
                value={values.password}
                label="Password"
                placeholder="Your password"
                htmlType="password"
              />
              <Button block type="primary">Create account</Button>
            </Form>
          )}
        </Formik>
        <Link margin="20px 0 0" onClick={() => history.push('/login')}>Already have account?</Link>
      </RegistrationBlock>
    </Container>
  )
}

export default Registration
