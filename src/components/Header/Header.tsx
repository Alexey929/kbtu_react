import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Text } from '..'

import {
  HeaderStyle, HeaderMain, HeaderLinks, HeaderLink,
} from './HeaderStyle'

const Header: FC = () => {
  const history = useHistory()
  const [active, setActive] = useState(history.location.pathname)

  useEffect(() => {
    history.push(active)
  }, [active, history])

  return (
    <HeaderStyle>
      <HeaderMain>
        <Text size="2xl" type="primary" weight="bold">
          KBTU Stories
        </Text>
        <HeaderLinks>
          <HeaderLink active={active === '/publications'} onClick={() => setActive('/publications')}>
            Publications
          </HeaderLink>
          <HeaderLink active={active === '/profile'} onClick={() => setActive('/profile')}>
            Profile
          </HeaderLink>
        </HeaderLinks>
      </HeaderMain>
      <Button type="primary">
        Write story
      </Button>
    </HeaderStyle>

  )
}

export default Header
