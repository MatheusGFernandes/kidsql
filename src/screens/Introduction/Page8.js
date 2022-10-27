import React, { useState, useEffect, useContext } from "react";
import { ViewEnd, Text, TextRed, ScrollView, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { ProdutosPK } from "../../components/Tables/TablesIntroduction";
import CheckBox from "../../components/CheckBox";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Page8 = ({ navigation }) => {

    const { font } = useContext(Context);

    const [answer, setAnswer] = useState();

    const alternatives = [
        { text: "Leite",         id: 1},
        { text: "Banana",        id: 2},
        { text: "Arroz",         id: 3},
        { text: "Refrigerante",  id: 4},
    ]

    return (
        <ScrollView>
            <Text>A <TextRed>"Chave Primária"</TextRed> de uma tabela nos ajuda a executar consultas mais precisas, para sabermos exatamente qual dado estamos resgatando, para que não haja redundância e duplicidade dos dados, o que tornaria nossa tabela muito confusa e desorganizada.
            </Text>
            <Text>Vamos praticar! Abaixo temos uma tabela, sendo sua chave primária representada por um <TextRed>"*"</TextRed> asterisco, qual é o nome do produto com a chave primária "5"?
            </Text>
            <ProdutosPK />
            <CheckBox verify={2} module={"introduction"} question={3} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Page7")} 
                    forward={
                        answer === 1 ? 
                            async () => {
                                const id = uuid.v4();

                                const newRegister = {

                                    id,
                                    module: "Introduction",
                                    question: 3,
                                    alternative: answer
                                };
                            
                                const response = await AsyncStorage.getItem("@Questions:KIDSQL");
                                const previousData = response ? JSON.parse(response) : [];
                                const data = [...previousData, newRegister];

                                previousData.some((register) => register.module === "Introduction" && register.question === 3) ? 
                                
                                    null : 
                                    await AsyncStorage.setItem("@Questions:KIDSQL", JSON.stringify(data))
                                ;

                                navigation.navigate("Page9")

                            } : () => null} 
                />
            </ViewEnd>
        </ScrollView>
    )
};

Page8.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Page8;