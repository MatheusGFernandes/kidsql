import React from "react";
import { View, ViewEnd, Text, TextRed, TextBlue, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo } from "@expo/vector-icons";

import { ExampleOne } from "../../components/Tables/TablesCreate";

const Create2 = ({ navigation }) => {

    return (
        <View>
            <Text>Para criar uma tabela no banco de dados utilizamos o comando <TextRed>“CREATE TABLE”</TextRed>, que significa <TextRed>“CRIAR TABELA”</TextRed>. Logo em seguida definimos o nome que queremos colocar em nossa tabela, que nesse caso se chamará <TextBlue>“COMPRAS”</TextBlue>.</Text>
            <Text>Por fim definimos quais serão as colunas de nossa tabela e o tipo de dado que será armazenado nessa coluna, se será um número, um texto, uma data e etc.</Text>
            <View style={{ justifyContent: "center" }}>    
                <ExampleOne />
            </View>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Create1")} 
                    forward={() => navigation.navigate("Create3")} 
                />
            </ViewEnd>
        </View>
    )
};

Create2.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Create2;