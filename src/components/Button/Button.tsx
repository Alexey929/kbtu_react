import React, { FC, ReactNode } from 'react'

import ButtonStyle from './ButtonStyle'

type Props = {
  children?: string | number | Element | ReactNode,
  size?: 'md' | 'lg',
  type?: 'default' | 'primary',
  block?: boolean,
  outlined?: boolean,
  margin?: string,
  onClick?: () => void
}

const Button: FC<Props> = ({
  children, type, size, block, margin, onClick, outlined,
} : Props) => (
  <ButtonStyle outlined={outlined} margin={margin} color={type} block={block} size={size} onClick={onClick}>
    {children}
  </ButtonStyle>
)

Button.defaultProps = {
  children: null,
  size: 'md',
  block: false,
  type: 'default',
  margin: '0px',
  outlined: false,
  onClick: () => {},
}

export default Button
