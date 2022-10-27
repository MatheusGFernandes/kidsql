import React, { useState, useContext } from "react";
import { Text, View, ViewEnd, ViewImage, Image, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

const Page2 = ({ navigation }) => {

    const { font } = useContext(Context);

    return (
        <View>
            <Text>E é justamente em um banco de dados que esse professor irá guardar as notas das provas de cada aluno, para que no futuro ele possa consultar essas notas e conseguir calcular sua média, ou até mesmo caso os pais de um aluno queiram saber qual nota seu filho tirou em uma determinada prova.</Text>
            <Image source={require("../../assets/Prova.png")} />
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Page1")} 
                    forward={() => navigation.navigate("Page3")} 
                />
            </ViewEnd>
        </View>
    )
};

Page2.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Page2;