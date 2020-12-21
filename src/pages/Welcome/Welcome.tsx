import React, { FC } from 'react'

import { Button, Text } from '../../components'

import { Container, WelcomeBlock } from './WelcomeStyle'

const Welcome: FC = () => (
  <Container>
    <WelcomeBlock>
      <Text size="xxl" weight="bold">Welcome to KBTU Stories!</Text>
      <Text size="lg" weight="bold">Let&apos;s go to meet and talk!</Text>
      <Text size="md" margin="10px 5px 0">
        Our service allows you to get to know each other,
        share stories that happened to you within the
        walls of KBTU and have fun.
      </Text>
      <Button margin="50px 0 0" block type="primary">Let&apos;s go!</Button>
    </WelcomeBlock>
  </Container>
)

export default Welcome
