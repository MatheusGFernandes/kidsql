import React, { useState, useContext } from "react";
import { Text, TextBlue, TextPurple, ViewEnd, ScrollView, Image, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

const Select7 = ({ navigation }) => {

    return (
        <ScrollView>
            <Text>Agora vamos praticar esses comandos arrastando os blocos disponíveis!</Text>
            <Text><TextPurple>Nala</TextPurple> irá ajudar sua mãe <TextPurple>Fátima</TextPurple> a fazer compras no <TextBlue>Supermercado</TextBlue></Text>
            <Image source={require("../../assets/Nala.png")} style={{width: 165, height: 350}}/>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Select6")} 
                    forward={() => navigation.navigate("Select8")} 
                />
            </ViewEnd>
        </ScrollView>
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