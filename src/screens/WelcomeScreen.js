import React, { useEffect, useContext } from 'react';
import { View, Title, SubTitle, ViewMainButton, MainButton, TextMainButton, Logo } from '../styles/main';
import { Context } from "../context/AppContext";

const HomeScreen = ({ navigation }) => {

    const { name, font } = useContext(Context);

    return (
        <View>
            <Logo/>
            <Title>Olá! Seja muito bem-vindo(a) ao KIDSQL</Title>
            <SubTitle>Aqui você aprenderá sobre banco de dados e como fazer consultas dentro dele, vamos começar?</SubTitle>
            <ViewMainButton>
                <MainButton 
                    onPress={() => navigation.navigate('Home')}>
                    <TextMainButton>Vamos lá!</TextMainButton>
                </MainButton>
            </ViewMainButton>
        </View>
    )
};

// .color1 { #5b1d99 };
// .color2 { #0074b4 };
// .color3 { #00b34c };
// .color4 { #ffd41f };
// .color5 { #fc6e3d };
// .color6 { #eb2828 };

export default HomeScreen;