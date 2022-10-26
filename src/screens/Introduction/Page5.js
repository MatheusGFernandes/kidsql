import React, { useState, useEffect, useContext } from 'react';
import { ViewEnd, ScrollView, ViewTable, Text, TextRed } from '../../styles/main';
import Navigation from "../../components/Navigation";
import { Produtos, ExampleThree } from '../../components/Tables/TablesIntroduction';
import CheckBox from '../../components/CheckBox';
import { Context } from "../../context/AppContext";

import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const Page5 = ({ navigation }) => {
    
    const { font } = useContext(Context);

    const { getItem, setItem } = useAsyncStorage("@Questions:KIDSQL");
    const [answer, setAnswer]  = useState();
    const [verify, setVerify]  = useState(0);

    const fetchAnswer = async () => {

        const response = await getItem();
        const previousAnswer = response ? JSON.parse(response) : [];
        const teste = previousAnswer[0];
        const teste2 = teste?.alternative ?? 0;
        
        if (response != null) {
                
            setVerify(teste2);
        }
        
        return verify;
    }

    // useEffect(() => {
    //     navigation.addListener('didFocus', () => { // Todas vez que essa tela estiver em foco (ou seja, for chamada) recarrega os dados existentes
    //         fetchAnswer();
    //     });

    // }, []);

    const alternatives = [
        {text: "Produto, Quantidade, Validade, Preco", id: 1},
        {text: "Banana, 10, KG, 5", id: 2},
        {text: "Produto, Quantidade, Unidade, Preco",  id: 3},
        {text: "Arroz, 15, KG, 5",  id: 4},
    ];

    return (
        <ScrollView>
            <Text>Vamos ver se você entendeu, aqui temos a tabela <TextRed>PRODUTOS</TextRed>, que representa os produtos que vendem em um determinado local. Quais são as colunas dessa tabela?</Text>
            <Text>{verify}</Text>
            <ViewTable>
            <Produtos />
            </ViewTable>
            <CheckBox verify={0} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate('Page4')} 
                    forward={
                        answer === 3  ? 
                            async () => {
                                const id = uuid.v4();

                                const newRegister = {

                                    id,
                                    module: "Introduction",
                                    question: 1,
                                    alternative: answer
                                };
                                
                                const response = await getItem();
                                const previousData = response ? JSON.parse(response) : [];
                                const data = [...previousData, newRegister];

                                previousData.some((register) => register.module === "Introduction" && register.question === 1) ? 

                                    null :
                                    await setItem(JSON.stringify(data)) 
                                    
                                ;

                                console.log(previousData.filter((register) => register.module === "Introduction" && register.question === 1));
                                navigation.navigate('Page6')
                                    
                            }  : () => null} 
                />
            </ViewEnd>
            
        </ScrollView>
    )
};

export default Page5;