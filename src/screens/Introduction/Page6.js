import React, { useEffect } from "react";
import { Text, TextRed, View, ViewEnd, Image, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo } from "@expo/vector-icons";

const Page6 = ({ navigation }) => {

    // useEffect(() => {
    //     navigation.addListener("didFocus", () => { // Todas vez que essa tela estiver em foco (ou seja, for chamada) recarrega os blogs existentes
    //         fetchQuestions();
    //     });

    // }, []);

    // async function fetchQuestions () {
    //     const response = await AsyncStorage.getItem("@Questions:KIDSQL");
    //     const data = response ? JSON.parse(response) : [];

    // }

    return (
        <View>
            <Text>Porém há um elemento essencial para que seja possível fazer consultas e diferenciar os dados em um banco de dados, esse elemento se chama <TextRed>"Chave Primária"</TextRed>.</Text>
            <Text>A <TextRed>"Chave Primária"</TextRed> é um identificador único para cada linha de uma determinada tabela, pois é possível por exemplo naquela tabela "Notas das Provas" do professor, que exista 2 alunos com o mesmo nome, então como o professor saberia diferenciar qual aluno tirou sua respectiva nota? Utilizando a <TextRed>"Chave Primária"</TextRed>.
            </Text>
            <Image source={require("../../assets/PessoaConfusa.png")} />
            <ViewEnd>
                <Navigation 
                    reply  ={() => navigation.navigate("Page5")} 
                    forward={() => navigation.navigate("Page7")} 
                />
            </ViewEnd>
        </View>
    )
};

Page6.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Page6;