import React, { useState, useContext } from "react";
import { Text, View, ViewEnd, ViewImage, Image } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";

const Page1 = ({ navigation }) => {

    const { font } = useContext(Context);

    return (
        <View>
            <Text>O que é um banco de dados?</Text>
            <Text>Banco de dados é um local, localizado por exemplo em um arquivo de computador, que armazena informações sobre um determinado lugar, objeto, conta, entre outros.</Text>
            <Text>Temos por exemplo o professor de sua escola, ele precisa guardar as notas da sua prova em algum lugar, para que no futuro ele consiga fazer a sua média e saber se você passou de ano ou não, correto?</Text>
            <Image source={require("../../assets/ProfessorNoComputador.png")}/>
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Home")} 
                    forward={() => navigation.navigate("Page2")} 
                />
            </ViewEnd>
        </View>
    )
};

export default Page1;