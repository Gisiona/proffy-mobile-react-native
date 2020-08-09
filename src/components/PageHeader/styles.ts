import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        padding: 30,
        backgroundColor: '#8257e5',  
    },
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 24,
        color:'#fff',
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
        fontFamily: 'Archivo_700Bold',
    }
   
});

export default styles;