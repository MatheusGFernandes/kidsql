import React, { useState, useContext } from "react";
import { View, ViewEnd, Text, TextRed, TextBlue, TextPurple } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";

import { Compras } from "../../components/Tables/TablesSelect";

const Select1 = ({ navigation }) => {

    return (
        <View>
            <Text>Agora nós temos a tabela <TextBlue>“COMPRAS”</TextBlue> completa para a <TextPurple>Nala</TextPurple> logo abaixo:</Text>
            <View style={{ justifyContent: "center" }}>    
                <Compras />
            </View>
            <Text>Para descobrirmos todos os dados que existem nessa tabela, executaremos o comando "<TextRed>SELECT * FROM COMPRAS;</TextRed>"</Text>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("HomeScreen")} 
                    forward={() => navigation.navigate("Select2")} 
                />
            </ViewEnd>
        </View>
    )
};

export default Select1;