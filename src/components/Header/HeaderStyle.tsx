import styled from 'styled-components'

type HeaderLinkProps = {
  active?: boolean,
}

export const HeaderStyle = styled.div`
    background-color: #ffffff;
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: calc(100vw - 60px);
    position: sticky;
    top: 0px;
    left: 0px;
    border-bottom: 1px solid #EDEDED;
`

export const HeaderMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const HeaderLinks = styled.div`
    display: flex;
    margin-left: 100px;
    flex-direction: row;
    align-items: center;
`

export const HeaderLink = styled.div<HeaderLinkProps>`
    font-size: 18px;
    margin: 0 20px;
    color: #3859ff;
    font-weight: 600;
    cursor: pointer;
    padding: 7px 10px;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #FBFBFB;
    }

    ${({ active }) => active && `
        background-color: rgba(56, 89, 255, 0.1);
    `}
`
