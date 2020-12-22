import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    margin: 30px 0;
    padding: 30px 30px 25px;
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 25px 0; 
    margin-top: 25px;
    border-top: 1px solid #EDEDED;
`

export const ActionsIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
