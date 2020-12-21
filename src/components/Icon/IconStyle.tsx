import styled from 'styled-components'

type IconStyleProps = {
  iconSize?: string,
  iconColor?: string,
  pointer?: boolean,
  margin?: string,
}

type IconTextProps = {
  fontColor?: string,
  fontSize?: string,
}

export const IconStyle = styled.div<IconStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${({ margin }) => margin ?? '0px'};
  font-size: ${({ iconSize }) => iconSize ?? '16px'};
  color: ${({ iconColor }) => iconColor ?? '#EDEDED'};
  transition: all 0.2s ease-in-out;

  ${({ pointer }) => pointer && 'cursor: pointer'};

  ${({ pointer }) => pointer && `
    &:hover {
      opacity: 0.8;
    }
  `
}
`

export const IconText = styled.div<IconTextProps>`
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  color:  ${({ fontColor }) => fontColor ?? '#EDEDED'};
  margin-left: 7px;
`
