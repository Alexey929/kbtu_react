import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import {
  Text, Button, Textarea, Input,
} from '../../components'
import { PublicationsModel } from '../../models'
import UserModel from '../../models/UserModel'

import { Container, Actions } from './WriteStoryStyle'

type FormValues = {
  title: string,
  previewText: string,
  mainText: string,
}

const WriteStory: FC = () => {
  const history = useHistory()
  const initialValues: FormValues = { title: '', previewText: '', mainText: '' }

  const onSumbit = ({ title, previewText, mainText }: FormValues) => {
    if (UserModel.currentUser) {
      PublicationsModel.create(title, previewText, mainText)
    }

    history.push('/publications')
  }

  return (
    <Container>
      <Formik
      // validationSchema={registrationValidation}
        initialValues={initialValues}
        onSubmit={(values) => onSumbit(values)}
      >
        {({
          values, handleChange, touched, errors,
        }) => (
          <Form>
            <Text margin="0 0 30px" size="2xl" weight="bold">Writing story</Text>
            <Input
              width="400px"
              label="Title"
              placeholder="Enter story title"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <Textarea
              label="Story preview"
              height="300px"
              placeholder="Get people interested in your story!"
              name="previewText"
              value={values.previewText}
              onChange={handleChange}
            />
            <Textarea
              label="Story"
              placeholder="Tell us the whole story ..."
              name="mainText"
              height="500px"
              value={values.mainText}
              onChange={handleChange}
            />
            <Actions>
              <Button type="primary">Post story</Button>
            </Actions>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default observer(WriteStory)
