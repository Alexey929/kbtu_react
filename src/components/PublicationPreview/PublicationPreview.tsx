import React, { FC } from 'react'
import { MdArrowUpward, MdArrowDownward, MdComment } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import {
  Text, Link, Button, Icon,
} from '..'

import {
  Title, Actions, Container, ActionsIcons,
} from './PublicationPreviewStyle'

const PublicationPreview: FC = () => {
  const history = useHistory()

  return (
    <Container>
      <Link margin="0px 0px 10px">Alim Atabaev</Link>
      <Title onClick={() => history.push('/publication/1')}>
        <Text size="3xl" weight="bold">История которая произошла со мной на паре</Text>
        <Text type="secondary">20.10.2020</Text>
      </Title>
      <Text size="lg">
        История эта произошла со мной в 1987 году во время учебы в Новосибирском универе
        (первый курс геолого-геофизического факультета).
        Как известно от первокурсника вообще трудно ждать умных поступков,
        но тут я сумел превзойти сам себя. Мой сосед по комнате (и лучший друг) привел в нашу комнату девушку.
        Явление это нередкое, но обычно мы друг друга предупреждали, (это называлось «играть в палестинских беженцев»).
        рихожу домой -- дверь закрыта, из-за нее доносятся звуки, ясно дающие понять,
        то собственно происходит в обители будущих геологов.
        Стук, крик и мат на двух языках не принес желаемых результатов,
        а поскольку в тот вечер я был настроен пораньше лечь спать
        и назавтра пойти на первую пару (что случалось со мной нечасто)
        то пришлось перейти к активным действиям.
        Надо отметить, что 80% мужской половины факультета занималось либо
        спелеологией (дыролазанием), либо альпинизмом во всех его проявлениях,
        поэтому снаряжение – веревки, карабины и т.п. имелось
        практически в каждой комнате. Поднимаюсь этажом выше,
        захожу к соседям и прошу снарягу на пять минут.
      </Text>
      <Actions>
        <Button outlined type="primary">Read more</Button>
        <ActionsIcons>
          <Icon
            icon={<MdArrowUpward />}
            text="25"
            iconColor="#00C34E"
            iconSize="20px"
            fontColor="#00C34E"
            margin="0 13px 0 0"
          />
          <Icon
            icon={<MdArrowDownward />}
            text="25"
            iconColor="#ff1f2a"
            iconSize="20px"
            fontColor="#ff1f2a"
            margin="0 13px 0 0"
          />
          <Icon
            pointer
            icon={<MdComment />}
            text="25"
            iconColor="#808080"
            iconSize="20px"
            fontColor="#808080"
            margin="0 13px 0 0"
          />
        </ActionsIcons>
      </Actions>
    </Container>
  )
}

export default PublicationPreview
