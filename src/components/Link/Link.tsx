import React, { FC, ReactNode } from 'react'

import LinkStyle from './LinkStyle'

type Props = {
  children?: string | number | Element | ReactNode,
  size?: 'sm' | 'md' | 'lg',
  nowrap?: boolean,
  margin?: string,
  onClick?: () => void
}

const Link: FC<Props> = ({
  children, size, nowrap, onClick, margin,
} : Props) => (
  <LinkStyle margin={margin} size={size} nowrap={nowrap} onClick={onClick}>
    {children}
  </LinkStyle>
)

Link.defaultProps = {
  children: null,
  margin: '0px',
  size: 'md',
  nowrap: false,
  onClick: () => {},
}

export default Link
