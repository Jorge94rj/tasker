import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid #d1cdcd;
    border-radius: 8px;
    width: 280px;
    margin-bottom: 16px;
`

export const CardActions = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`

export const IconAction = styled.div`
    cursor: pointer;
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 4px 16px 0px;
    h4 {
        margin: unset;
    }
    .priority-indicator {
        display: flex;
        position: relative;
        &::after {
            position: relative;
            content: "";
            width: 12px;
            height: 12px;
            top: 4px;
            left: 4px;
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

export const DescriptionItem = styled.div`
    margin: 12px 0px 12px 0px;
    height: 128px;
    overflow-y: auto;
`

export const NoteItem = styled.div`
    margin: 12px 0px 12px 0px;
    overflow-y: auto;
`