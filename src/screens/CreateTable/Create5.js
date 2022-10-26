import React, { useState, useContext } from 'react';
import { View, ViewEnd, ScrollView, Text, TextRed, TextBlue, StyleSheet, ViewImage, Image } from '../../styles/main';
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";

import CheckBox from '../../components/CheckBox';

import { ProdutosColuna } from '../../components/Tables/TablesCreate';

import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const Create5 = ({ navigation }) => {

    const { getItem, setItem } = useAsyncStorage("@Questions:KIDSQL");
    const [answer, setAnswer]  = useState();
    const [verify, setVerify]  = useState(0);

    const alternatives = [
        { text: "CODIGO INTEGER PRIMARY KEY, PRODUTO TEXT, PRECO INTEGER, UNIDADE TEXT", id: 1},
        { text: "PRODUTO TEXT, CODIGO INTEGER, UNIDADE TEXT, PRECO INTEGER", id: 2},
        { text: "CODIGO INTEGER PRIMARY KEY, PRODUTO TEXT, UNIDADE TEXT, PRECO INTEGER",  id: 3},
        { text: "CODIGO TEXT PRIMARY KEY, PRODUTO TEXT, UNIDADE TEXT, PRECO INTEGER",  id: 4},
    ];

    return (
        <View>
            <Text>Agora é sua vez, quais são as colunas e os seus tipos em ordem (da esquerda para a direita)?</Text>
            <ProdutosColuna />
            <CheckBox verify={3} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate('Create4')} 
                    forward={
                        answer === 1  ? 
                            async () => {
                                const id = uuid.v4();

                                const newRegister = {

                                    id,
                                    module: "Create",
                                    question: 1,
                                    alternative: answer
                                };
                                
                                const response = await getItem();
                                const previousData = response ? JSON.parse(response) : [];
                                const data = [...previousData, newRegister];

                                previousData.some((register) => register.module === "Create" && register.question === 1) ? 

                                    null :
                                    await setItem(JSON.stringify(data)) 
                                    
                                ;

                                navigation.navigate('Create6')
                                    
                            }  : () => null} 
                />
            </ViewEnd>
        </View>
    )
};

export default Create5;