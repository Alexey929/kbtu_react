import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    margin-top: 30px; 
    padding: 0px 0px 25px;
    border-bottom: 1px solid #EDEDED;
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &:hover {
        > div:first-child {
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            opacity: 0.8;
        }
    }
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
`

export const ActionsIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
