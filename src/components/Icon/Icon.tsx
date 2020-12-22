import React, { FC, ReactNode } from 'react'

import { IconStyle, IconText } from './IconStyle'

type Props = {
  fontSize?: string,
  fontColor?: string,
  iconColor?: string,
  iconSize?: string,
  text?: string | number,
  margin?: string,
  icon: Element | ReactNode,
  onClick?: () => void,
  pointer?: boolean,
}

const Icon: FC<Props> = ({
  text, margin, icon, onClick, pointer, fontSize, iconSize, fontColor, iconColor,
} : Props) => (
  <IconStyle
    iconSize={iconSize}
    onClick={onClick}
    margin={margin}
    pointer={pointer}
    iconColor={iconColor}
  >
    {icon}
    {text && (
    <IconText
      fontColor={fontColor}
      fontSize={fontSize}
    >
      {text}
    </IconText>
    )}
  </IconStyle>
)

Icon.defaultProps = {
  text: '',
  onClick: () => { },
  pointer: false,
  margin: '0px',
  iconSize: '16px',
  fontSize: '16px',
  fontColor: '#EDEDED',
  iconColor: '#EDEDED',
}

export default Icon
