import React, { useEffect, useContext } from 'react';
import { Text, TextRed, View, ViewEnd, ViewImage, Image } from '../../styles/main';
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";

import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Loading } from '../../components/Loading';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Page7 = ({ navigation }) => {

    const { font } = useContext(Context);

    useEffect(() => {
        navigation.addListener('didFocus', () => { // Todas vez que essa tela estiver em foco (ou seja, for chamada) recarrega os blogs existentes
            fetchQuestions();
        });

    }, []);

    async function fetchQuestions () {
        const response = await AsyncStorage.getItem("@Questions:KIDSQL");
        const data = response ? JSON.parse(response) : [];
        console.log(data);

    }

    return (
        <View>
            <Text>Porém há um elemento essencial para que seja possível fazer consultas e diferenciar os dados em um banco de dados, esse elemento se chama <TextRed>"Chave Primária"</TextRed>.</Text>
            <Text>A <TextRed>"Chave Primária"</TextRed> é um identificador único para cada linha de uma determinada tabela, pois é possível por exemplo naquela tabela "Notas das Provas" do professor, que exista 2 alunos com o mesmo nome, então como o professor saberia diferenciar qual aluno tirou sua respectiva nota? Utilizando a <TextRed>"Chave Primária"</TextRed>.
            </Text>
            <Image source={require("../../assets/PessoaConfusa.png")} />
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate('Page6')} 
                    forward={() => navigation.navigate('Page8')} 
                />
            </ViewEnd>
        </View>
    )
};

export default Page7;