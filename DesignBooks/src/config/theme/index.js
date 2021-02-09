import {
    Platform,
    StatusBar
} from 'react-native'

export default theme = {
    statusBar: Platform.OS === "ios" ? '48px' : `${StatusBar.currentHeight}px`,
    actionBar: Platform.OS === "ios" ? '44px' : '56px',
    primary: '#fbe20b',
    textPrimary: '#000',
    titleSize: '24px',
}