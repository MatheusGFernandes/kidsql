import React, { useContext } from 'react';
import { Text, TextRed, TextBlue, ScrollView, ViewEnd, ViewImage, Image } from '../../styles/main';
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";

import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Loading } from '../../components/Loading';

const Page7 = ({ navigation }) => {

    const { font } = useContext(Context);

    return (
        <ScrollView>
            <Text>Nesse caso a <TextRed>"Chave Primária"</TextRed> seria uma coluna a mais que adicionaríamos na nossa tabela, e essa coluna se chamaria "CÓDIGO". Essa coluna "CÓDIGO" seria um número que identificaria cada aluno, sendo um número que NUNCA se repete, ou seja, NUNCA existiria 2 ou mais alunos com códigos iguais.</Text>
            <Text>Voltando ao exemplo da tabela de notas, caso existissem dois alunos com o mesmo nome, por exemplo "Matheus Fernandes", o professor saberia diferenciar esses 2 alunos pois cada um teria o seu código único, existindo assim um "Matheus Fernandes" com o código <TextBlue>"07"</TextBlue> e outro "Matheus Fernandes" com o código <TextBlue>"09"</TextBlue>, por exemplo.</Text>
            <Image source={require("../../assets/Meninos.png")} />
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate('Page7')} 
                    forward={() => navigation.navigate('Page9')} 
                />
            </ViewEnd>
        </ScrollView>
    )
};

export default Page7;