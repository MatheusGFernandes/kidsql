import React, { useState, useContext } from "react";
import { ScrollView, ViewEnd, Text, TextRed, TextBlue, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

const Select2 = ({ navigation }) => {

    return (
        <ScrollView>
            <Text>Vamos entender passo a passo o que significa cada palavra desse comando:</Text>
            <Text>A palavra <TextRed>"SELECT"</TextRed> significa <TextBlue>"SELECIONAR"</TextBlue> é ela que será responsável por definir quais campos (colunas) queremos resgatar ao fazer a consulta, enquanto que o <TextRed>"*"</TextRed> diz ao banco que queremos selecionar <TextBlue>TODOS</TextBlue> os campos de uma tabela.</Text>
            <Text>A palavra <TextRed>"FROM"</TextRed> significa <TextBlue>"DE"</TextBlue>, ela que nos diz DE qual tabela nós queremos resgatar aqueles dados, nesse caso da tabela <TextBlue>"COMPRAS"</TextBlue>. Em outras palavras com o comando</Text>
            <Text><TextRed>"SELECT * FROM COMPRAS"</TextRed> estamos dizendo ao banco de dados <TextBlue>"SELECIONE TODAS AS INFORMAÇÕES DA TABELA COMPRAS"</TextBlue>. Mas para casos em que as tabelas possuem muitas colunas, não é interessante utilizar o <TextRed>"*"</TextRed>, pois muitos dados seriam resgatados, e também na maioria dos casos nós não queremos ver todas as informações, apenas as que nos interessam.</Text>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Select1")} 
                    forward={() => navigation.navigate("Select3")} 
                />
            </ViewEnd>
        </ScrollView>
    )
};

Select2.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Select2;