import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import styles from './styles';
import iconHeartOutline from '../../../src/assets/images/icons/heart-outline.png';
import iconUnfavorite from '../../../src/assets/images/icons/unfavorite.png';
import iconWhatsapp from '../../../src/assets/images/icons/whatsapp.png';
import { RectButton } from 'react-native-gesture-handler';

interface PageHeaderProps {
    title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${"5511979510575" }&text=${"Olá Proffy, tudo bem?"}`);
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image source={{uri: "https://github.com/gisiona.png"}} 
                    resizeMode="contain"
                    style={styles.avatar}/>
            

                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}> Gisiona Costa </Text>
                    <Text style={styles.profileSubject}> Programação Básica </Text>
                </View>
            </View>
            <Text style={styles.profileBio}>Profissional com mais de 7 anos de atuação no mercado de desenvolvimento de software para os mais diversos segmentos. </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>Preço/Hora {' '}
                    <Text style={styles.priceValue}>R$ 55,90</Text>
                </Text>
                
                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={iconHeartOutline} />
                    </RectButton>

                    <RectButton style={styles.contactButton} onPress={sendWhatsapp}>
                        <Image source={iconWhatsapp} />
                        <Text style={styles.contactText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default PageHeader;