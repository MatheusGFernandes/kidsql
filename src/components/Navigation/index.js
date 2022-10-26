import React, { useContext } from 'react';
import { ViewNavigation, ButtonNavigation, TextNavigation } from './style';
import { Entypo } from '@expo/vector-icons';
import { Context } from "../../context/AppContext";


const Navigation = ({ reply, forward }) => {

    const { font } = useContext(Context);
    return (
        <ViewNavigation>
            <ButtonNavigation 
                activeOpacity={0.8} 
                onPress={() => reply()}
            >
                <TextNavigation><Entypo name="reply" size={16} color="white"/>    Voltar</TextNavigation>
            </ButtonNavigation>
            <ButtonNavigation 
                activeOpacity={0.8} 
                onPress={() => forward()}
            >
                <TextNavigation>Próximo    <Entypo name="forward" size={16} color="white"/></TextNavigation>
            </ButtonNavigation>
        </ViewNavigation>
    )
};

export default Navigation;
