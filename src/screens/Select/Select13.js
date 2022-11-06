import React from "react";
import { View, Text, TextGreen, TextPurple, ViewMainButton, MainButton, TextMainButton, Image } from "../../styles/main";

const Select13 = ({ navigation }) => {

    return (
        <View>
            <TextGreen style={{fontSize: 26, alignSelf: "center"}}>PARABÉNS!!!</TextGreen>
            <Text>Você completou todos os módulos de ensino, fique ligado nas atualizações do app pois em breve a <TextPurple>Nala</TextPurple> vai entrar em novas aventuras!</Text>
            <Image source={require("../../assets/NalaPulando.png")} style={{width: 165, height: 350}}/>
            <Text>Continue praticando o módulo Select refazendo os exercícios</Text>
            <ViewMainButton>
                <MainButton 
                    onPress={() => navigation.navigate("Home")}>
                    <TextMainButton>Continuar</TextMainButton>
                </MainButton>
            </ViewMainButton>
        </View>
    )
};

export default Select13;