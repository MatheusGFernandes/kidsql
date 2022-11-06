import React from "react";
import { View, ViewEnd, Text, TextRed, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo } from "@expo/vector-icons";

const Create4 = ({ navigation }) => {

    return (
        <View>
            <Text>Para definir as colunas de nossa tabela, nós descrevemos o nome da coluna seguida pelo seu tipo de dado <TextRed>“CODIGO INTEGER”</TextRed>, sendo “CODIGO” o nome da coluna e “INTEGER” o seu tipo, “INTEGER” significa “INTEIRO”, representando uma coluna que armazenará números inteiros.</Text>
            <Text>O mesmo ocorre com <TextRed>“PRODUTO TEXT”</TextRed>, sendo “PRODUTO” a coluna representando o nome do produto e “TEXT” sendo o tipo de dado da coluna, nesse caso um tipo “TEXTO”, que utiliza letras e números.</Text>
            <Text>Para sinalizarmos que a coluna será uma chave primária, adicionamos o comando <TextRed>“PRIMARY KEY”</TextRed> (Chave primária em inglês) logo após definir o seu tipo de dado, exemplo: <TextRed>“CODIGO INTEGER PRIMARY KEY”</TextRed>.</Text>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Create3")} 
                    forward={() => navigation.navigate("Create5")} 
                />
            </ViewEnd>
        </View>
    )
};

Create4.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Create4;