import styled from 'styled-components'

type ContainerProps = {
  margin?: string,
  padding?: string,
  width?: string,
}

type InputProps = {
  htmlType?: string,
  placeholder?: string,
  errorText?: string,
}

export const InputContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? '100%'};
  margin: ${({ margin }) => margin ?? '0px'};
  padding: ${({ padding }) => padding ?? '0px'};
`

export const InputStyle = styled.input<InputProps>`
  border: 1px solid #EDEDED;
  outline: none;
  font-family: Nunito, 'sans-serif';
  font-size: 16px;
  padding: 9px 12px;
  border-radius: 6px;
  color: #505050;

  transition: all 0.2s ease-in-out;

  ${({ errorText }) => (errorText ? `
    border: 1px solid #ff1f2a;
    box-shadow: 0px 0px 0px 1px rgba(255, 31, 42, 0.5);
  ` : `
      &:focus {
        border: 1px solid #3859ff;
        box-shadow: 0px 0px 0px 1px rgba(56, 89, 255, 0.5);
      }
  `)}

  &::placeholder {
    color: #858585;
  }
`

export const InputLabel = styled.div`
  margin-bottom: 5px;
  color: #505050;
`

export const InputError = styled.div`
  width: 100%;
  height: 13px;
  margin-top: 5px;
  color:#ff1f2a;
  font-size: 13px;
  text-align: right;
`
