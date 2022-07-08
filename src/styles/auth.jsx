import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const AuthCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 512px;
    border: 1px solid gray;
    padding: 24px;
    border-radius: 8px;
    justify-content: center;
`

export const RowItem = styled.div`
    width: 70%;
    margin: 16px auto 0 auto;
`

export const AuthCardFooter = styled.div`
    display: flex;
    align-items: center;
    &.login {
        justify-content: space-between;
    }
    &.register {
        justify-content: center;
    }
`