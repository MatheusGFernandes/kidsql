import React, { useState, useContext } from "react";
import { View, ViewEnd, Text, TextRed, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

import CheckBox from "../../components/CheckBox";

import uuid from "react-native-uuid";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const Select5 = ({ navigation }) => {

    const { getItem, setItem } = useAsyncStorage("@Questions:KIDSQL");
    const [answer, setAnswer]  = useState();

    const alternatives = [
        { text: "Ovo, Suco, 10, 8",      id: 1},
        { text: "Chocolate, Ovo, 7, 10", id: 2},
        { text: "Suco, Chocolate, 8, 7", id: 3},
        { text: "Suco, Chocolate, 7, 8", id: 4},
    ];

    return (
        <View>
            <Text>Vamos praticar, executando esse comando <TextRed>"SELECT PRODUTO, PRECO FROM COMPRAS WHERE PRECO `{'>'}` 7"</TextRed>, quais informações o banco nos retornaria?</Text>
            <CheckBox verify={7} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Select3")} 
                    forward={
                        answer === 3  ? 
                            async () => {
                                const id = uuid.v4();

                                const newRegister = {

                                    id,
                                    module: "Select",
                                    question: 1,
                                    alternative: answer
                                };
                                
                                const response = await getItem();
                                const previousData = response ? JSON.parse(response) : [];
                                const data = [...previousData, newRegister];

                                previousData.some((register) => register.module === "Select" && register.question === 1) ? 

                                    null :
                                    await setItem(JSON.stringify(data)) 
                                    
                                ;

                                navigation.navigate("Select6")
                                    
                            }  : () => null} 
                />
            </ViewEnd>
        </View>
    )
};

Select5.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};


export default Select5;