import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px 0px;
    margin: auto;
    justify-content: center;
`

export const RowItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    h4 {
        margin: unset;
    }
    & > select, textarea {
        width: 100%;
    }
    textarea, p {
        height: 96px;
        resize: none;
    }
    &.footer {
        display: flex;
        justify-content: end;
        button {
            margin-left: 8px;
        }
    }
    .priority-indicator {
        display: flex;
        position: relative;
        &::after {
            position: relative;
            content: "";
            width: 12px;
            height: 12px;
            top: 1px;
            left: 12px;
            border-radius: 50%;
            background-color: ${({priority}) => {
                switch(priority) {
                    case '1': return '#c9081f;'
                    case '2': return '#edba02;'
                    case '3': return '#6d9ea8;'
                    default: return 'gray;'
                }
            }}
        }
    }
`