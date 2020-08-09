import React, { useState } from 'react';
import { View,Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, RectButton, BorderlessButton } from 'react-native-gesture-handler';
import {Feather } from '@expo/vector-icons';

function TeacherList() {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    return (
        <View style={styles.container}>            
            <PageHeader title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.titleSearch}>Matéria</Text>
                        <TextInput style={styles.inputSearch} placeholder="Qual a matéria?" placeholderTextColor="#c1bccc"/>

                        <View style={styles.inputSearchGroup}>
                            <View style={styles.inputSearchBlock}>
                                <Text style={styles.titleSearch}>Dia da semana</Text>
                                <TextInput style={styles.inputSearch} placeholder="Qual o dia?" placeholderTextColor="#c1bccc"/>
                            </View>

                            <View style={styles.inputSearchBlock}>
                                <Text style={styles.titleSearch}>Horário</Text>
                                <TextInput style={styles.inputSearch} placeholder="Qual a hora?" placeholderTextColor="#c1bccc" />
                            </View>
                        </View>

                        <RectButton style={styles.buttonFilter}>
                            <Text style={styles.textFilter}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

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