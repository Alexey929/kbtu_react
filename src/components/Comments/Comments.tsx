import React, { FC } from 'react'

import {
  Comment, Textarea, Button, Text,
} from '..'
import { CommentInterface } from '../../interfaces/Publications'

import { Container, List, SendComment } from './CommentsStyle'

type Props = {
  comments: CommentInterface[] | undefined,
  ref: any,
}

const Comments: FC<Props> = ({ comments, ref }: Props) => (
  <Container ref={ref}>
    {comments && comments.length > 0
      ? (
        <>
          <Text size="lg" weight="bold">
            Comments (
            {comments.length}
            ):
          </Text>
          <List>
            {comments.map(comment => <Comment comment={comment} />)}
          </List>
        </>
      )
      : (
        <Text margin="0 0 30px" type="secondary" size="lg">There are no comments on this post yet.</Text>
      )}
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
