import styled from 'styled-components/native'

export const Base = styled.View`
    width: 100%;
    height: ${props => props.theme.actionBar}; 
    background-color: ${props => props.theme.primary};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
`

export const Container = styled.View`
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`

export const Row = styled.View`
    width: 40%;
    height: 2px;
    background-color: #000;
    opacity: 0.1;
`

export const Input = styled.TextInput`
    font-size: ${props => props.theme.titleSize};
    color: ${props => props.theme.textPrimary};
    font-weight: 300;
    width: 250px;
    text-align: center;
    border-width: 0px;
`