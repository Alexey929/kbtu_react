import React, { FC } from 'react'

import {
  Text, Button, Textarea, Input,
} from '../../components'

import { Container, Actions } from './WriteStoryStyle'

const WriteStory: FC = () => (
  <Container>
    <Text margin="0 0 30px" size="2xl" weight="bold">Writing story</Text>
    <Input width="400px" label="Title" placeholder="Enter story title" name="titleInput" />
    <Textarea
      label="Story preview"
      height="300px"
      placeholder="Get people interested in your story!"
      name="previewTextarea"
    />
    <Textarea label="Story" placeholder="Tell us the whole story ..." name="storyTextarea" height="500px" />
    <Actions>
      <Button type="primary">Post story</Button>
    </Actions>
  </Container>
)

export default WriteStory
