import React from "react";
import { View, ViewEnd, Text, TextRed, TextBlue, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo } from "@expo/vector-icons";

import { Compras2 } from "../../components/Tables/TablesSelect";

const Select3 = ({ navigation }) => {

    return (
        <View>
            <Text>Assim, para determinarmos quais campos queremos de uma tabela, após o comando <TextRed>"SELECT"</TextRed> (Selecionar) nós descrevemos o nome das colunas que desejamos obter, separadas por vírgulas.</Text>
            <Text>Exemplo: Para obter apenas os nomes e os preços de cada produto da tabela <TextBlue>"COMPRAS"</TextBlue> executaremos este comando "SELECT <TextRed>PRODUTO</TextRed>, <TextRed>PRECO</TextRed> FROM COMPRAS", e este seria o resultado:</Text>  
            <Compras2 />
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Select2")} 
                    forward={() => navigation.navigate("Select4")} 
                />
            </ViewEnd>
        </View>
    )
};

Select3.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Select3;