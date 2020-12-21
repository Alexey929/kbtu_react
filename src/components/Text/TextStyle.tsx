import styled from 'styled-components'

type Props = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl',
  type?: 'default' | 'warning' | 'danger' | 'secondary' | 'primary' | 'inverted',
  weight?: 'light' | 'normal' | 'bold',
  nowrap?: boolean,
  underlined?: boolean,
  margin?: string,
}

const fontSizes = {
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '25px',
  '3xl': '30px',
}

const fontColors = {
  default: '#505050',
  warning: '#f5ab00',
  danger: '#ff1f2a',
  secondary: '#858585',
  primary: '#3859ff',
  inverted: '#fff',
}

const fontWeights = {
  normal: 400,
  bold: 600,
  light: 300,
}

const TextStyle = styled.div<Props>`
    display: inline-block;
    margin: ${({ margin }) => margin ?? '0px'};
    font-size: ${({ size }) => size && fontSizes[size]};
    color: ${({ type }) => type && fontColors[type]};
    line-height: 1.25;
    font-weight: ${({ weight }) => weight && fontWeights[weight]};
    white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : 'normal')};
    text-decoration: ${({ underlined }) => underlined && 'underline'};
`

export default TextStyle
