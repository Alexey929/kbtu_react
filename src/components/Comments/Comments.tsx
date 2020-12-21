import React, { FC } from 'react'

import {
  Comment, Textarea, Button, Text,
} from '..'

import { Container, List, SendComment } from './CommentsStyle'

const comment = {
  author: {
    nickname: 'Deffestor',
    id: '1',
  },
  date: '20.10.2020',
  text: 'Офигенно! Мне понравилось!',
  rating: {
    likes: '25',
    dislikes: '3',
  },
}

const Comments: FC = () => (
  <Container>
    <Text size="lg" weight="bold">Comments (25):</Text>
    <List>
      <Comment comment={comment} />
      <Comment comment={comment} />
      <Comment comment={comment} />
      <Comment comment={comment} />
    </List>
    <Text size="lg" weight="bold">Your comment</Text>
    <SendComment>
      <Textarea
        width="765px"
        height="100px"
        margin="0 50px 0 0"
        placeholder="Share with your opinion"
        name="commentInput"
      />
      <Button outlined type="primary">Send</Button>
    </SendComment>
  </Container>
)

export default Comments
