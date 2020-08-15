import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import imgBack from '../../assets/images/icons/back.png';
import imgLogo from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';


interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title,children, headerRight}) => {
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.navigate("Landing");
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={imgBack} resizeMode="contain"/>
                </BorderlessButton>

                <Image source={imgLogo}  resizeMode="contain"/>
            </View>

            <View style={styles.header}>
                <Text style={styles.titleText}>{title}</Text>
                {headerRight}
            </View>
            

            {children}
        </View>
    )
}

export default PageHeader;