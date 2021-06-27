import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';


export function CategorySelect(){
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }
        >
            {

            }
        </ScrollView>


    );
}