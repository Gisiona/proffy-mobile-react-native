import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8257e5',        
        justifyContent: 'center',
        padding: 40,
    },
    content: {
        flex: 1,
        justifyContent:"center",        
    },
    containerSplash:{
        flex: 1,        
        marginTop: '60%'
    },
    logo: {
        width:160,
        height:60,
        
    },
    title: {
        fontFamily: 'Archivo_400Regular',
        color:'#fff',
        fontSize: 28,
        lineHeight: 37,
        maxWidth: 240
    },
    okButton:{
        marginTop: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    okButtonText:{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16
    }
});

export default styles;