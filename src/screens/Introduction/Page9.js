import React, { useContext } from "react";
import { View, Text, TextGreen, TextBlue, ViewMainButton, MainButton, TextMainButton } from "../../styles/main";
import { Context } from "../../context/AppContext";
import useProgress from "../../hooks/useProgress";

const Page9 = ({ navigation }) => {

    const { progress, setProgress } = useContext(Context);
    const { saveProgress } = useProgress(progress, setProgress)

    return (
        <View>
            <TextGreen style={{fontSize: 26, alignSelf: "center"}}>Muito bem, parabéns!</TextGreen>
            <Text style={{fontSize: 22}}>Você aprendeu os principais conceitos de uma tabela, você desbloqueou o módulo <TextBlue style={{fontSize: 22}}>"CREATE TABLE"</TextBlue>.</Text>
            <Text style={{fontSize: 22}}>Agora vamos aprender como criar uma tabela em um banco de dados.</Text>
            <ViewMainButton>
                <MainButton 
                    onPress={() => {
                        saveProgress("createModule");
                        navigation.navigate("Home");
                    }}>
                    <TextMainButton>Vamos lá!</TextMainButton>
                </MainButton>
            </ViewMainButton>
        </View>
    )
};

export default Page9;