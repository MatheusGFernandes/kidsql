import React, { useState } from "react";
import { ViewEnd, View, ViewTable, Text, TextRed, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Produtos } from "../../components/Tables/TablesIntroduction";
import CheckBox from "../../components/CheckBox";
import { Entypo } from "@expo/vector-icons";

import uuid from "react-native-uuid";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const Page4 = ({ navigation }) => {

    const { getItem, setItem } = useAsyncStorage("@Questions:KIDSQL");
    const [answer, setAnswer]  = useState();

    // useEffect(() => {
    //     navigation.addListener("didFocus", () => { // Todas vez que essa tela estiver em foco (ou seja, for chamada) recarrega os dados existentes
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
        <View>
            <Text>Vamos ver se você entendeu, aqui temos a tabela <TextRed>PRODUTOS</TextRed>, que representa os produtos que vendem em um determinado local. Quais são as colunas dessa tabela?</Text>
            <Produtos />
            <CheckBox verify={0} options={alternatives} onChange={(alternative) => setAnswer(alternative[0])}/>
            <ViewEnd>
                <Navigation 
                    disabled={answer === undefined ? true : false}
                    reply  ={() => navigation.navigate("Page3")} 
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

                                // console.log(previousData.filter((register) => register.module === "Introduction" && register.question === 1));
                                navigation.navigate("Page5")
                                    
                            }  : () => null} 
                />
            </ViewEnd>
            
        </View>
    )
};

Page4.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Page4;