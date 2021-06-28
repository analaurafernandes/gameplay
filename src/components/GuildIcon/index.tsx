import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function GuildIcon(){
    const uri = 'https://th.bing.com/th/id/R2c520005d2c1bd0bd7012d260eba09c5?rik=wNOfLOgtRpb0qQ&pid=ImgRaw'

    return(
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}