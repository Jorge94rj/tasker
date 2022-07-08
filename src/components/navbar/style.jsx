import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    background: #0099cc;
`
    
export const ItemsContainer = styled.ul`
    display: flex;
    width: 100%;
    padding: 0 32px;
    justify-content: space-between;
    list-style: none;
    color: #fff;
    font-weight: bold;
`

export const NavMainActions = styled.div`
    display: flex;
    align-items: center;
`

export const Item = styled.li`
    display: flex;
    padding: 8px;
    cursor: pointer;
    &.checkbox {
        padding: unset;
    }
    .checkbox-label {
        font-size 14px;
    }
`