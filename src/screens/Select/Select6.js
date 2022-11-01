import React, { useState, useContext } from "react";
import { ScrollView, ViewEnd, Text, TextRed, TextGreen, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

import { Compras4 } from "../../components/Tables/TablesSelect";

const Select6 = ({ navigation }) => {

    return (
        <View>
            <Text><TextGreen>PARABÉNS!</TextGreen> Podemos também aplicar mais de um filtro utilizando o comando <TextRed>"AND"</TextRed> que significa <TextRed>"E"</TextRed> em português, logo após o primeiro filtro utilizando o comando <TextRed>"WHERE"</TextRed>:</Text>
            <Text>"SELECT PRODUTO, PRECO FROM COMPRAS WHERE PRECO `{'<'}` 6 <TextRed>AND</TextRed> QUANTIDADE `{'>'}` 3"</Text>
            <Text>(SELECIONE PRODUTO E PRECO DA TABELA DE COMPRAS ONDE PREÇO SEJA MENOR QUE 10 E A QUANTIDADE MAIOR QUE 10)</Text>  
            <Compras4 />
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Select5")} 
                    forward={() => navigation.navigate("Select7")} 
                />
            </ViewEnd>
        </View>
    )
};

Select6.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Select6;