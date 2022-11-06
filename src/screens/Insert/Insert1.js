import React from "react";
import { Text, TextRed, ViewEnd, View, Image } from "../../styles/main";
import Navigation from "../../components/Navigation";

const Insert1 = ({ navigation }) => {

    return (
        <View>
            <Text>Agora que sabemos quais os produtos vamos comprar, então é bom guardamos eles na nossa tabela que acabamos de criar, para isso vamos utilizar o comando <TextRed>“INSERT INTO”.</TextRed></Text>
            <Text><TextRed>“INSERT INTO”</TextRed> significa “INSERIR EM” e logo em seguida indicamos em qual tabela nós iremos inserir esses dados, nesse caso na tabela “COMPRAS”: <TextRed>“INSERT INTO COMPRAS”</TextRed>.</Text>
            <View style={{ justifyContent: "center" }}>
                <Image source={require("../../assets/Insert.png")} style={{width: 450, height: 150}}/>
            </View>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Home")} 
                    forward={() => navigation.navigate("Insert2")} 
                />
            </ViewEnd>
        </View>
    )
};

export default Insert1;