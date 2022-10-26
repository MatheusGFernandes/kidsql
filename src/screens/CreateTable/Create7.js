import React, { useContext } from 'react';
import { View, Text, TextGreen, TextPurple, ViewMainButton, MainButton, TextMainButton, Image } from '../../styles/main';
import { Context } from "../../context/AppContext";
import useProgress from '../../hooks/useProgress';

const Create7 = ({ navigation }) => {

    const { progress, setProgress } = useContext(Context);
    const { saveProgress } = useProgress(progress, setProgress)

    return (
        <View>
            <TextGreen style={{fontSize: 26, alignSelf: 'center'}}>EXCELENTE!</TextGreen>
            <Text>Agora vamos ver quais são os produtos necessários para a casa.</Text>
            <Text><TextPurple>Nala</TextPurple> irá perguntar a sua mãe <TextPurple>Fátima</TextPurple>:</Text>
            <Image source={require("../../assets/NalaEFátima.png")} style={{width: 415, height: 380}}/>
            <ViewMainButton>
                <MainButton 
                    onPress={() => {
                        saveProgress("insertModule");
                        navigation.navigate('Page1');
                    }}>
                    <TextMainButton>Continuar</TextMainButton>
                </MainButton>
            </ViewMainButton>
        </View>
    )
};

export default Create7;