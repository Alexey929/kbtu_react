import React, { FC, ReactNode } from 'react'

import LinkStyle from './LinkStyle'

type Props = {
  children?: string | number | Element | ReactNode,
  size?: 'sm' | 'md' | 'lg',
  nowrap?: boolean,
  onClick?: () => void
}

const Link: FC<Props> = ({
  children, size, nowrap, onClick,
} : Props) => (
  <LinkStyle size={size} nowrap={nowrap} onClick={onClick}>
    {children}
  </LinkStyle>
)

Link.defaultProps = {
  children: null,
  size: 'md',
  nowrap: false,
  onClick: () => {},
}

export default Link
