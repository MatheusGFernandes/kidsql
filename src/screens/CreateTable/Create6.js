import React, { useState } from "react";
import { View, ViewEnd, Text, TextPurple, TextGreen, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo } from "@expo/vector-icons";

import CheckBox from "../../components/CheckBox";

import uuid from "react-native-uuid";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const Create6 = ({ navigation }) => {

    const { getItem, setItem } = useAsyncStorage("@Questions:KIDSQL");
    const [answer, setAnswer]  = useState();

    const alternatives = [
        { text: "CREATE TABLE COMPRAS (CODIGO INTEGER PRIMARY KEY, PRODUTO INTEGER, QUANTIDADE TEXT, PRECO TEXT, IDADE INTEGER)", id: 1},
        { text: "CREATE TABLE (CODIGO INTEGER PRIMARY KEY, PRODUTO TEXT, QUANTIDADE INTEGER, PRECO TEXT, UNIDADE INTEGER)", id: 2},
        { text: "CREATE TABLE COMPRAS (CODIGO INTEGER PRIMARY KEY, PRODUTO TEXT, QUANTIDADE INTEGER, PRECO INTEGER, UNIDADE TEXT)",  id: 3},
        { text: "CREATE TABLE PESSOAS COMPRAS (PRODUTO TEXT, QUANTIDADE INTEGER,  PRECO INTEGER, UNIDADE TEXT)",  id: 4},
    ];

    return (
        <View>
            <Text><TextGreen>Muito bem!</TextGreen> Agora qual comando seria utilizado para criar a tabela chamada “COMPRAS” com as colunas “PRODUTO”, “QUANTIDADE”, “PRECO”, e “UNIDADE” para <TextPurple>Nala</TextPurple> anotar suas compras?</Text>
            <CheckBox verify={4} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    disabled={answer === undefined ? true : false}
                    reply  ={() => navigation.navigate("Create5")} 
                    forward={
                        answer === 3  ? 
                            async () => {
                                const id = uuid.v4();

                                const newRegister = {

                                    id,
                                    module: "Create",
                                    question: 2,
                                    alternative: answer
                                };
                                
                                const response = await getItem();
                                const previousData = response ? JSON.parse(response) : [];
                                const data = [...previousData, newRegister];

                                previousData.some((register) => register.module === "Create" && register.question === 2) ? 

                                    null :
                                    await setItem(JSON.stringify(data)) 
                                    
                                ;

                                navigation.navigate("Create7")
                                    
                            }  : () => null} 
                />
            </ViewEnd>
        </View>
    )
};

Create6.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Create6;