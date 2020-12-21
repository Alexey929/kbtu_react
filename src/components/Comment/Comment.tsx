import React, { FC } from 'react'
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'

import { Link, Text, Icon } from '..'

import {
  Container, Title, MainText, Actions,
} from './CommentStyle'

type Props = {
  comment: {
    author: {
      nickname: string,
      id: string
    },
    date: string,
    text: string,
    rating: {
      likes: string,
      dislikes: string,
    }
  }
}

const Comment: FC<Props> = ({ comment } : Props) => (
  <Container>
    <Title>
      <Link>{comment.author.nickname}</Link>
      <Text type="secondary">{comment.date}</Text>
    </Title>
    <MainText>
      {comment.text}
    </MainText>
    <Actions>
      <Icon
        pointer
        icon={<MdArrowUpward />}
        text={comment.rating.likes}
        iconColor="#808080"
        iconSize="20px"
        fontColor="#808080"
        margin="0 13px 0 0"
      />
      <Icon
        pointer
        icon={<MdArrowDownward />}
        text={comment.rating.dislikes}
        iconColor="#808080"
        iconSize="20px"
        fontColor="#808080"
        margin="0 13px 0 0"
      />
    </Actions>
  </Container>
)

export default Comment
