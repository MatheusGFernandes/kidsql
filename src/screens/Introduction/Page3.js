import React, { useState, useContext } from 'react';
import { Text, View, ViewEnd, ViewImage, Image } from '../../styles/main';
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";

import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Loading } from '../../components/Loading';

const Page3 = ({ navigation }) => {

    const { font } = useContext(Context);

    return (
        <View>
            <Text>E é justamente em um banco de dados que esse professor irá guardar as notas das provas de cada aluno, para que no futuro ele possa consultar essas notas e conseguir calcular sua média, ou até mesmo caso os pais de um aluno queiram saber qual nota seu filho tirou em uma determinada prova.</Text>
            <Image source={require("../../assets/Prova.png")} />
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate('Page2')} 
                    forward={() => navigation.navigate('Page4')} 
                />
            </ViewEnd>
        </View>
    )
};

export default Page3;