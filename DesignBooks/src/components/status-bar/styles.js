import styled from 'styled-components/native'

export const Base = styled.View`
    width: 100%;
    height: ${props => props.theme.statusBar}; 
    background-color: ${props => props.theme.primary};
`

export const StatusBarStyle = styled.StatusBar`
    background-color: ${props => props.theme.primary};
`