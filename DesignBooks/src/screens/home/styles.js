import styled from 'styled-components/native'

import {
    Dimensions
} from 'react-native'

export const Container = styled.SafeAreaView`
    height: ${Dimensions.get('screen').height}px;
    background-color: ${props => props.theme.primary};
`