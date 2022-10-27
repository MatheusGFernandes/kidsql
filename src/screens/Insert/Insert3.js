import React, { useState, useContext } from "react";
import { View, ViewEnd, ScrollView, Text, TextPurple, TextBlue, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

import CheckBox from "../../components/CheckBox";

import uuid from "react-native-uuid";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const Insert3 = ({ navigation }) => {

    const { getItem, setItem } = useAsyncStorage("@Questions:KIDSQL");
    const [answer, setAnswer]  = useState();

    const alternatives = [
        { text: "INSERT INTO COMPRAS (CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (2, Suco, 2, 8, L);",     id: 1},
        { text: "INSERT INTO COMPRAS (CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (2, “Suco”, 2, 8, “L”);", id: 2},
        { text: "INSERT INTO COMPRAS (PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (“Suco”, 2, 8, “L”);",            id: 3},
        { text: "INSERT INTO COMPRAS (CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (2, “Suco”, 8, 2, “L”);", id: 4},
    ];

    return (
        <View>
            <Text>Agora é sua vez, qual comando <TextPurple>Nala</TextPurple> digitaria para adicionar o produto <TextBlue>“Suco”</TextBlue>, com o <TextBlue>código 2</TextBlue>, preço de <TextBlue>8 reais</TextBlue> sendo sua quantidade de <TextBlue>2 Litros (L)</TextBlue>?</Text>
            <CheckBox verify={5} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Insert2")} 
                    forward={
                        answer === 2  ? 
                            async () => {
                                const id = uuid.v4();

                                const newRegister = {

                                    id,
                                    module: "Insert",
                                    question: 1,
                                    alternative: answer
                                };
                                
                                const response = await getItem();
                                const previousData = response ? JSON.parse(response) : [];
                                const data = [...previousData, newRegister];

                                previousData.some((register) => register.module === "Insert" && register.question === 1) ? 

                                    null :
                                    await setItem(JSON.stringify(data)) 
                                    
                                ;

                                navigation.navigate("Insert4")
                                    
                            }  : () => null} 
                />
            </ViewEnd>
        </View>
    )
};

Insert3.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};


export default Insert3;