import React, { useState, useContext } from 'react';
import { View, ViewEnd, Text, TextRed } from '../../styles/main';
import Navigation from "../../components/Navigation";
import { ExampleOne } from '../../components/Tables/TablesIntroduction';
import { Context } from "../../context/AppContext";

import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Loading } from '../../components/Loading';

const Page4 = ({ navigation }) => {

    const { font } = useContext(Context);

    return (
        <View>
            <Text>Banco de dados podem ser resumidos em tabelas, contendo linhas e colunas. Nesse caso das notas das provas do professor, supomos que ele insira as notas em uma tabela chamada <TextRed>"Notas das Provas"</TextRed>, e essa tabela contém as colunas <TextRed>"NOME" (Nome do aluno)</TextRed>, <TextRed>"DATA" (Data da prova)</TextRed>, e <TextRed>"NOTA" (Nota que o aluno tirou na prova)</TextRed>, e cada linha representa a nota de um aluno em uma determinada prova aplicada naquela data. Ao final, teríamos uma tabela assim como essa:</Text>
            <ExampleOne />
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate('Page3')} 
                    forward={() => navigation.navigate('Page5')} 
                />
            </ViewEnd>
            
        </View>
    )
};

export default Page4;