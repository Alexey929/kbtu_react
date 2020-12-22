import React, {
  FC, useEffect, useState, useRef,
} from 'react'
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'
import { useHistory, useParams } from 'react-router-dom'

import {
  Text, Link, Icon, Comments,
} from '../../components'
import { PublicationInterface } from '../../interfaces/Publications'
import { PublicationsModel } from '../../models'

import {
  Title, Actions, Container, ActionsIcons,
} from './PublicationStyle'

type ParamsTypes = {
  id?: string | number
}

const Publication: FC = () => {
  const history = useHistory()
  const params: ParamsTypes = useParams()
  const [publication, setPublication] = useState<PublicationInterface | undefined>()

  const commentsAnchor = useRef<HTMLDivElement>(document.createElement('div'))

  useEffect(() => {
    let findedPublication

    if (params?.id) {
      findedPublication = PublicationsModel.publications.filter(item => Number(item.id) === Number(params.id))[0]
      setPublication(findedPublication)
    } else {
      history.push('/publications')
    }
  }, [params, history])

  useEffect(() => {
    if (history.location.search.indexOf('toComments') > -1) {
      commentsAnchor.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history])

  return (
    <Container>
      <Link margin="0px 0px 10px">{publication?.author.nickname}</Link>
      <Title onClick={() => history.push('/publication/1')}>
        <Text size="2xl" weight="bold">{publication?.title}</Text>
        <Text type="secondary">{publication?.date}</Text>
      </Title>
      <Text size="lg">
        {publication?.previewText}
        {publication?.mainText}
        {publication?.mainText}
      </Text>
      <Actions>
        <ActionsIcons>
          <Icon
            pointer
            icon={<MdArrowUpward />}
            text={publication?.rating.likes}
            iconColor="#808080"
            iconSize="25px"
            fontColor="#808080"
            margin="0 13px 0 0"
          />
          <Icon
            pointer
            icon={<MdArrowDownward />}
            text={publication?.rating.dislikes}
            iconColor="#808080"
            iconSize="25px"
            fontColor="#808080"
            margin="0 13px 0 0"
          />
        </ActionsIcons>
      </Actions>
      <div ref={commentsAnchor} style={{ width: '1px', height: '1px' }} />
      <Comments ref={commentsAnchor} comments={publication?.comments} />
    </Container>
  )
}

export default Publication
