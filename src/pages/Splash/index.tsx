import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import imgGiveClasseBackground from '../../assets/images/give-classes-background.png';
import imgLogo from '../../assets/images/logo.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';


function Splash() {
    const navigation = useNavigation();

    function handleNavigationToBackPage() {
        navigation.navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={imgGiveClasseBackground} 
                style={styles.content}
                resizeMode={"contain"}
            >
                <View style={styles.containerSplash}>
                    <Image source={imgLogo}  resizeMode="contain" style={styles.logo} />
                    <Text style={styles.title}>Sua plataforma de estudos online.</Text>
                </View>
            
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigationToBackPage}>
                <Text style={styles.okButtonText}>Próximo</Text>
            </RectButton>
        </View>        
    );
}

export default Splash;