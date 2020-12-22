import React, { FC } from 'react'
import { MdArrowUpward, MdArrowDownward, MdComment } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import { CommentInterface } from '../../interfaces/Publications'
import {
  Text, Link, Button, Icon,
} from '..'

import {
  Title, Actions, Container, ActionsIcons,
} from './PublicationPreviewStyle'

type Props = {
  publication: {
    id: number | string,
    title: string,
    author: {
      id: number | string,
      nickname: number | string,
    },
    date: string,
    previewText: string,
    mainText: string,
    rating: {
      dislikes: string,
      likes: string,
    }
    comments?: CommentInterface[]
  }
}

const PublicationPreview: FC<Props> = ({ publication } : Props) => {
  const history = useHistory()

  return (
    <Container>
      <Link
        margin="0px 0px 10px"
        onClick={() => history.push(`/profile/${publication.author.id}`)}
      >
        {publication.author.nickname}
      </Link>
      <Title onClick={() => history.push(`/publication/${publication.id}`)}>
        <Text size="3xl" weight="bold">{publication.title}</Text>
        <Text type="secondary">{publication.date}</Text>
      </Title>
      <Text size="lg">
        {publication.previewText}
      </Text>
      <Actions>
        <Button
          outlined
          type="primary"
          onClick={() => history.push(`/publication/${publication.id}`)}
        >
          Read more
        </Button>
        <ActionsIcons>
          <Icon
            icon={<MdArrowUpward />}
            text={publication.rating.likes}
            iconColor="#00C34E"
            iconSize="20px"
            fontColor="#00C34E"
            margin="0 13px 0 0"
          />
          <Icon
            icon={<MdArrowDownward />}
            text={publication.rating.dislikes}
            iconColor="#ff1f2a"
            iconSize="20px"
            fontColor="#ff1f2a"
            margin="0 13px 0 0"
          />
          {publication.comments?.length !== 0
            && (
            <Icon
              icon={<MdComment />}
              text={publication.comments?.length}
              iconColor="#808080"
              iconSize="20px"
              onClick={() => history.push(`/publication/${publication.id}?toComments=true`)}
              fontColor="#808080"
              margin="0 13px 0 0"
            />
            )}
        </ActionsIcons>
      </Actions>
    </Container>
  )
}

export default PublicationPreview
