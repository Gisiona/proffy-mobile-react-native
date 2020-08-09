import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import imgGiveClasseBackground from '../../assets/images/give-classes-background.png';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
    const navigation = useNavigation();

    function handleNavigationToBackPage() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>            
            <PageHeader title="Meus proffys favoritos" />
            <ScrollView style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                <TeacherItem title=""/>
            </ScrollView>
        </View>    
   
        
    );
}

export default Favorites;