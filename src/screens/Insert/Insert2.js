import React from "react";
import { Text, TextRed, ViewEnd, View, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { InsertTable } from "../../components/Tables/TablesInsert";
import { Entypo } from "@expo/vector-icons";

const Insert2 = ({ navigation }) => {

    return (
        <View>
            <Text>Após essa primeira parte, precisamos definir em quais colunas nós iremos inserir estes dados <TextRed>(CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE)</TextRed> e os seus respectivos VALORES <TextRed>“VALUES (1, “LEITE”, 4, 5, “L”)</TextRed>. Dados do tipo texto precisam estar entre aspas “ ” para que o banco saiba diferenciar um texto de um número.</Text>
            <Text>Então para inserirmos o produto “Leite” em nossa tabela, utilizaríamos o seguinte comando:<TextRed>INSERT INTO COMPRAS (CODIGO, PRODUTO, QUANTIDADE, PRECO, UNIDADE) VALUES (1, “Leite”, 4, 5, “L”);</TextRed></Text>
            <View style={{ justifyContent: "center" }}>
                <InsertTable />
            </View>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Insert1")} 
                    forward={() => navigation.navigate("Insert3")} 
                />
            </ViewEnd>
        </View>
    )
};

Insert2.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Insert2;