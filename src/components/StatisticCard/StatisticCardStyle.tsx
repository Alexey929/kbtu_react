import styled from 'styled-components'

type ContainerProps = {
  withoutAction?: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: #FBFBFB;
    border-radius: 8px;
    min-width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    margin-right: 15px;
    ${({ withoutAction }) => !withoutAction && 'cursor: pointer;'}
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`
