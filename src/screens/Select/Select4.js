import React, { useState, useContext } from "react";
import { ScrollView, ViewEnd, Text, TextRed, TextBlue, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

import { Compras3 } from "../../components/Tables/TablesSelect";

const Select4 = ({ navigation }) => {

    return (
        <ScrollView>
            <Text>Nós também podemos aplicar filtros em nossas consultas, ou seja, definir quais informações desejamos obter com base em restrições de preço por exemplo.
            Se quisermos saber todo os produtos que tenham o preço maior ou igual a 5 reais, aplicaremos o filtro <TextRed>"WHERE PRECO `{'>'}= 6"</TextRed> no final do nosso comando:</Text>
            <Text>"SELECT PRODUTO, PRECO FROM COMPRAS <TextRed>WHERE</TextRed> PRECO `{'>'}`= 6".</Text>  
            <Compras3 />
            <Text>A instrução <TextRed>"WHERE"</TextRed> significa <TextRed>"ONDE"</TextRed>, e logo após descrevemos em qual campo desejamos aplicar esse filtro, nesse caso no campo <TextBlue>"PRECO"</TextBlue>, em seguida sinalizamos a comparação que realizaremos, nesse caso <TextRed>`{'>'}`=</TextRed> e por fim o valor desta comparação "6". Em outras palavras estamos dizendo para o banco de dados: "SELECIONE PRODUTO E PREÇO DA TABELA COMPRAS ONDE O PREÇO SEJA MAIOR OU IGUAL A 6".</Text>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Select3")} 
                    forward={() => navigation.navigate("Select5")} 
                />
            </ViewEnd>
        </ScrollView>
    )
};

Select4.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Select4;