import React, { useState } from "react";
import { View, ViewEnd, Text, TextBlue, TextGreen, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo } from "@expo/vector-icons";

import CheckBox from "../../components/CheckBox";

import uuid from "react-native-uuid";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const Insert4 = ({ navigation }) => {

    const { getItem, setItem } = useAsyncStorage("@Questions:KIDSQL");
    const [answer, setAnswer]  = useState();

    const alternatives = [
        { text: "INSERT INTO (CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (3, “Chocolate”, 2, 7, “UN”);",         id: 1},
        { text: "INSERT INTO COMPRAS (CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (2, “Chocolate”, 3, 7, “UN”);", id: 2},
        { text: "INSERT INTO COMPRAS (CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (3, “Chocolate”, 2, 7, “KG”);", id: 3},
        { text: "INSERT INTO COMPRAS (CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (3, “Chocolate”, 2, 7, “UN”);", id: 4},
    ];

    return (
        <View>
            <Text><TextGreen>Muito bem!</TextGreen> E agora para adicionarmos o produto <TextBlue>“Chocolate”</TextBlue>, com o <TextBlue>código 3</TextBlue>, preço de <TextBlue>7 reais</TextBlue> sendo sua quantidade em <TextBlue>2 unidades (“UN”)</TextBlue>?</Text>
            <CheckBox verify={6} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    disabled={answer === undefined ? true : false}
                    reply  ={() => navigation.navigate("Insert3")} 
                    forward={
                        answer === 4  ? 
                            async () => {
                                const id = uuid.v4();

                                const newRegister = {

                                    id,
                                    module: "Insert",
                                    question: 2,
                                    alternative: answer
                                };
                                
                                const response = await getItem();
                                const previousData = response ? JSON.parse(response) : [];
                                const data = [...previousData, newRegister];

                                previousData.some((register) => register.module === "Insert" && register.question === 2) ? 

                                    null :
                                    await setItem(JSON.stringify(data)) 
                                    
                                ;

                                navigation.navigate("Insert5")
                                    
                            }  : () => null} 
                />
            </ViewEnd>
        </View>
    )
};

Insert4.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};


export default Insert4;