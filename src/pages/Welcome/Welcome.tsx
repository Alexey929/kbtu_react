import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Text } from '../../components'

import { Container, WelcomeBlock, WelcomeDescription } from './WelcomeStyle'

const Welcome: FC = () => {
  const history = useHistory()

  return (
    <Container>
      <WelcomeBlock>
        <Text size="3xl" weight="bold">Welcome to KBTU Stories!</Text>
        <Text size="lg" weight="bold">Let&apos;s go to meet and talk!</Text>
        <WelcomeDescription>
          <Text size="md" margin="10px 5px 0">
            Our service allows you to get to know each other,
            share stories that happened to you within the
            walls of KBTU and have fun.
          </Text>
        </WelcomeDescription>
        <Button
          onClick={() => history.push('/registration')}
          margin="35px 0 0"
          block
          type="primary"
        >
          Let&apos;s go!
        </Button>
      </WelcomeBlock>
    </Container>
  )
}

export default Welcome
