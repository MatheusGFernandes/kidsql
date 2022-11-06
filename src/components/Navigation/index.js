import React from 'react';
import { ViewNavigation, ButtonReply, ButtonForward, TextNavigation } from './style';
import { Entypo } from '@expo/vector-icons';

const Navigation = ({ reply, forward, disabled }) => {

    return (
        <ViewNavigation>
            <ButtonReply 
                activeOpacity={0.8} 
                onPress={() => reply()}
            >
                <TextNavigation><Entypo name="reply" size={16} color="white"/>    Voltar</TextNavigation>
            </ButtonReply>
            <ButtonForward 
                disabled={disabled}
                activeOpacity={0.8} 
                onPress={() => forward()}
            >
                <TextNavigation>Próximo    <Entypo name="forward" size={16} color="white"/></TextNavigation>
            </ButtonForward>
        </ViewNavigation>
    )
};

Navigation.defaultProps = {

    disable: false
};

export default Navigation;
