import React, { FC, ReactNode } from 'react'

import FormStyle from './FormStyle'

type Props = {
  children: string | number | Element | ReactNode,
}

const Form: FC<Props> = ({ children } : Props) => (
  <FormStyle>
    {children}
  </FormStyle>
)

export default Form
