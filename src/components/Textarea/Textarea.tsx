import React, { FC, ChangeEvent } from 'react'

import {
  TextareaContainer, TextareaStyle, TextareaLabel, TextareaError,
} from './TextareaStyle'

type Props = {
  name: string,
  placeholder?: string,
  value?: string,
  margin?: string,
  padding?: string,
  label?: string,
  width?: string,
  height?: string,
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  onClear?: () => void,
  errorText?: string
  withoutErrors?: boolean,
}

const Textarea: FC<Props> = ({
  name, value, placeholder, margin, width, label, onChange, errorText, padding, withoutErrors, height,
}: Props) => (
  <TextareaContainer width={width} padding={padding} margin={margin}>
    {label && <TextareaLabel>{label}</TextareaLabel>}
    <TextareaStyle
      width={width}
      name={name}
      value={value}
      height={height}
      placeholder={placeholder}
      errorText={errorText}
      onChange={onChange}
    />
    {!withoutErrors && <TextareaError>{errorText}</TextareaError>}
  </TextareaContainer>
)

Textarea.defaultProps = {
  value: '',
  placeholder: '',
  margin: '0px',
  padding: '0px',
  label: '',
  width: '100%',
  height: '300px',
  onChange: () => {},
  onClear: () => {},
  errorText: '',
  withoutErrors: false,
}

export default Textarea
