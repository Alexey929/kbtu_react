import React, { FC, ReactNode } from 'react'

import TextStyle from './TextStyle'

type Props = {
  children?: string | number | Element | ReactNode,
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl',
  weight?: 'light' | 'normal' | 'bold',
  type?: 'default' | 'warning' | 'danger' | 'secondary' | 'primary' | 'inverted' | 'success',
  nowrap?: boolean,
  underlined?: boolean,
  margin?: string,
}

const Text: FC<Props> = ({
  children, size, weight, type, nowrap, underlined, margin,
} : Props) => (
  <TextStyle size={size} margin={margin} weight={weight} type={type} nowrap={nowrap} underlined={underlined}>
    {children}
  </TextStyle>
)

Text.defaultProps = {
  children: null,
  size: 'md',
  margin: '0px',
  weight: 'normal',
  type: 'default',
  nowrap: false,
  underlined: false,
}

export default Text
