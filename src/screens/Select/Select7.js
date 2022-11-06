import React from "react";
import { View, Text, TextBlue, TextPurple, ViewEnd, Image, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo } from "@expo/vector-icons";

const Select7 = ({ navigation }) => {

    return (
        <View>
            <Text>Agora vamos praticar esses comandos arrastando os blocos disponíveis!</Text>
            <Text><TextPurple>Nala</TextPurple> irá ajudar sua mãe <TextPurple>Fátima</TextPurple> a fazer compras no <TextBlue>Supermercado</TextBlue></Text>
            <Image source={require("../../assets/Supermercado.png")} style={{width: 300, height: 350}}/>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Select6")} 
                    forward={() => navigation.navigate("Select8")} 
                />
            </ViewEnd>
        </View>
    )
};

Select7.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};


export default Select7;