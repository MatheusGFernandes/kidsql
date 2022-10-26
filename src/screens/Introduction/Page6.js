import React, { useState, useContext } from 'react';
import { View, ViewEnd, Text, TextRed } from '../../styles/main';
import Navigation from "../../components/Navigation";
import { Produtos, ExampleThree } from '../../components/Tables/TablesIntroduction';
import CheckBox from '../../components/CheckBox';
import { Context } from "../../context/AppContext";

import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Loading } from '../../components/Loading';

import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Page6 = ({ navigation }) => {

    const { font } = useContext(Context);

    const [answer, setAnswer] = useState();

    // const previousAnswer = AsyncStorage.getItem("@Questions:KIDSQL");
    // console.log(previousAnswer[1] );

    const alternatives = [
        { text: "Bolacha, 20, UN, 3", id: 1},
        { text: "Leite, 12, L, 6", id: 2},
        { text: "Leite, 6, L, 12",  id: 3},
        { text: "Refrigerante, 10, L, 7",  id: 4},
    ]

    return (
        <View>
            <Text>Quais são os dados do terceiro registro dessa tabela?</Text>
            <Produtos />
            <CheckBox module={"introduction"} question={2} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    disable={
                        answer ? false : true
                    }
                    reply  ={() => navigation.navigate('Page5')} 
                    forward={
                        answer === 2 ? 
                            async () => {
                                const id = uuid.v4();

                                const newRegister = {

                                    id,
                                    module: "Introduction",
                                    question: 2,
                                    alternative: answer
                                };
                            
                                const response = await AsyncStorage.getItem("@Questions:KIDSQL");
                                const previousData = response ? JSON.parse(response) : [];
                                const data = [...previousData, newRegister];

                                previousData.some((register) => register.module === "Introduction" && register.question === 2) ? 
                                
                                    null : 
                                    await AsyncStorage.setItem("@Questions:KIDSQL", JSON.stringify(data))
                                ;

                                navigation.navigate('Page7')

                            }  : () => null} 
                />
            </ViewEnd>
            
        </View>
    )
};

export default Page6;