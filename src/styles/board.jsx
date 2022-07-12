import styled from "styled-components";

export const BoardContainer = styled.div`
    display: flex;
    padding: 32px;
    justify-content: space-between;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid #cfd1d0;
    border-left: 1px solid #cfd1d0;
    // min-width: calc(352px - 18px);
    min-height: 80vh;
    padding: 18px;
    .title {
        text-align: center;
        margin-bottom: 16px;
        color: #b5b2b1;
        font-weight: bold;
    }
`