import styled from 'styled-components'

type Props = {
  size?: 'sm' | 'md' | 'lg',
  nowrap?: boolean,
}

const fontSizes = {
  sm: '14px',
  md: '16px',
  lg: '18px',
}

const LinkStyle = styled.a<Props>`
    display: inline-block;
    cursor: pointer;
    font-size: ${({ size }) => size && fontSizes[size]};
    color: #3859ff;
    line-height: 1.25;
    font-weight: 400;
    white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : 'normal')};
    transition: text-decoration 0.2s ease-in-out;
    
    &:hover {
        text-decoration: underline;
    }
`

export default LinkStyle
