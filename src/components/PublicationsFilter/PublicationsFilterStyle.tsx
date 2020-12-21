import styled from 'styled-components'

type FilterLinkProps = {
  active?: boolean,
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`

export const FilterLinks = styled.div`
    display: flex;
    margin-left: 30px;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #EDEDED;
`

export const FilterLink = styled.div<FilterLinkProps>`
    font-size: 16px;
    color: #3859ff;
    font-weight: 700;
    cursor: pointer;
    padding: 9px 17px;
    text-align: center;
    min-width: 70px;
    transition: all 0.2s ease-in-out;

    &:first-child {
        border-radius: 6px 0px 0px 6px;
    }

    &:last-child {
        border-radius: 0 6px 6px 0;
    }

    &:hover {
        background-color: #FBFBFB;
    }

    ${({ active }) => active && `
        background-color: rgba(56, 89, 255, 0.1);
    `}
`
