import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import imgGiveClasseBackground from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';

function GiveClasses() {
    const navigation = useNavigation();

    function handleNavigationToBackPage() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={imgGiveClasseBackground} 
                style={styles.content}
                resizeMode={"contain"}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>

            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigationToBackPage}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>        
    );
}

export default GiveClasses;