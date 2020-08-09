import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',  
    },
    searchForm:{
        marginBottom: 24
    },
    titleSearch: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    inputSearch:{
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent:'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 14
    },
    inputSearchGroup:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    inputSearchBlock:{
        width: '48%'
    },
    buttonFilter:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFilter:{
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    },
    teacherList: {
        marginTop: -40,
    }
   
});

export default styles;