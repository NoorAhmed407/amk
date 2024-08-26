import { StyleSheet } from 'react-native'
import { HorizontalSize } from './Config/Metrix';


const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: HorizontalSize(20),
        backgroundColor: '#fff'
    }
})

export  {GlobalStyles};
