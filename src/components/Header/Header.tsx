import React, { FC, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { Button, Text } from '..'

import {
  HeaderStyle, HeaderMain, HeaderLinks, HeaderLink,
} from './HeaderStyle'

const Header: FC = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const [active, setActive] = useState(pathname)

  useEffect(() => {
    if (pathname !== active) {
      setActive('')
    }
  }, [active, history, pathname])

  const handleRoutesMove = (path : string) => {
    history.push(path)
    setActive(path)
  }

  return (
    <HeaderStyle>
      <HeaderMain>
        <Text size="2xl" type="primary" weight="bold">
          KBTU Stories
        </Text>
        <HeaderLinks>
          <HeaderLink active={active === '/publications'} onClick={() => handleRoutesMove('/publications')}>
            Publications
          </HeaderLink>
          <HeaderLink active={active === '/profile'} onClick={() => handleRoutesMove('/profile')}>
            Profile
          </HeaderLink>
        </HeaderLinks>
      </HeaderMain>
      {pathname !== '/write-story'
        && (
        <Button type="primary">
          Write story
        </Button>
        )}
    </HeaderStyle>

  )
}

export default Header
