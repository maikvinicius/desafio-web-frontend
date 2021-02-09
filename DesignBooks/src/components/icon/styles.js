import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome';

export const IconStyled = styled(Icon)`
    color: ${props => props.theme.textPrimary};
`