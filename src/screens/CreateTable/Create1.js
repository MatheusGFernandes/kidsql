import React from "react";
import { Text, TextBlue, TextPurple, ViewEnd, ScrollView, Image } from "../../styles/main";
import Navigation from "../../components/Navigation";

const Create1 = ({ navigation }) => {

    return (
        <ScrollView>
            <Text><TextPurple>Nala</TextPurple> tem 14 anos e vendo sua mãe Vitória fazendo compras no supermercado ficou interessada em ajudá-la.</Text>
            <Image source={require("../../assets/Nala.png")} style={{width: 165, height: 350}}/>
            <Text>O primeiro passo para ajudar seria anotando quais produtos sua mãe precisa comprar no supermercado.</Text>
            <Text>Para isso, vamos ajudar <TextPurple>Nala</TextPurple> criando uma tabela chamada <TextBlue>“COMPRAS”</TextBlue>, para que ela guarde quais produtos serão necessários para a despesa de casa.</Text>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Home")} 
                    forward={() => navigation.navigate("Create2")} 
                />
            </ViewEnd>
        </ScrollView>
    )
};

export default Create1;