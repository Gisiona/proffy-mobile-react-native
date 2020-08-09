import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import imgLanding from '../../assets/images/landing.png';
import iconStudy from '../../assets/images/icons/study.png';
import iconGiveClasses from '../../assets/images/icons/give-classes.png';
import iconHeart from '../../assets/images/icons/heart.png';
import { useNavigation} from '@react-navigation/native'

function Landing() {
    const navigation = useNavigation();

    function handleNavigationToGiveClassesPage() {
        navigation.navigate("GiveClasse")
    }

    function handleNavigationToStudyPages() {
        navigation.navigate("Study")
    }

    return (
        <View style={styles.container}>
            <Image source={imgLanding} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo ao Proffy, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                style={[styles.button, styles.buttonPrimary]}
                onPress={handleNavigationToStudyPages}
                >
                    <Image source={iconStudy}/>
                    <Text style={styles.buttonTextEstudar}>
                        Estudar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.button, styles.buttonSecondary]}
                onPress={handleNavigationToGiveClassesPage}
                >
                    <Image source={iconGiveClasses}/>
                    <Text style={styles.buttonTextEstudar}>
                        Ensinar
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}>
                Total de 120 conexões já realizadas.{' '}
                <Image source={iconHeart}/>
            </Text>

        </View>

        
    );
}

export default Landing;