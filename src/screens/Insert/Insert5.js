import React, { useContext } from "react";
import { View, Text, TextGreen, TextBlue, ViewMainButton, MainButton, TextMainButton, Image } from "../../styles/main";
import { Context } from "../../context/AppContext";
import useProgress from "../../hooks/useProgress";

const Insert5 = ({ navigation }) => {

    const { progress, setProgress } = useContext(Context);
    const { saveProgress } = useProgress(progress, setProgress)

    return (
        <View>
            <TextGreen style={{fontSize: 26, alignSelf: "center"}}>ÓTIMO!</TextGreen>
            <Text>Agora que você aprendeu a criar tabelas <TextBlue>“CREATE TABLE”</TextBlue> e a inserir dados nela <TextBlue>“INSERT INTO”</TextBlue>, vamos aprender a realizar consultas para resgatarmos os dados armazenados em nossa tabela.</Text>
            <Text>Você desbloqueou o módulo <TextBlue>Select</TextBlue></Text>
            <Image source={require("../../assets/NalaPulando.png")} style={{width: 165, height: 350}}/>
            <ViewMainButton>
                <MainButton 
                    onPress={() => {
                        saveProgress("selectModule");
                        navigation.navigate("Home");
                    }}>
                    <TextMainButton>Continuar</TextMainButton>
                </MainButton>
            </ViewMainButton>
        </View>
    )
};

export default Insert5;