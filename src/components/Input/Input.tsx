import React, { FC, ChangeEvent } from 'react'

import {
  InputContainer, InputStyle, InputLabel, InputError,
} from './InputStyle'

type Props = {
  htmlType?: string,
  name: string,
  placeholder?: string,
  value?: string,
  margin?: string,
  padding?: string,
  label?: string,
  width?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onClear?: () => void,
  errorText?: string
}

const Input: FC<Props> = ({
  htmlType, name, value, placeholder, margin, width, label, onChange, errorText, padding,
}: Props) => (
  <InputContainer padding={padding} margin={margin} width={width}>
    <InputLabel>{label}</InputLabel>
    <InputStyle
      name={name}
      value={value}
      type={htmlType}
      placeholder={placeholder}
      errorText={errorText}
      onChange={onChange}
    />
    <InputError>{errorText}</InputError>
  </InputContainer>
)

Input.defaultProps = {
  value: '',
  htmlType: 'text',
  placeholder: '',
  margin: '0px',
  padding: '0px',
  label: '',
  width: '100%',
  onChange: () => {},
  onClear: () => {},
  errorText: '',
}

export default Input
