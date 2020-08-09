import React from 'react';
import { View, } from 'react-native';
import styles from './styles';
import { useNavigation} from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

function TeacherList() {
    const navigation = useNavigation();

    function handleNavigationToBackPage() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>            
            <PageHeader title="Proffys disponíveis" />
            <ScrollView style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                <TeacherItem title=""/>
                <TeacherItem title=""/>
                <TeacherItem title=""/>
            </ScrollView>
        </View>    
    );
}

export default TeacherList;