import React, { useState, useContext } from "react";
import { View, ViewEnd, Text, TextRed, TextBlue, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

import { ExampleTwo } from "../../components/Tables/TablesCreate";

const Create3 = ({ navigation }) => {

    return (
        <View>
            <Text>Para sabermos quais produtos devemos comprar, nós precisaremos saber o produto, a quantidade a ser comprada, o preço e a unidade desse produto, além é claro do código de cada produto <TextRed>(Chave Primária)</TextRed>. Assim temos como exemplo o comando <TextRed>“CREATE TABLE COMPRAS (CODIGO INTEGER PRIMARY KEY, PRODUTO TEXT, QUANTIDADE INTEGER, UNIDADE TEXT)”</TextRed>.</Text>
            <View style={{ justifyContent: "center" }}>    
                <ExampleTwo />
            </View>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Create2")} 
                    forward={() => navigation.navigate("Create4")} 
                />
            </ViewEnd>
        </View>
    )
};

Create3.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Create3;