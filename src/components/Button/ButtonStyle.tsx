import styled from 'styled-components'

type Props = {
  color?: 'primary' | 'default',
  size?: 'md' | 'lg',
  block?: boolean,
  margin?: string,
}

const buttonColors = {
  default: '#f5f5f5',
  primary: '#3859ff',
}

const buttonFontColors = {
  default: '#808080',
  primary: '#ffffff',
}

const buttonSizes = {
  md: '9px 22px',
  lg: '13px 24px',
}

const ButtonStyle = styled.button<Props>`
  width: ${({ block }) => (block ? '100%' : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: Nunito, 'sans-serif';
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  outline: none;
  margin: ${({ margin }) => margin ?? '0px'};
  padding: ${({ size }) => size && buttonSizes[size]};
  background-color: ${({ color }) => color && buttonColors[color]};
  color: ${({ color }) => color && buttonFontColors[color]};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`

export default ButtonStyle
